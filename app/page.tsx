"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { profiles as initialProfiles, type Profile } from "@/lib/data"
import { LandingHero } from "@/components/landing-hero"
import { NavHeader } from "@/components/nav-header"
import { ProfileCard } from "@/components/profile-card"
import { ProfileModal } from "@/components/profile-modal"
import { StatsView } from "@/components/stats-view"
import { FadeIn, StaggerContainer, fadeInVariant } from "@/components/ui/motion"

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
        <FadeIn>
          <LandingHero onStart={() => setView("profiles")} />
        </FadeIn>
      )}
      
      {view === "profiles" && (
        <FadeIn className="px-4 py-6 max-w-lg mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-foreground">Perfiles</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Elegí a tu favorito y votalo
            </p>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 gap-3">
            {profiles.map((profile) => (
              <motion.div key={profile.id} variants={fadeInVariant}>
                <ProfileCard
                  profile={profile}
                  onVote={handleVote}
                  onSelect={setSelectedProfile}
                  hasVoted={votedId !== null}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </FadeIn>
      )}
      
      {view === "stats" && (
        <FadeIn className="px-4 py-6 max-w-lg mx-auto">
          <StatsView profiles={profiles} />
        </FadeIn>
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
        <motion.div 
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-50"
        >
          <div className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <span>¡Voto registrado!</span>
          </div>
        </motion.div>
      )}
    </main>
  )
}
