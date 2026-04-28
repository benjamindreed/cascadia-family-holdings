import { describe, it, expect } from 'vitest'
import { validateContact } from './validate'

const valid = {
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane@example.com',
  message: 'Hello, I would like to learn more.',
}

describe('validateContact', () => {
  it('returns null for valid input', () => {
    expect(validateContact(valid)).toBeNull()
  })

  it('returns error when firstName is empty', () => {
    expect(validateContact({ ...valid, firstName: '' })).toBe('First name is required')
  })

  it('returns error when firstName is whitespace only', () => {
    expect(validateContact({ ...valid, firstName: '   ' })).toBe('First name is required')
  })

  it('returns error when lastName is empty', () => {
    expect(validateContact({ ...valid, lastName: '' })).toBe('Last name is required')
  })

  it('returns error when email is empty', () => {
    expect(validateContact({ ...valid, email: '' })).toBe('Email is required')
  })

  it('returns error when message is empty', () => {
    expect(validateContact({ ...valid, message: '' })).toBe('Message is required')
  })

  it('returns error for malformed email', () => {
    expect(validateContact({ ...valid, email: 'notanemail' })).toBe('Invalid email address')
  })

  it('returns error for email missing domain', () => {
    expect(validateContact({ ...valid, email: 'user@' })).toBe('Invalid email address')
  })
})
