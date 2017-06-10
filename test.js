/* eslint-env jest */
'use strict'

const req = require('./')

test('puny req', () => {
  expect(req).toBeDefined()
  expect(typeof req).toBe('function')
})
