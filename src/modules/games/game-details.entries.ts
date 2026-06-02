import { pegiRating } from "./game-details.helpers.js";
import type { GameDetails } from "./game-details.types.js";

const U =
  "/images/juegos-need-for-speed/Need-For-Speed-Underground";
const U2 =
  "/images/juegos-need-for-speed/Need-For-Speed-Underground-2";
const CARBON = "/images/juegos-need-for-speed/Need-For-Speed-Carbon";
const MW =
  "/images/juegos-need-for-speed/Need-For-Speed-Most-Wanted-2005";
const PROSTREET =
  "/images/juegos-need-for-speed/Need-For-Speed-Pro-Street";
const UNDERCOVER =
  "/images/juegos-need-for-speed/Need-For-Speed-Undercover";
const WORLD = "/images/juegos-need-for-speed/Need-For-Speed-World";
const HP =
  "/images/juegos-need-for-speed/Need-For-Speed-Hot-Pursuit-2010";
const SHIFT2 =
  "/images/juegos-need-for-speed/Need-For-Speed-Shift-2-Unleashed";
/** Fichas verificadas (EA / Steam / documentación oficial). */
export const GAME_DETAILS_ENTRIES: Record<string, GameDetails> = {
  "need-for-speed-underground": {
    slug: "need-for-speed-underground",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Underground, desarrollado por EA Black Box, reinventó la saga con carreras callejeras ilegales en una ciudad viva. Gana reputación, personaliza tu coche por dentro y por fuera, y compite en circuitos, sprints, derrapes y drag en la escena underground.",
      platforms: "PC, PlayStation 2, Xbox, GameCube",
      languages:
        "Inglés, Francés, Alemán, Italiano, Español, Sueco, Danés, Noruego, Finlandés, Holandés, Polaco, Portugués, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "14 nov 2003",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        {
          label: "Sistema operativo",
          value: "Windows 98, 98 SE, ME, 2000 o XP",
        },
        {
          label: "Procesador",
          value: "Intel Pentium III a 500 MHz o AMD equivalente",
        },
        { label: "Memoria", value: "128 MB RAM" },
        { label: "Disco duro", value: "1,4 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "32 MB compatible con DirectX 8.1 (NVIDIA GeForce 2 GTS / ATI Radeon 7500)",
        },
        {
          label: "Tarjeta de sonido",
          value: "Compatible con DirectX 8.1",
        },
        { label: "Unidad óptica", value: "Unidad de CD-ROM 8x" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP" },
        {
          label: "Procesador",
          value: "Intel Pentium 4 a 1,4 GHz o AMD equivalente",
        },
        { label: "Memoria", value: "256 MB RAM" },
        { label: "Disco duro", value: "1,4 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "64 MB o superior, compatible con DirectX 8.1",
        },
        {
          label: "Tarjeta de sonido",
          value: "Compatible con DirectX 8.1",
        },
        { label: "Unidad óptica", value: "Unidad de CD-ROM 8x" },
      ],
    },
    rating: pegiRating(12, U),
  },

  "need-for-speed-underground-2": {
    slug: "need-for-speed-underground-2",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Underground 2 amplía el mundo abierto de Bayview con carreras libres de día y de noche, nuevos modos y una personalización aún más profunda. Explora la ciudad, desafía a rivales y construye tu leyenda en la escena del tuning mientras descubres rutas secretas y eventos sorpresa.",
      platforms:
        "PC, PlayStation 2, Xbox, GameCube, Game Boy Advance, Nintendo DS",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "9 nov 2004",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows 98 / ME / 2000 / XP" },
        { label: "Procesador", value: "Pentium 4 o Athlon XP a 1,4 GHz" },
        { label: "Memoria", value: "256 MB RAM" },
        { label: "Disco duro", value: "2 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "64 MB, compatible con DirectX 9.0c (GeForce 3 / Radeon 8500)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP" },
        { label: "Procesador", value: "Pentium 4 a 2,0 GHz o equivalente" },
        { label: "Memoria", value: "512 MB RAM" },
        { label: "Disco duro", value: "2 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "128 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, U2),
  },

  "need-for-speed-most-wanted-2005": {
    slug: "need-for-speed-most-wanted-2005",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Most Wanted te sumerge en Rockport, donde la policía persigue sin descanso a los corredores más buscados. Escala la Blacklist, personaliza tu coche y demuestra que eres el piloto más temido de la ciudad en carreras callejeras, persecuciones y eventos de alto riesgo.",
      platforms:
        "PC, PlayStation 2, Xbox, Xbox 360, GameCube, Game Boy Advance, Nintendo DS",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "15 nov 2005",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows 2000 / XP" },
        { label: "Procesador", value: "Pentium 4 a 1,4 GHz o Athlon XP 1700+" },
        { label: "Memoria", value: "256 MB RAM" },
        { label: "Disco duro", value: "3 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "32 MB, compatible con DirectX 9.0c (GeForce 2 / Radeon 7500)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP" },
        { label: "Procesador", value: "Pentium 4 a 2,0 GHz o equivalente" },
        { label: "Memoria", value: "512 MB RAM" },
        { label: "Disco duro", value: "3 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "128 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, MW),
  },

  "need-for-speed-carbon": {
    slug: "need-for-speed-carbon",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Carbon te lleva a Palmont, una ciudad dividida en territorios controlados por crews rivales. Forma tu propia banda, personaliza coches con Autosculpt y conquista zonas en carreras callejeras, canyon duels y persecuciones bajo la amenaza del misterioso Darius.",
      platforms:
        "PC, PlayStation 2, Xbox, Xbox 360, GameCube, Wii, Nintendo DS, Mac",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "31 oct 2006",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows 2000 / XP" },
        { label: "Procesador", value: "Pentium 4 a 2,0 GHz o Athlon XP 2200+" },
        { label: "Memoria", value: "512 MB RAM" },
        { label: "Disco duro", value: "5,1 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "128 MB, compatible con DirectX 9.0c (GeForce 6600 / Radeon X1300)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP" },
        { label: "Procesador", value: "Pentium 4 a 2,8 GHz o equivalente" },
        { label: "Memoria", value: "1 GB RAM" },
        { label: "Disco duro", value: "5,1 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "256 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, CARBON),
  },

  "need-for-speed-prostreet": {
    slug: "need-for-speed-prostreet",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ ProStreet abandona las carreras callejeras para centrarse en competiciones legales de alto nivel. Compite en cuatro disciplinas — drag, grip, speed y drift — en pistas reales y desafíos de daño total, construye tu reputación como piloto profesional y demuestra que dominas cada estilo de conducción.",
      platforms:
        "PC, PlayStation 2, PlayStation 3, Xbox 360, Wii, PSP, Nintendo DS",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "14 nov 2007",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP2" },
        {
          label: "Procesador",
          value: "Pentium 4 a 2,8 GHz o Athlon 64 3000+",
        },
        { label: "Memoria", value: "1 GB RAM" },
        { label: "Disco duro", value: "8 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "128 MB con Pixel Shader 3.0, compatible con DirectX 9.0c (GeForce 6800 / Radeon X1300)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP / Vista" },
        { label: "Procesador", value: "Pentium 4 a 3,0 GHz o equivalente" },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "8 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "256 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, PROSTREET),
  },

  "need-for-speed-undercover": {
    slug: "need-for-speed-undercover",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Undercover te sumerge en Tri-City Bay como un agente encubierto. Infíltrate en el mundo de las carreras ilegales, gana la confianza de bandas criminales y desenmascara una conspiración mientras conduces coches exóticos en persecuciones, emboscadas y misiones de alto riesgo.",
      platforms:
        "PC, PlayStation 2, PlayStation 3, Xbox 360, Wii, PSP, Nintendo DS, móvil",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "18 nov 2008",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP2 / Vista" },
        {
          label: "Procesador",
          value: "Pentium 4 a 3,0 GHz o Athlon 64 3500+",
        },
        { label: "Memoria", value: "1 GB RAM (2 GB en Vista)" },
        { label: "Disco duro", value: "6 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "256 MB, compatible con DirectX 9.0c (GeForce 7600 / Radeon X1800)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows XP / Vista" },
        { label: "Procesador", value: "Core 2 Duo a 2,0 GHz o equivalente" },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "6 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "512 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, UNDERCOVER),
  },

  "need-for-speed-shift": {
    slug: "need-for-speed-shift",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Shift, desarrollado por Slightly Mad Studios, aleja la saga del street racing para ofrecer un simulador arcade de circuito: conduce coches reales en pistas oficiales, progresa en la carrera profesional y vive un enfoque más técnico con daños, física mejorada y carreras nocturnas bajo los focos.",
      platforms: "PC, PlayStation 3, Xbox 360, PSP",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "15 sep 2009",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP2 / Vista" },
        {
          label: "Procesador",
          value: "Pentium 4 a 3,2 GHz o Athlon 64 3500+",
        },
        { label: "Memoria", value: "1 GB RAM (2 GB en Vista)" },
        { label: "Disco duro", value: "6 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "256 MB, compatible con DirectX 9.0c (GeForce 7600 / Radeon X1600)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows Vista / 7" },
        { label: "Procesador", value: "Core 2 Duo a 2,0 GHz o equivalente" },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "6 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "512 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(7, CARBON),
  },

  "need-for-speed-nitro": {
    slug: "need-for-speed-nitro",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Nitro lleva la saga a un ritmo arcade en Wii y Nintendo DS: carreras rápidas por ciudades del mundo, nitro a tope, personalización llamativa de coches y un estilo visual colorido pensado para jugar en familia o con amigos en multijugador local.",
      platforms: "Wii, Nintendo DS",
      languages:
        "Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso",
      publisher: "Electronic Arts",
      releaseDate: "3 nov 2009",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Nintendo Wii / DS",
      minimum: [
        { label: "Plataforma", value: "Nintendo Wii o Nintendo DS" },
        {
          label: "Almacenamiento",
          value: "Espacio libre en tarjeta SD (DS) o en consola (Wii)",
        },
        { label: "Controles", value: "Mando de Wii o Nintendo DS" },
        {
          label: "Pantalla",
          value: "Televisor compatible con Wii o pantalla de Nintendo DS",
        },
        { label: "Multijugador", value: "Hasta 4 jugadores en Wii (local)" },
      ],
      recommended: [
        { label: "Plataforma", value: "Nintendo Wii" },
        { label: "Accesorios", value: "Nunchuk o Wii Remote Plus recomendado" },
        {
          label: "Pantalla",
          value: "Televisor con salida de vídeo componente o superior",
        },
        { label: "Audio", value: "Sistema de sonido estéreo o home cinema" },
        {
          label: "Multijugador",
          value: "Varios mandos Wii para carreras locales",
        },
      ],
    },
    rating: pegiRating(7, CARBON),
  },

  "need-for-speed-world": {
    slug: "need-for-speed-world",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ World fue el primer MMO gratuito de la saga: un mundo persistente en línea donde personalizabas tu coche, competías en carreras públicas y privadas, subías de nivel y desbloqueabas mejoras mientras explorabas un mapa abierto inspirado en ciudades reales.",
      platforms: "PC (Windows)",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso",
      publisher: "Electronic Arts",
      releaseDate: "20 jul 2010",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP2 / Vista" },
        {
          label: "Procesador",
          value: "Pentium 4 a 3,2 GHz o Athlon 64 3500+",
        },
        { label: "Memoria", value: "1 GB RAM (2 GB en Vista)" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "256 MB, compatible con DirectX 9.0c (GeForce 7600 / Radeon X1600)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows Vista / 7" },
        { label: "Procesador", value: "Core 2 Duo a 2,0 GHz o equivalente" },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "512 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, WORLD),
  },

  "need-for-speed-hot-pursuit-2010": {
    slug: "need-for-speed-hot-pursuit-2010",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Hot Pursuit (2010), desarrollado por Criterion Games, reinventa la persecución en Seacrest County: elige bando como corredor o policía, usa armas tácticas y nitro en carreras cinematográficas, compite en modo carrera y disfruta de multijugador online para cazar o escapar a toda velocidad.",
      platforms: "PC, PlayStation 3, Xbox 360, Wii",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso",
      publisher: "Electronic Arts",
      releaseDate: "16 nov 2010",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP3 (solo 32 bits)" },
        {
          label: "Procesador",
          value: "Core 2 Duo a 2,0 GHz o Athlon X2 a 2,4 GHz",
        },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "6,5 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "256 MB, compatible con DirectX 9.0c (GeForce 7950 / Radeon X1900)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows 7" },
        { label: "Procesador", value: "Core 2 Duo a 2,4 GHz o equivalente" },
        { label: "Memoria", value: "4 GB RAM" },
        { label: "Disco duro", value: "6,5 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "512 MB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, HP),
  },

  "need-for-speed-shift-2-unleashed": {
    slug: "need-for-speed-shift-2-unleashed",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Shift 2 Unleashed continúa la apuesta simuladora de Slightly Mad Studios con un enfoque más exigente: carreras en pistas reales, daños avanzados, clima dinámico, desafíos de precisión y un modo carrera ampliado para dominar categorías desde GT hasta prototipos de competición.",
      platforms: "PC, PlayStation 3, Xbox 360",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "18 mar 2011",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows XP SP3" },
        {
          label: "Procesador",
          value: "Core 2 Duo a 2,0 GHz o Athlon X2 a 2,4 GHz",
        },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "512 MB, compatible con DirectX 9.0c (GeForce 8800 / Radeon HD 3870)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows 7" },
        { label: "Procesador", value: "Core 2 Quad a 2,4 GHz o equivalente" },
        { label: "Memoria", value: "4 GB RAM" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "1 GB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, SHIFT2),
  },

  "need-for-speed-the-run": {
    slug: "need-for-speed-the-run",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ The Run, desarrollado por EA Black Box, es una carrera por la supervivencia a través de Estados Unidos: de San Francisco a Nueva York en diez días, huyendo de la mafia y de la ley. Combina secuencias de conducción arcade, persecuciones cinematográficas y momentos QTE en un viaje trepidante por autopistas, desiertos y ciudades.",
      platforms:
        "PC, PlayStation 3, Xbox 360, Wii, Nintendo 3DS",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "18 nov 2011",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        { label: "Sistema operativo", value: "Windows Vista SP2 (32 bits)" },
        {
          label: "Procesador",
          value: "Core 2 Duo a 2,0 GHz o Athlon X2 a 2,4 GHz",
        },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "18 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "512 MB, compatible con DirectX 9.0c (GeForce 8800 / Radeon HD 3850)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows 7" },
        { label: "Procesador", value: "Core 2 Quad a 2,4 GHz o equivalente" },
        { label: "Memoria", value: "4 GB RAM" },
        { label: "Disco duro", value: "18 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value: "1 GB o superior, compatible con DirectX 9.0c",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 9.0c" },
      ],
    },
    rating: pegiRating(12, CARBON),
  },

  "need-for-speed-most-wanted-2012": {
    slug: "need-for-speed-most-wanted-2012",
    source: "ea-official",
    about: {
      title: "Acerca del juego",
      description:
        "Need for Speed™ Most Wanted (2012), desarrollado por Criterion Games, reinventa la persecución en Fairhaven City: elige tu coche, evita a la policía con el sistema Autolog y compite por ser el piloto más buscado. Mundo abierto, carreras callejeras, power-ups y multijugador online para demostrar quién manda en la ciudad.",
      platforms:
        "PC, PlayStation 3, Xbox 360, PlayStation Vita, Wii U",
      languages:
        "Checo, Alemán, Inglés, Español, Francés, Italiano, Holandés, Sueco, Danés, Noruego, Finlandés, Polaco, Portugués, Ruso, Japonés",
      publisher: "Electronic Arts",
      releaseDate: "30 oct 2012",
    },
    systemRequirements: {
      title: "Requisitos del sistema",
      osLabel: "Windows",
      minimum: [
        {
          label: "Sistema operativo",
          value: "Windows Vista SP2 (64 bits) / Windows 7",
        },
        {
          label: "Procesador",
          value: "Core 2 Duo a 2,0 GHz o Athlon X2 a 2,4 GHz",
        },
        { label: "Memoria", value: "2 GB RAM" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "512 MB, compatible con DirectX 10 (GeForce 8800 GT / Radeon HD 3870)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 10" },
      ],
      recommended: [
        { label: "Sistema operativo", value: "Windows 7 (64 bits)" },
        { label: "Procesador", value: "Core 2 Quad a 2,4 GHz o equivalente" },
        { label: "Memoria", value: "4 GB RAM" },
        { label: "Disco duro", value: "10 GB de espacio libre" },
        {
          label: "Tarjeta gráfica",
          value:
            "1 GB o superior, compatible con DirectX 11 (GeForce GTX 560 / Radeon HD 6950)",
        },
        { label: "Tarjeta de sonido", value: "Compatible con DirectX 11" },
      ],
    },
    rating: pegiRating(12, CARBON),
  },
};
