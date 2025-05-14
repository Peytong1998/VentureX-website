import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Venture X | Modern Website Development",
  description: "Venture X is a modern website development company specializing in creating exceptional digital experiences.",
  generator: "v0.dev",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Venture X | Modern Website Development",
    description: "Venture X is a modern website development company specializing in creating exceptional digital experiences.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Venture X Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture X | Modern Website Development",
    description: "Venture X is a modern website development company specializing in creating exceptional digital experiences.",
    images: ["/logo.png"]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
