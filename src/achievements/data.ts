import { pages } from '../data/pages';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const ICONS: Record<string, string> = {
  lee: '📖',
  flores: '💐',
  llegar: '🏰',
  plan: '💨',
  compares: '🍊',
  momento: '🎪',
  sol: '☀️',
  baila: '💃',
  llama: '📞',
  perro: '🐶',
  lluvia: '☔',
  planta: '🌱',
  camina: '🚶',
  riete: '🤣',
  diario: '📓',
  estrellas: '🔭',
  pan: '🍞',
  duerme: '🌙',
  coche: '🎤',
  aprende: '🤹',
  abraza: '🤗',
  cometa: '🪁',
  gracias: '🙏',
  ramen: '🍜',
  silencio: '🧘',
  celebra: '🎂',
  ayuda: '🤝',
  suelta: '🎈',
  pausa: '🌳',
  proceso: '🦋',
  empieza: '🌅',
};

/** One achievement per page, titled after its phrase (e.g. "Lee un libro"). */
export const pageAchievements: Achievement[] = pages.map((page) => {
  const phrase = page.phrase.replace(/\n/g, ' ');
  return {
    id: page.id,
    title: `${phrase}.`,
    description: `Leíste la razón "${phrase}".`,
    icon: ICONS[page.id] ?? '⭐',
  };
});

export const completionAchievement: Achievement = {
  id: 'completo',
  title: 'Las 31 razones',
  description: 'Llegaste hasta el final del libro.',
  icon: '🏆',
};

export const achievements: Achievement[] = [...pageAchievements, completionAchievement];
