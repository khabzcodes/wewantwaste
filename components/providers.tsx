'use client';
import { ThemeProvider } from '@/components/theme/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
