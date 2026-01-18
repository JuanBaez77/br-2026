"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Twitter, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Profile } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  profile: Profile
  onVote: (id: string) => void
  onSelect: (profile: Profile) => void
  hasVoted: boolean
}

export function ProfileCard({ profile, onVote, onSelect, hasVoted }: ProfileCardProps) {
  const [isVoting, setIsVoting] = useState(false)

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (hasVoted) return
    
    setIsVoting(true)
    onVote(profile.id)
    
    setTimeout(() => setIsVoting(false), 600)
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-card border border-border cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      onClick={() => onSelect(profile)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={profile.image || "/placeholder.svg"}
          alt={profile.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Social icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <a 
            href={`https://instagram.com/${profile.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          {profile.twitter && (
            <a 
              href={`https://twitter.com/${profile.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-semibold text-foreground mb-1">{profile.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{profile.bio}</p>
        
        <Button
          onClick={handleVote}
          disabled={hasVoted}
          className={cn(
            "w-full gap-2 font-semibold transition-all duration-300",
            hasVoted 
              ? "bg-muted text-muted-foreground" 
              : "bg-primary text-primary-foreground hover:bg-primary/90",
            isVoting && "animate-pulse"
          )}
        >
          {isVoting ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              Votando...
            </>
          ) : hasVoted ? (
            "Ya votaste"
          ) : (
            <>
              <Heart className="w-4 h-4" />
              Votar
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
