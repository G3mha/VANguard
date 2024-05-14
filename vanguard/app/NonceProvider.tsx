// app/NonceProvider.tsx
import { createContext, useContext } from 'react';
import crypto from 'crypto';

// Create a context for the nonce
const NonceContext = createContext<string | null>(null);

// Server component to provide the nonce
export function NonceProvider({ children }: { children: React.ReactNode }) {
  const nonce = crypto.randomBytes(16).toString('base64');
  return (
    <NonceContext.Provider value={nonce}>
      {children}
    </NonceContext.Provider>
  );
}

// Custom hook to use the nonce
export function useNonce() {
  return useContext(NonceContext);
}
