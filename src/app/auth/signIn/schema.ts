import {z} from 'zod';

// zod objetct validation scheme
const schema = z.object({
  // rules validation
  email: z.string().min(1, 'Email required').email('Email is not valid'),
  password: z.string().min(1, 'Password is required'),
});

export default schema;
