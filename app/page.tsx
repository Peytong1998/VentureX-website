"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Venture X Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">Venture X</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium hover:text-primary">
              Our Work
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b z-50 animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col gap-4 p-6">
              <Link href="#home" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#services" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#work" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Our Work
              </Link>
              <Link href="#contact" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button asChild className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                <Link href="#contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    We Build Digital <span className="text-primary">Experiences</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforming ideas into exceptional websites and applications that drive business growth and user
                    engagement.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="gap-1.5">
                    <Link href="#contact">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#work">View Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20 z-10" />
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
                <div className="relative z-20">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border bg-background shadow-xl">
                    <div className="flex h-10 items-center border-b bg-muted px-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-6 w-2/3 rounded bg-muted" />
                      <div className="mt-4 space-y-2">
                        <div className="h-4 w-full rounded bg-muted" />
                        <div className="h-4 w-5/6 rounded bg-muted" />
                        <div className="h-4 w-4/6 rounded bg-muted" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="h-20 rounded bg-muted" />
                        <div className="h-20 rounded bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-muted py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive web development solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-center text-muted-foreground">
                  Custom websites built with the latest technologies for optimal performance and user experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Responsive Design</h3>
                <p className="text-center text-muted-foreground">
                  Mobile-first designs that look and function perfectly across all devices and screen sizes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Custom Applications</h3>
                <p className="text-center text-muted-foreground">
                  Bespoke web applications that streamline your business processes and enhance productivity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Performance Optimization</h3>
                <p className="text-center text-muted-foreground">
                  Speed optimization to ensure your website loads quickly and ranks well in search engines.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">UI/UX Design</h3>
                <p className="text-center text-muted-foreground">
                  Intuitive user interfaces and experiences that engage visitors and drive conversions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Web Hosting & Support</h3>
                <p className="text-center text-muted-foreground">
                  Reliable hosting solutions and ongoing technical support to keep your website running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-10 sm:py-16">
          <div className="container px-2 sm:px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
              <div className="space-y-1 sm:space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium">
                  Our Portfolio
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Recent Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  Explore our latest work and see how we've helped businesses achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border transition-transform duration-300 hover:shadow-xl hover:scale-[1.025]">
                <div className="relative w-full transition-transform duration-300 group-hover:scale-105" style={{ aspectRatio: '2 / 1' }}>
                  <Image
                    src="/real-estate-agency.png"
                    alt="Real Estate Agency Website"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Real Estate Agency</h3>
                  <p className="text-sm">
                    A modern property listing platform with advanced search, virtual tours, and seamless lead management.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border transition-transform duration-300 hover:shadow-xl hover:scale-[1.025]">
                <div className="relative w-full transition-transform duration-300 group-hover:scale-105" style={{ aspectRatio: '2 / 1' }}>
                  <Image
                    src="/haven-market.png"
                    alt="Haven Market Website"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Haven Market</h3>
                  <p className="text-sm">
                    A curated online marketplace offering unique lifestyle goods and a seamless shopping experience.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border transition-transform duration-300 hover:shadow-xl hover:scale-[1.025]">
                <div className="relative w-full transition-transform duration-300 group-hover:scale-105" style={{ aspectRatio: '2 / 1' }}>
                  <Image
                    src="/nonprofit.png"
                    alt="Nonprofit Organization Website"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Nonprofit Organization</h3>
                  <p className="text-sm">
                    A mission-driven platform with donation integration, volunteer management, and impact storytelling.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border transition-transform duration-300 hover:shadow-xl hover:scale-[1.025]">
                <div className="relative w-full transition-transform duration-300 group-hover:scale-105" style={{ aspectRatio: '2 / 1' }}>
                  <Image
                    src="/ecommerce-store.png"
                    alt="E-commerce Store"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">E-commerce Store</h3>
                  <p className="text-sm">
                    A high-performance online store with secure checkout, inventory management, and customer analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-8">
              <Button variant="outline" size="lg" className="w-full max-w-xs text-base sm:text-lg">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-background py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-2">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Packages</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transparent pricing for every stage of your business.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Basic One-Pager */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm items-center">
                <h3 className="text-xl font-bold mb-2">Basic One-Pager</h3>
                <div className="text-3xl font-extrabold text-primary mb-2">$600</div>
                <p className="text-muted-foreground mb-4">Ideal for simple websites or landing pages.</p>
              </div>
              {/* Multi-Page Layout */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm items-center">
                <h3 className="text-xl font-bold mb-2">Multi-Page Layout</h3>
                <div className="text-3xl font-extrabold text-primary mb-2">$1,350</div>
                <p className="text-muted-foreground mb-4">Great for small businesses or service providers.<br/>(3–5 pages)</p>
              </div>
              {/* Full Custom */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm items-center">
                <h3 className="text-xl font-bold mb-2">Full Custom</h3>
                <div className="text-3xl font-extrabold text-primary mb-2">Starting at $3,000</div>
                <p className="text-muted-foreground mb-4">Includes advanced features like integrations and custom functionality.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-2xl font-bold mb-4">Add-Ons</h4>
              <div className="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
                <div className="rounded-lg border bg-muted/50 p-6 flex flex-col items-center">
                  <div className="text-lg font-semibold mb-1">Hosting</div>
                  <div className="text-xl font-bold text-primary mb-1">$35<span className="text-base font-normal">/month</span></div>
                  <p className="text-muted-foreground text-center">Recommended</p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-6 flex flex-col items-center">
                  <div className="text-lg font-semibold mb-1">Site Management</div>
                  <div className="text-xl font-bold text-primary mb-1">$50<span className="text-base font-normal">/month</span></div>
                  <p className="text-muted-foreground text-center">2–3 updates/month</p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-6 flex flex-col items-center">
                  <div className="text-lg font-semibold mb-1">Site Management</div>
                  <div className="text-xl font-bold text-primary mb-1">$140<span className="text-base font-normal">/month</span></div>
                  <p className="text-muted-foreground text-center">5–6 updates/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Let's bring your next idea to life. Shoot us a message—we'd love to hear from you.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Email</p>
                      <p className="text-sm text-muted-foreground">peyton@vxconsulting.co</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Location</p>
                      <p className="text-sm text-muted-foreground">Streamwood, IL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                {formSuccess ? (
                  <div className="text-green-600 text-center font-semibold py-8">
                    Thank you! Your message has been sent.
                  </div>
                ) : (
                  <form
                    className="space-y-4"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    onSubmit={() => setTimeout(() => setFormSuccess(true), 100)}
                  >
                    <input type="hidden" name="access_key" value="c267b696-2d11-42de-9e07-a1521263edd4" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <Input id="first-name" name="first_name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <Input id="last-name" name="last_name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" name="email" placeholder="john.doe@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Venture X Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-lg font-bold">Venture X</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/peyton-griffin/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Venture X. All rights reserved.
            </p>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Powered by AI, crafted with precision
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
