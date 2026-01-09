import { Request, Response } from 'express';

// Mock Login
export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Simple mock check
  if (email === 'admin@mindwhiz.com' && password === 'admin123') {
    return res.json({
      token: 'mock-jwt-token-admin',
      user: { email, role: 'admin' }
    });
  }

  if (email === 'user@mindwhiz.com' && password === 'user123') {
    return res.json({
      token: 'mock-jwt-token-user',
      user: { email, role: 'customer' }
    });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
