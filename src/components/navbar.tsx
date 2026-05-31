"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">OnBehalf</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/how-it-works">How it Works</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/search">Search</Link>
            {session && <Link href="/account">My Account</Link>}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          {session ? (
            <Button variant="outline" size="sm">
              Sign Out
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Join Now</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}