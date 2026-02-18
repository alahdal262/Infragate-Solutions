# API Documentation

## Contact Service API

### `submitContactForm`

Submits a contact form with validation, database storage, and notification dispatch.

**Type Signature:**
```typescript
async function submitContactForm(
  data: ContactFormData,
  onProgress: (step: string) => void
): Promise<ContactFormResult>
```

**Parameters:**

- `data`: `ContactFormData` - Form data object containing:
  - `name: string` - Full name (2-100 characters, letters/spaces only)
  - `email: string` - Email address (valid email format)
  - `phone: string` - Phone number (10-20 characters)
  - `company: string` - Company name (1-200 characters)
  - `serviceInterest: string` - Selected service category
  - `message: string` - Project details (10-2000 characters)

- `onProgress`: `(step: string) => void` - Callback function for progress updates

**Returns:**

`Promise<ContactFormResult>` where `ContactFormResult` is:
```typescript
{
  success: boolean;
  id?: string;        // Reference ID if successful
  error?: string;     // Error message if failed
}
```

**Process Flow:**

1. **Validation** - Validates all fields using Zod schema
2. **Encryption** - Simulates data encryption (AES-256)
3. **Database Storage** - Stores in Supabase `contact_submissions` table
4. **Email Notification** - Triggers email to admin (simulated)
5. **SMS Notification** - Triggers SMS alert (simulated)

**Error Handling:**

Throws custom errors:
- `ValidationError` - Invalid field data
- `ApiError` - Database or API failures
- Returns error in result object instead of throwing

**Example Usage:**

```typescript
const result = await submitContactForm(
  {
    name: "John Smith",
    email: "john@company.com",
    phone: "+44 7000 123456",
    company: "Acme Corp",
    serviceInterest: "Enterprise Architecture",
    message: "We need help with cloud migration..."
  },
  (step) => console.log(`Progress: ${step}`)
);

if (result.success) {
  console.log(`Form submitted! Reference: ${result.id}`);
} else {
  console.error(`Submission failed: ${result.error}`);
}
```

---

## Validation Schema

The contact form uses Zod for validation:

```typescript
const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters'),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must not exceed 20 characters')
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  
  company: z.string()
    .min(1, 'Company name is required')
    .max(200, 'Company name must not exceed 200 characters'),
  
  serviceInterest: z.string()
    .min(1, 'Please select a service'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters'),
});
```

---

## Custom Error Classes

### `ValidationError`

Thrown when form validation fails.

```typescript
class ValidationError extends Error {
  constructor(message: string, field?: string)
}
```

**Properties:**
- `message: string` - Error description
- `field?: string` - Field name that failed validation
- `name: 'ValidationError'` - Error type identifier

### `ApiError`

Thrown when API or database operations fail.

```typescript
class ApiError extends Error {
  constructor(message: string, statusCode?: number, code?: string)
}
```

**Properties:**
- `message: string` - Error description
- `statusCode?: number` - HTTP status code
- `code?: string` - Error code from API
- `name: 'ApiError'` - Error type identifier

### `NetworkError`

Thrown when network connectivity fails.

```typescript
class NetworkError extends Error {
  constructor(message: string)
}
```

**Properties:**
- `message: string` - Error description
- `name: 'NetworkError'` - Error type identifier

---

## Supabase Integration

### Database Schema

**Table:** `contact_submissions`

```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Environment Variables

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```

---

## SEO Component API

### `SEO`

React component for managing page metadata.

```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}
```

**Example:**

```tsx
<SEO
  title="Contact Us"
  description="Get in touch with our team"
  canonical="/contact"
  keywords="contact, support, inquiry"
/>
```

---

## Error Boundary

### `ErrorBoundary`

React error boundary component for graceful error handling.

```typescript
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
```

**Features:**
- Catches JavaScript errors in child components
- Displays fallback UI on error
- Logs errors to console
- Shows stack trace in development mode
- Provides reload button

**Example:**

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## Best Practices

### Error Handling

Always wrap API calls in try-catch:

```typescript
try {
  const result = await submitContactForm(data, onProgress);
  if (result.success) {
    // Handle success
  } else {
    // Handle error from result
  }
} catch (error) {
  // Handle unexpected errors
  console.error('Unexpected error:', error);
}
```

### Type Safety

Use TypeScript types for all data:

```typescript
import { ContactFormData } from './types';

const formData: ContactFormData = {
  name: "John Smith",
  email: "john@example.com",
  // ... other fields
};
```

### Validation

Validate data before submission:

```typescript
import { validateContactForm } from './utils/validation';

const validation = validateContactForm(data);
if (!validation.success) {
  // Handle validation errors
  console.error(validation.error.errors);
}
```

---

## Rate Limiting

**Note:** Rate limiting should be implemented on the backend/API level.

Recommended limits:
- 5 submissions per IP per hour
- 20 submissions per IP per day
- Implement exponential backoff on failures

---

## Security Considerations

1. **Never expose sensitive keys in frontend code**
2. **Validate all input on both client and server**
3. **Use HTTPS for all API requests**
4. **Implement CSRF protection**
5. **Sanitize user input before storing**
6. **Use Content Security Policy headers**
7. **Enable rate limiting**

---

## Support

For API-related questions or issues:

- **Email**: info@infragatesolutions.com
- **Documentation**: [GitHub Repository](https://github.com/alahdal262/Infragate-Solutions)
