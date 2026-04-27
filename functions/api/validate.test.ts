import { describe, it, expect } from 'vitest';
import { validateContact } from './validate';

const valid = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  subject: 'Investment Inquiry',
  message: 'Hello, I would like to learn more.',
};

describe('validateContact', () => {
  it('returns null for valid input', () => {
    expect(validateContact(valid)).toBeNull();
  });

  it('returns error when name is empty', () => {
    expect(validateContact({ ...valid, name: '' })).toBe('All fields are required');
  });

  it('returns error when name is whitespace only', () => {
    expect(validateContact({ ...valid, name: '   ' })).toBe('All fields are required');
  });

  it('returns error when email is empty', () => {
    expect(validateContact({ ...valid, email: '' })).toBe('All fields are required');
  });

  it('returns error when subject is empty', () => {
    expect(validateContact({ ...valid, subject: '' })).toBe('All fields are required');
  });

  it('returns error when message is empty', () => {
    expect(validateContact({ ...valid, message: '' })).toBe('All fields are required');
  });

  it('returns error for malformed email', () => {
    expect(validateContact({ ...valid, email: 'notanemail' })).toBe('Invalid email address');
  });

  it('returns error for email missing domain', () => {
    expect(validateContact({ ...valid, email: 'user@' })).toBe('Invalid email address');
  });
});
