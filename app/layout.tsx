import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dynamic Homepage App",
  description: "An app that dynamically changes content based on script output",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script - loads in the head with the 'beforeInteractive' strategy */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-232DTYPK23`} strategy="beforeInteractive" />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-232DTYPK23');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense>
          {children}
          {/* Client component to handle route change tracking */}
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
