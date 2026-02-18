import { ValidationError, ApiError, NetworkError } from '../../utils/errors';

describe('Custom Error Classes', () => {
  describe('ValidationError', () => {
    it('should create a ValidationError with message', () => {
      const error = new ValidationError('Invalid input');
      
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.name).toBe('ValidationError');
      expect(error.message).toBe('Invalid input');
      expect(error.field).toBeUndefined();
    });

    it('should create a ValidationError with field name', () => {
      const error = new ValidationError('Invalid email format', 'email');
      
      expect(error.message).toBe('Invalid email format');
      expect(error.field).toBe('email');
    });

    it('should have a stack trace', () => {
      const error = new ValidationError('Test error');
      
      expect(error.stack).toBeDefined();
    });
  });

  describe('ApiError', () => {
    it('should create an ApiError with message', () => {
      const error = new ApiError('API request failed');
      
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(ApiError);
      expect(error.name).toBe('ApiError');
      expect(error.message).toBe('API request failed');
      expect(error.statusCode).toBeUndefined();
      expect(error.code).toBeUndefined();
    });

    it('should create an ApiError with status code', () => {
      const error = new ApiError('Not found', 404);
      
      expect(error.message).toBe('Not found');
      expect(error.statusCode).toBe(404);
    });

    it('should create an ApiError with status code and error code', () => {
      const error = new ApiError('Database error', 500, 'DB_CONNECTION_FAILED');
      
      expect(error.message).toBe('Database error');
      expect(error.statusCode).toBe(500);
      expect(error.code).toBe('DB_CONNECTION_FAILED');
    });

    it('should have a stack trace', () => {
      const error = new ApiError('Test error');
      
      expect(error.stack).toBeDefined();
    });
  });

  describe('NetworkError', () => {
    it('should create a NetworkError with message', () => {
      const error = new NetworkError('Network connection failed');
      
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(NetworkError);
      expect(error.name).toBe('NetworkError');
      expect(error.message).toBe('Network connection failed');
    });

    it('should have a stack trace', () => {
      const error = new NetworkError('Test error');
      
      expect(error.stack).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    it('should be catchable as generic Error', () => {
      const errors = [
        new ValidationError('Validation failed'),
        new ApiError('API failed'),
        new NetworkError('Network failed'),
      ];

      errors.forEach(error => {
        try {
          throw error;
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
        }
      });
    });

    it('should be distinguishable by instanceof', () => {
      const validationError = new ValidationError('Validation failed');
      const apiError = new ApiError('API failed');
      const networkError = new NetworkError('Network failed');

      expect(validationError instanceof ValidationError).toBe(true);
      expect(validationError instanceof ApiError).toBe(false);
      expect(validationError instanceof NetworkError).toBe(false);

      expect(apiError instanceof ApiError).toBe(true);
      expect(apiError instanceof ValidationError).toBe(false);
      expect(apiError instanceof NetworkError).toBe(false);

      expect(networkError instanceof NetworkError).toBe(true);
      expect(networkError instanceof ValidationError).toBe(false);
      expect(networkError instanceof ApiError).toBe(false);
    });

    it('should preserve error name for identification', () => {
      const errors = [
        new ValidationError('Test'),
        new ApiError('Test'),
        new NetworkError('Test'),
      ];

      expect(errors[0].name).toBe('ValidationError');
      expect(errors[1].name).toBe('ApiError');
      expect(errors[2].name).toBe('NetworkError');
    });
  });
});
