"use client"

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children, session }) => {
  return (
    <SessionProvider
      refetchOnWindowFocus={false}
      refetchInterval={60 * 60}
      session={session}>
      {children}
    </SessionProvider>
  );
};