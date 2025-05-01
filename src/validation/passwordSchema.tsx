import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(4, 'Password must contain at least 4 character')
  .max(20, 'Maximum character 20');
