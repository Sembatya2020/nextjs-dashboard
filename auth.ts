import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { z } from 'zod';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Function to fetch user from the database by email
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];  // Return the first user found
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

// Export NextAuth configuration with Credentials provider
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate credentials using Zod
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log('Invalid credentials format');
          return null; // Return null if validation fails
        }

        const { email, password } = parsedCredentials.data;

        // Fetch the user from the database
        const user = await getUser(email);
        if (!user) {
          console.log('User not found');
          return null;  // Return null if the user doesn't exist
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) {
          return user;  // Return the user if passwords match
        } else {
          console.log('Invalid password');
          return null;  // Return null if the password doesn't match
        }
      },
    }),
  ],
});
