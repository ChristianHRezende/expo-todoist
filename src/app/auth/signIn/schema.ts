import {z} from 'zod';

const schema = z.object({
  email: z.string().min(1, 'Email required').email('Email is not valid'),
  password: z.string().min(1, 'Password is required'),
});

export default schema;
