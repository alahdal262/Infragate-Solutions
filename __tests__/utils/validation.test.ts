import { validateContactForm } from '../../utils/validation';

describe('Contact Form Validation', () => {
  const validData = {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+44 7000 123456',
    company: 'Acme Corp',
    serviceInterest: 'Enterprise Architecture',
    message: 'We need help with our cloud infrastructure migration project.',
  };

  describe('Valid Data', () => {
    it('should validate correct contact form data', () => {
      const result = validateContactForm(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('Name Validation', () => {
    it('should reject names shorter than 2 characters', () => {
      const result = validateContactForm({ ...validData, name: 'J' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('at least 2 characters');
      }
    });

    it('should reject names longer than 100 characters', () => {
      const result = validateContactForm({ 
        ...validData, 
        name: 'a'.repeat(101) 
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('not exceed 100 characters');
      }
    });

    it('should reject names with invalid characters', () => {
      const result = validateContactForm({ ...validData, name: 'John123' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('invalid characters');
      }
    });

    it('should accept names with hyphens and apostrophes', () => {
      const result = validateContactForm({ ...validData, name: "Mary-Jane O'Brien" });
      expect(result.success).toBe(true);
    });
  });

  describe('Email Validation', () => {
    it('should reject invalid email format', () => {
      const result = validateContactForm({ ...validData, email: 'invalid-email' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('Invalid email');
      }
    });

    it('should reject emails longer than 255 characters', () => {
      const longEmail = 'a'.repeat(250) + '@example.com';
      const result = validateContactForm({ ...validData, email: longEmail });
      expect(result.success).toBe(false);
    });

    it('should accept valid email addresses', () => {
      const emails = [
        'user@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
      ];
      
      emails.forEach(email => {
        const result = validateContactForm({ ...validData, email });
        expect(result.success).toBe(true);
      });
    });
  });

  describe('Phone Validation', () => {
    it('should reject phone numbers shorter than 10 characters', () => {
      const result = validateContactForm({ ...validData, phone: '123' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('at least 10 characters');
      }
    });

    it('should reject phone numbers with letters', () => {
      const result = validateContactForm({ ...validData, phone: 'abc123456789' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('invalid characters');
      }
    });

    it('should accept valid phone formats', () => {
      const phones = [
        '+44 7000 123456',
        '(555) 123-4567',
        '555-123-4567',
        '+1 555 123 4567',
      ];
      
      phones.forEach(phone => {
        const result = validateContactForm({ ...validData, phone });
        expect(result.success).toBe(true);
      });
    });
  });

  describe('Company Validation', () => {
    it('should reject empty company name', () => {
      const result = validateContactForm({ ...validData, company: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('required');
      }
    });

    it('should reject company names longer than 200 characters', () => {
      const result = validateContactForm({ 
        ...validData, 
        company: 'a'.repeat(201) 
      });
      expect(result.success).toBe(false);
    });
  });

  describe('Message Validation', () => {
    it('should reject messages shorter than 10 characters', () => {
      const result = validateContactForm({ ...validData, message: 'Too short' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('at least 10 characters');
      }
    });

    it('should reject messages longer than 2000 characters', () => {
      const result = validateContactForm({ 
        ...validData, 
        message: 'a'.repeat(2001) 
      });
      expect(result.success).toBe(false);
    });

    it('should accept valid messages', () => {
      const result = validateContactForm({ 
        ...validData, 
        message: 'This is a valid message with enough characters.' 
      });
      expect(result.success).toBe(true);
    });
  });

  describe('Service Interest Validation', () => {
    it('should reject empty service interest', () => {
      const result = validateContactForm({ ...validData, serviceInterest: '' });
      expect(result.success).toBe(false);
    });

    it('should accept valid service interests', () => {
      const result = validateContactForm({ 
        ...validData, 
        serviceInterest: 'Government Digital Systems' 
      });
      expect(result.success).toBe(true);
    });
  });
});
