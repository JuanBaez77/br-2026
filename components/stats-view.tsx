"use client"

import Image from "next/image"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"
import type { Profile } from "@/lib/data"
import { cn } from "@/lib/utils"

interface StatsViewProps {
  profiles: Profile[]
}

export function StatsView({ profiles }: StatsViewProps) {
  const sortedProfiles = [...profiles].sort((a, b) => b.votes - a.votes)
  const maxVotes = sortedProfiles[0]?.votes || 1
  const totalVotes = profiles.reduce((sum, p) => sum + p.votes, 0)

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-400" />
      case 1:
        return <Medal className="w-5 h-5 text-gray-300" />
      case 2:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">{index + 1}</span>
    }
  }

  const getRankStyle = (index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-400/20 to-transparent border-yellow-400/50"
      case 1:
        return "bg-gradient-to-r from-gray-300/10 to-transparent border-gray-300/30"
      case 2:
        return "bg-gradient-to-r from-amber-600/10 to-transparent border-amber-600/30"
      default:
        return "bg-card border-border"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Ranking en vivo</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground">Estadísticas</h2>
        <p className="text-muted-foreground mt-1">{totalVotes} votos totales</p>
      </div>
      
      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-2 mb-8 px-4">
        {/* 2nd place */}
        {sortedProfiles[1] && (
          <div className="flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mb-2">
              <Image
                src={sortedProfiles[1].image || "/placeholder.svg"}
                alt={sortedProfiles[1].name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">{sortedProfiles[1].name}</span>
            <span className="text-xs text-muted-foreground">{sortedProfiles[1].votes} votos</span>
            <div className="w-20 h-16 bg-gray-300/20 rounded-t-lg mt-2 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-300">2</span>
            </div>
          </div>
        )}
        
        {/* 1st place */}
        {sortedProfiles[0] && (
          <div className="flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 mb-2 ring-4 ring-yellow-400/20">
              <Image
                src={sortedProfiles[0].image || "/placeholder.svg"}
                alt={sortedProfiles[0].name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-base font-semibold text-foreground">{sortedProfiles[0].name}</span>
            <span className="text-sm text-primary font-medium">{sortedProfiles[0].votes} votos</span>
            <div className="w-24 h-24 bg-yellow-400/20 rounded-t-lg mt-2 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        )}
        
        {/* 3rd place */}
        {sortedProfiles[2] && (
          <div className="flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-amber-600 mb-2" style={{ width: 72, height: 72 }}>
              <Image
                src={sortedProfiles[2].image || "/placeholder.svg"}
                alt={sortedProfiles[2].name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">{sortedProfiles[2].name}</span>
            <span className="text-xs text-muted-foreground">{sortedProfiles[2].votes} votos</span>
            <div className="w-18 h-12 bg-amber-600/20 rounded-t-lg mt-2 flex items-center justify-center" style={{ width: 72 }}>
              <span className="text-xl font-bold text-amber-600">3</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Full ranking list */}
      <div className="space-y-3">
        {sortedProfiles.map((profile, index) => {
          const percentage = (profile.votes / maxVotes) * 100
          
          return (
            <div 
              key={profile.id}
              className={cn(
                "relative overflow-hidden rounded-xl border p-4 transition-all duration-300",
                getRankStyle(index),
                "animate-in slide-in-from-left duration-300"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(index)}
                </div>
                
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">{profile.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000 ease-out",
                          index === 0 ? "bg-yellow-400" : index === 1 ? "bg-gray-300" : index === 2 ? "bg-amber-600" : "bg-primary"
                        )}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
                      {profile.votes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
