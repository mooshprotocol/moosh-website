'use client'
import Script, { ScriptProps } from 'next/script';

type SafeScriptProps = Omit<ScriptProps, 'nonce'> & {
  nonce?: string;
};

// Wrapper over next/script that passes through the CSP nonce when provided.
// Prefer usage with nonce from getRequestNonce() passed in from a Server Component.
export default function SafeScript(props: SafeScriptProps) {
  const { nonce, ...rest } = props;
  return <Script nonce={nonce} {...rest} />;
}


