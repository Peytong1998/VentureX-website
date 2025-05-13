"use client"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-muted-foreground max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.<br />
        Let's get you back to something awesome.
      </p>
      <Link href="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow hover:scale-105 transition-transform">
        Go Home
      </Link>
    </div>
  )
} 