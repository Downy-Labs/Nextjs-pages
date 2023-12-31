import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Appshell from '@/components/layouts/AppShell';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Appshell>
      <Component {...pageProps} />
    </Appshell>
  );
}
