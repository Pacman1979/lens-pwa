'use client'

import { PrivyProvider } from '@privy-io/react-auth'

export default function Provider({
  children
}) {
    return (
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
        config={{
          loginMethods: ['email', 'wallet', 'google', 'apple'],
          appearance: {
            theme: 'dark',
            accentColor: '#676FFF',
            logo: 'https://i.imgur.com/tzKMWv9.png',
          },
          embeddedWallets: {
            createOnLogin: 'all-users',
            noPromptOnSignature: true
          }
        }}>
           {children}
      </PrivyProvider>
    )
}