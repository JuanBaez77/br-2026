"use client"

import { useState, useCallback } from "react"
import { profiles as initialProfiles, type Profile } from "@/lib/data"
import { LandingHero } from "@/components/landing-hero"
import { NavHeader } from "@/components/nav-header"
import { ProfileCard } from "@/components/profile-card"
import { ProfileModal } from "@/components/profile-modal"
import { StatsView } from "@/components/stats-view"

type View = "landing" | "profiles" | "stats"

export default function Home() {
  const [view, setView] = useState<View>("landing")
  const [profiles, setProfiles] = useState(initialProfiles)
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [votedId, setVotedId] = useState<string | null>(null)
  const [showVoteToast, setShowVoteToast] = useState(false)

  const handleVote = useCallback((id: string) => {
    if (votedId) return
    
    setVotedId(id)
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, votes: p.votes + 1 } : p
      )
    )
    
    setShowVoteToast(true)
    setTimeout(() => setShowVoteToast(false), 2500)
  }, [votedId])

  const handleNavigate = useCallback((newView: View) => {
    setView(newView)
    setSelectedProfile(null)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <NavHeader currentView={view} onNavigate={handleNavigate} />
      
      {view === "landing" && (
        <LandingHero onStart={() => setView("profiles")} />
      )}
      
      {view === "profiles" && (
        <div className="px-4 py-6 max-w-lg mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-foreground">Perfiles</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Elegí a tu favorito y votalo
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onVote={handleVote}
                onSelect={setSelectedProfile}
                hasVoted={votedId !== null}
              />
            ))}
          </div>
        </div>
      )}
      
      {view === "stats" && (
        <div className="px-4 py-6 max-w-lg mx-auto">
          <StatsView profiles={profiles} />
        </div>
      )}
      
      {/* Profile Modal */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onVote={handleVote}
          hasVoted={votedId !== null}
        />
      )}
      
      {/* Vote Toast */}
      {showVoteToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <span>¡Voto registrado!</span>
          </div>
        </div>
      )}
    </main>
  )
}
