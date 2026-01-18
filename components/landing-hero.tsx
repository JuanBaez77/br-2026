"use client"

import { Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingHeroProps {
  onStart: () => void
}

export function LandingHero({ onStart }: LandingHeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Brasil 2026</span>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            <span className="block">Elegí tu</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              favorito
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Votá por el mejor del grupo y mirá quién lidera el ranking en tiempo real
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            onClick={onStart}
            size="lg"
            className="px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            Ver perfiles
          </Button>
          
          <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Deslizá para explorar</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
