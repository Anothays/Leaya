import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leaya',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
