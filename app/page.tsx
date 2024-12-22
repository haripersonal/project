import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChartBar, Shield, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-xl">Review Sentinel</span>
          </div>
          <div className="space-x-4">
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

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Analyze Customer Reviews with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Harness the power of AI to analyze sentiment and detect fake reviews,
              helping you make data-driven decisions.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Sentiment Analysis
                </h3>
                <p className="text-muted-foreground">
                  Automatically analyze customer reviews to understand sentiment
                  and emotional tone.
                </p>
              </Card>
              <Card className="p-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Fake Review Detection
                </h3>
                <p className="text-muted-foreground">
                  Identify potentially fake reviews using advanced machine learning
                  algorithms.
                </p>
              </Card>
              <Card className="p-6">
                <ChartBar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Visual Insights
                </h3>
                <p className="text-muted-foreground">
                  Get clear visual representations of your review analysis with
                  interactive charts.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Review Sentinel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}