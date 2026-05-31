import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Find the Perfect Match<br />
            <span className="text-primary">OnBehalf</span> of Your Single Friend
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Join the unique matrimonial platform where friends and family help find 
            suitable marriage partners. Be the matchmaker your single friend needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Get Started
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Basic Search Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Find Single Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Age Range</option>
                <option value="18-25">18-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36-40">36-40</option>
                <option value="40+">40+</option>
              </select>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Location</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="birmingham">Birmingham</option>
                <option value="leeds">Leeds</option>
              </select>
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              <Button className="gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
              <Link href="/advanced-search">
                <Button variant="link">Advanced Search</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OnBehalf?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Matchmakers</h3>
              <p className="text-muted-foreground">
                Friends and family who know the single person best help find compatible matches.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Photos and personal details only shared with approved matchmaker friends.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rated Community</h3>
              <p className="text-muted-foreground">
                Build trust with our rating system for genuine matchmakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find a Match?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of matchmakers helping their single friends find love.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Join Now - First Month Free!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}