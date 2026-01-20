export interface Profile {
  id: string
  name: string
  role: string
  roleColor: string
  bio: string
  image: string
  images: string[]
  instagram: string
  twitter?: string
  votes: number
  zodiac: string
  stats: {
    weight: string
    height: string
    speed: number
    power: number
    stamina: number
    sex: number
  }
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Agucho",
    role: "TAG",
    roleColor: "bg-indigo-500",
    bio: "Tremendo chupaverga.",
    image: "/static/image/Screenshot 2026-01-18 023216.png",
    images: [
      "/static/image/Screenshot 2026-01-18 023216.png",
      "/static/image/aguchin_20250820_065437.png"
    ],
    instagram: "agustincolina_",
    votes: 42,
    zodiac: "Leo",
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
    role: "TAG",
    roleColor: "bg-pink-500",
    bio: "Beach lover y fotógrafa amateur. El sol es mi energía.",
    image: "/static/image/andres.JPG",
    images: [
      "/static/image/andres.JPG",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "andresgomezf_",
    votes: 38,
    zodiac: "Piscis",
    stats: {
      weight: "60kg",
      height: "1.65m",
      speed: 75,
      power: 50,
      stamina: 85,
      sex: 80
    }
  },
  {
    id: "3",
    name: "An",
    role: "TAG",
    roleColor: "bg-purple-500",
    bio: "DJ part-time. La playlist del viaje corre por mi cuenta.",
    image: "/static/image/an.png",
    images: [
      "/static/image/an.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "jjuan.baez",
    twitter: "diegobeats",
    votes: 35,
    zodiac: "Libra",
    stats: {
      weight: "80kg",
      height: "1.78m",
      speed: 70,
      power: 80,
      stamina: 75,
      sex: 90
    }
  },
  {
    id: "4",
    name: "Coco",
    role: "TAG",
    roleColor: "bg-orange-500",
    bio: "Foodie profesional. Voy a probar cada açaí en Brasil.",
    image: "/static/image/coco.JPG",
    images: [
      "/static/image/coco.JPG",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "valecorreaa_",
    votes: 31,
    zodiac: "Tauro",
    stats: {
      weight: "55kg",
      height: "1.60m",
      speed: 80,
      power: 45,
      stamina: 80,
      sex: 85
    }
  },
  {
    id: "5",
    name: "Tio",
    role: "TAG",
    roleColor: "bg-emerald-500",
    bio: "El organizador del grupo. Sin mí, no hay itinerario.",
    image: "/static/image/tio.JPG",
    images: [
      "/static/image/tio.JPG",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "ignacio.picchio",
    votes: 28,
    zodiac: "Virgo",
    stats: {
      weight: "82kg",
      height: "1.85m",
      speed: 65,
      power: 85,
      stamina: 70,
      sex: 10
    }
  },
  {
    id: "6",
    name: "Feli",
    role: "TAG",
    roleColor: "bg-cyan-500",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/feli.png",
    images: [
      "/static/image/feli.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "felipe__zandrino",
    twitter: "vale_surf",
    votes: 25,
    zodiac: "Acuario",
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88,
      sex: 75
    }
  },
  {
    id: "7",
    name: "Pedro",
    role: "TAG",
    roleColor: "bg-cyan-500",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/peter.png",
    images: [
      "/static/image/peter.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "roganti_pedro",
    twitter: "vale_surf",
    votes: 25,
    zodiac: "Acuario",
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88,
      sex: 75
    }
  },
  {
    id: "8",
    name: "Mateo Moschittari",
    role: "TAG",
    roleColor: "bg-cyan-500",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/mateo.png",
    images: [
      "/static/image/mateo.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "mateo_moschittari",
    twitter: "vale_surf",
    votes: 25,
    zodiac: "Acuario",
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88,
      sex: 75
    }
  },
  {
    id: "9",
    name: "Mateo Letona",
    role: "TAG",
    roleColor: "bg-cyan-500",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/epion.png",
    images: [
      "/static/image/epion.png",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "letonamateo",
    twitter: "vale_surf",
    votes: 25,
    zodiac: "Acuario",
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88,
      sex: 75
    }
  },
  {
    id: "10",
    name: "Luca",
    role: "TAG",
    roleColor: "bg-cyan-500",
    bio: "Surfer wannabe. Este viaje aprendo sí o sí.",
    image: "/static/image/luca.jpeg",
    images: [
      "/static/image/luca.jpeg",
      "/static/image/Screenshot 2026-01-18 023216.png"
    ],
    instagram: "luca_gobbato",
    twitter: "vale_surf",
    votes: 25,
    zodiac: "Acuario",
    stats: {
      weight: "58kg",
      height: "1.68m",
      speed: 82,
      power: 55,
      stamina: 88,
      sex: 75
    }
  }
]
