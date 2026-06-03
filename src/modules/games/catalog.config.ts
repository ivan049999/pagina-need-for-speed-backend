import type { NfsCatalogEntry } from "./catalog.types.js";

/**
 * Catálogo del menú "Juegos de Need for Speed".
 * Para añadir un juego nuevo: agrega una entrada y reinicia el backend.
 * Orden final: por releaseDate (más reciente primero).
 */
export const NFS_CATALOG: NfsCatalogEntry[] = [
  {
    label: "Need for Speed™ Unbound",
    href: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-unbound",
    releaseDate: "2022-12-02",
  },
  {
    label: "Need for Speed™ Hot Pursuit Remastered",
    href: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-hot-pursuit-remastered",
    releaseDate: "2020-11-06",
  },
  {
    label: "Need for Speed™ Heat",
    href: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-heat",
    releaseDate: "2019-11-08",
  },
  {
    label: "Need for Speed™ Payback",
    href: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-payback",
    releaseDate: "2017-11-10",
  },
  {
    label: "Need for Speed™",
    href: "/need-for-speed-2015",
    slug: "need-for-speed-2015",
    releaseDate: "2015-03-03",
  },
  {
    label: "Need for Speed™ No Limits",
    href: "/need-for-speed-no-limits",
    slug: "need-for-speed-no-limits",
    releaseDate: "2015-04-30",
  },
  {
    label: "Need for Speed™ Rivals",
    href: "/need-for-speed-rivals",
    slug: "need-for-speed-rivals",
    releaseDate: "2013-11-19",
  },
  {
    label: "Need for Speed™ Most Wanted (2012)",
    href: "/need-for-speed-most-wanted-2012",
    slug: "need-for-speed-most-wanted-2012",
    releaseDate: "2012-11-30",
  },
  {
    label: "Need for Speed™ The Run",
    href: "/need-for-speed-the-run",
    slug: "need-for-speed-the-run",
    releaseDate: "2011-11-15",
  },
  {
    label: "Need for Speed™ Shift 2 Unleashed",
    href: "/need-for-speed-shift-2-unleashed",
    slug: "need-for-speed-shift-2-unleashed",
    releaseDate: "2011-03-29",
  },
  {
    label: "Need for Speed™ Hot Pursuit (2010)",
    href: "/need-for-speed-hot-pursuit-2010",
    slug: "need-for-speed-hot-pursuit-2010",
    releaseDate: "2010-11-16",
  },
  {
    label: "Need for Speed™ Nitro",
    href: "/need-for-speed-nitro",
    slug: "need-for-speed-nitro",
    releaseDate: "2009-11-03",
  },
  {
    label: "Need for Speed™ World",
    href: "/need-for-speed-world",
    slug: "need-for-speed-world",
    releaseDate: "2010-07-20",
  },
  {
    label: "Need for Speed™ Undercover",
    href: "/need-for-speed-undercover",
    slug: "need-for-speed-undercover",
    releaseDate: "2008-11-18",
  },
  {
    label: "Need for Speed™ ProStreet",
    href: "/need-for-speed-prostreet",
    slug: "need-for-speed-prostreet",
    releaseDate: "2007-11-14",
  },
  {
    label: "Need for Speed™ Carbon",
    href: "/need-for-speed-carbon",
    slug: "need-for-speed-carbon",
    releaseDate: "2006-10-31",
  },
  {
    label: "Need for Speed™ Most Wanted (2005)",
    href: "/need-for-speed-most-wanted-2005",
    slug: "need-for-speed-most-wanted-2005",
    releaseDate: "2005-11-15",
  },
  {
    label: "Need for Speed™ Underground 2",
    href: "/need-for-speed-underground-2",
    slug: "need-for-speed-underground-2",
    releaseDate: "2004-11-15",
  },
  {
    label: "Need for Speed™ Underground",
    href: "/need-for-speed-underground",
    slug: "need-for-speed-underground",
    releaseDate: "2003-11-17",
  },
  {
    label: "Need for Speed™ Shift",
    href: "/need-for-speed-shift",
    slug: "need-for-speed-shift",
    releaseDate: "2009-09-15",
  },
];
