import type { BookPage } from '../data/pages';

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
  tu: '✨',
  cumple: '🎁',
};

// A page can override its auto-generated achievement (which just quotes the phrase) — used for
// the personal closing pages, where the phrase itself doesn't make sense as an achievement title.
const ACHIEVEMENT_OVERRIDES: Record<string, { title: string; description: string }> = {
  tu: { title: 'Tú, porque eres única', description: 'Por vos.' },
  cumple: { title: 'Feliz cumple años', description: 'Que se cumplan todos tus deseos.' },
};

export const completionAchievement: Achievement = {
  id: 'completo',
  title: 'Las 31 razones',
  description: 'Llegaste hasta el final del libro.',
  icon: '🏆',
};

/**
 * One achievement per page, titled after its phrase (e.g. "Lee un libro") unless overridden, plus
 * the completion bonus. Built from the current page list (not a static import) so dev-mode edits/
 * additions/removals of pages are reflected automatically.
 */
export function buildAchievements(pages: BookPage[]): Achievement[] {
  const pageAchievements = pages.map((page) => {
    const phrase = page.phrase.replace(/\n/g, ' ');
    const override = ACHIEVEMENT_OVERRIDES[page.id];
    return {
      id: page.id,
      title: override?.title ?? `${phrase}.`,
      description: override?.description ?? `Leíste la razón "${phrase}".`,
      icon: ICONS[page.id] ?? '⭐',
    };
  });
  return [...pageAchievements, completionAchievement];
}
