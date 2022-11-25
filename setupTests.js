// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

/**
 * Jest Setup
 */

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { JSDOM } from 'jsdom'

const { window } = new JSDOM('<!doctype html><html><body></body></html>')

global.document = window.document

jest.mock('firebase/app', () => {
  return {
    __esModule: true,

    initializeApp: jest.fn()
  }
})
jest.mock('firebase/firestore/lite')