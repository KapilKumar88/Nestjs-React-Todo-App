import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  PORT: process.env.PORT || 3000,
}));
