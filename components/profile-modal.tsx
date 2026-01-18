"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Instagram, Twitter, Heart, Sparkles, Ruler, Weight, Zap, Dumbbell, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Profile } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProfileModalProps {
  profile: Profile
  onClose: () => void
  onVote: (id: string) => void
  hasVoted: boolean
}

export function ProfileModal({ profile, onClose, onVote, hasVoted }: ProfileModalProps) {
  const [isVoting, setIsVoting] = useState(false)

  const handleVote = () => {
    if (hasVoted) return
    
    setIsVoting(true)
    onVote(profile.id)
    
    setTimeout(() => setIsVoting(false), 600)
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-card border border-border rounded-t-3xl sm:rounded-3xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Profile images carousel */}
        <div className="relative aspect-square sm:aspect-[4/3]">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {profile.images && profile.images.length > 0 ? (
                profile.images.map((img, index) => (
                  <CarouselItem key={index} className="relative aspect-square sm:aspect-[4/3]">
                    <Image
                      src={img}
                      alt={`${profile.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem className="relative aspect-square sm:aspect-[4/3]">
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Content */}
        <div className="p-6 -mt-6 relative bg-card rounded-t-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">{profile.name}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{profile.bio}</p>
          
          {/* Stats Section */}
          {profile.stats && (
            <div className="mb-8 space-y-4">
              <h3 className="text-lg font-semibold mb-3">Estadísticas</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Weight className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Peso</p>
                    <p className="font-semibold">{profile.stats.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Ruler className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Altura</p>
                    <p className="font-semibold">{profile.stats.height}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Zap className="w-4 h-4" /> Velocidad
                    </span>
                    <span className="font-medium">{profile.stats.speed}/100</span>
                  </div>
                  <Progress value={profile.stats.speed} className="h-2" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Dumbbell className="w-4 h-4" /> Fuerza
                    </span>
                    <span className="font-medium">{profile.stats.power}/100</span>
                  </div>
                  <Progress value={profile.stats.power} className="h-2" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Activity className="w-4 h-4" /> Resistencia
                    </span>
                    <span className="font-medium">{profile.stats.stamina}/100</span>
                  </div>
                  <Progress value={profile.stats.stamina} className="h-2" />
                </div>
              </div>
            </div>
          )}

          {/* Social links */}
          <div className="flex gap-3 mb-6">
            <a 
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm font-medium">@{profile.instagram}</span>
            </a>
            {profile.twitter && (
              <a 
                href={`https://twitter.com/${profile.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-sm font-medium">@{profile.twitter}</span>
              </a>
            )}
          </div>
          
          {/* Vote button */}
          <Button
            onClick={handleVote}
            disabled={hasVoted}
            size="lg"
            className={cn(
              "w-full gap-2 font-semibold text-lg py-6 transition-all duration-300",
              hasVoted 
                ? "bg-muted text-muted-foreground" 
                : "bg-primary text-primary-foreground hover:bg-primary/90",
              isVoting && "animate-pulse"
            )}
          >
            {isVoting ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                Votando...
              </>
            ) : hasVoted ? (
              "Ya votaste"
            ) : (
              <>
                <Heart className="w-5 h-5" />
                Votar por {profile.name}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
