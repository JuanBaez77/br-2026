"use client"

import { Users, BarChart3, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type View = "landing" | "profiles" | "stats"

interface NavHeaderProps {
  currentView: View
  onNavigate: (view: View) => void
}

export function NavHeader({ currentView, onNavigate }: NavHeaderProps) {
  if (currentView === "landing") return null
  
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
        {/* Logo */}
        <button 
          onClick={() => onNavigate("landing")}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-semibold">Brasil 2026</span>
        </button>
        
        {/* Navigation tabs */}
        <nav className="flex items-center gap-1 bg-secondary rounded-full p-1">
          <button
            onClick={() => onNavigate("profiles")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              currentView === "profiles" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Perfiles</span>
          </button>
          <button
            onClick={() => onNavigate("stats")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              currentView === "stats" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Stats</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
