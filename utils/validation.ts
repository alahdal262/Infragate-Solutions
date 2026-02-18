import { z } from 'zod';

export const contactFormSchema = z.object({
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

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};
