'use client';

import { Button } from '@/components/ui/button';
import { Shield, Home, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isDashboard = pathname === '/dashboard';

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-xl">Review Sentinel</span>
          </Link>
          <div className="hidden sm:flex items-center space-x-4">
            {!isHome && (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
            )}
            {!isDashboard && (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}