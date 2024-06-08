import {z} from 'zod';

const schema = z.object({
  email: z.string().min(5, 'Email Required').email('Email is not valid'),
  password: z.string().min(5, 'password is required'),
});

export default schema;
