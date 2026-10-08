/**
 * Clean and validate an Indian 10-digit mobile number
 */
export function cleanAndValidatePhone(phoneInput?: string): {
  isValid: boolean;
  cleanPhone: string;
  error?: string;
} {
  if (!phoneInput || typeof phoneInput !== 'string') {
    return {
      isValid: false,
      cleanPhone: '',
      error: 'Please enter a valid mobile number.',
    };
  }

  // Strip all non-digit characters
  let digits = phoneInput.trim().replace(/\D/g, '');

  // Strip leading +91 or 91 if length is 12
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    // Strip leading 0
    digits = digits.slice(1);
  }

  // Check if exactly 10 digits
  if (digits.length !== 10) {
    return {
      isValid: false,
      cleanPhone: digits,
      error: 'Please enter a valid 10-digit mobile number.',
    };
  }

  // Check valid Indian mobile prefix (typically starts with 6, 7, 8, or 9)
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return {
      isValid: false,
      cleanPhone: digits,
      error: 'Mobile number must start with 6, 7, 8, or 9.',
    };
  }

  return {
    isValid: true,
    cleanPhone: digits,
  };
}
