'use strict'

const http = require('follow-redirects').http
const https = require('follow-redirects').https
const qs = require('qs')
const url = require('url')

module.exports = function req (args) {
  return new Promise((resolve, reject) => {
    if (typeof args !== 'string' && !args.url) {
      return reject(new Error('Missing URL'))
    }

    if (typeof args === 'string') {
      args = {url: args}
    }

    const parsedUrl = url.parse(args.url)
    const protocol = parsedUrl.protocol === 'http:' ? http : https
    const options = Object.assign({
      hostname: parsedUrl.hostname,
      port: Number(parsedUrl.port || parsedUrl.protocol === 'http:' ? '80' : '443'),
      method: args.form || args.json ? 'POST' : 'GET',
      headers: {},
      path: parsedUrl.path,
      auth: parsedUrl.auth || null,
      encoding: 'utf-8'
    }, args)

    if (options.form) {
      options.data = typeof options.form === 'string' ? options.form : qs.stringify(options.form)
      options.headers = Object.assign(options.headers, {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(options.data)
      })
    }

    if (options.json && Object.prototype.toString.call(options.json) === '[object Object]') {
      options.data = JSON.stringify(options.json)
      options.headers = Object.assign(options.headers, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(options.data)
      })
    }

    const req = protocol.request(options, (res) => {
      res.setEncoding(options.encoding)

      res.body = ''
      res.on('data', (chunk) => {
        res.body += chunk
      })
      res.on('end', () => {
        try {
          res.body = JSON.parse(res.body)
          resolve(res)
        } catch (e) {
          resolve(res)
        }
      })
    })

    req.on('error', (error) => reject(error))
    req.on('timeout', () => {
      req.abort()
      reject(new Error('Request timed out'))
    })

    options.data && req.write(options.data)

    req.end()
  })
}
