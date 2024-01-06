'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // Some server stuff on logout
  await signOut();
};
