import Navbar from '@/components/Navbar'
import './globals.css'
import { Providers } from '@/components/Provider'

export const metadata = {
  title: 'Burger App',
  description: 'Make and Order your own burger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
