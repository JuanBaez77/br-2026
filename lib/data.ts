export interface Profile {
  id: string
  name: string
  bio: string
  image: string
  images: string[]
  instagram: string
  twitter?: string
  votes: number
  stats: {
    weight: string
    height: string
    speed: number
    power: number
    stamina: number
  }
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Agucho",
    bio: "Tremendo chupaverga.",
    image: "/static/image/Screenshot 2026-01-18 023216.png",
    images: [
      "/static/image/Screenshot 2026-01-18 023216.png",
      "/static/image/aguchin_20250820_065437.png"
    ],
    instagram: "agustincolina_",
    votes: 42,
    stats: {
      weight: "75kg",
      height: "1.80m",
      speed: 85,
      power: 70,
      stamina: 90,
      sex: 100
    }
  },
  {
    id: "2",
    name: "Landres",
    bio: "Beach lover y fotógrafa amateur. El sol es mi energía.",
    image: "/static/image/aguchin_20250820_065437.png",
    images: [
      "/static/image/aguchin_20250820_065437.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "martina.vibes",
    votes: 38,
    stats: {
      weight: "60kg",
      height: "1.65m",
      speed: 75,
      power: 50,
      stamina: 85
    }
  },
  {
    id: "3",
    name: "An",
    bio: "DJ part-time. La playlist del viaje corre por mi cuenta.",
    image: "/static/image/aguchin_20250820_065437.png",
    images: [
      "/static/image/aguchin_20250820_065437.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "diegosounds",
    twitter: "diegobeats",
    votes: 35,
    stats: {
      weight: "80kg",
      height: "1.78m",
      speed: 70,
      power: 80,
      stamina: 75
    }
  },
  {
    id: "4",
    name: "Coco",
    bio: "Foodie profesional. Voy a probar cada açaí en Brasil.",
    image: "/static/image/aguchin_20250820_065437.png",
    images: [
      "/static/image/aguchin_20250820_065437.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "sofi.foodie",
    votes: 31,
    stats: {
      weight: "55kg",
      height: "1.60m",
      speed: 80,
      power: 45,
      stamina: 80
    }
  },
  {
    id: "5",
    name: "Tio",
    bio: "El organizador del grupo. Sin mí, no hay itinerario.",
    image: "/static/image/aguchin_20250820_065437.png",
    images: [
      "/static/image/aguchin_20250820_065437.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "tomas_planner",
    votes: 28,
    stats: {
      weight: "82kg",
      height: "1.85m",
      speed: 65,
      power: 85,
      stamina: 70
    }
  },
  {
    id: "6",
    name: "Feli",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/aguchin_20250820_065437.png",
    images: [
      "/static/image/aguchin_20250820_065437.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "vale.waves",
    twitter: "vale_surf",
    votes: 25,
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88
    }
  }
]
