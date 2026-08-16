import { useState } from 'react';
import Book from './components/Book';
import MusicToggle from './components/MusicToggle';
import WelcomeGate from './auth/WelcomeGate';
import AchievementsPage from './achievements/AchievementsPage';
import AchievementToast from './achievements/AchievementToast';
import TrophyButton from './achievements/TrophyButton';
import { useAchievements } from './achievements/useAchievements';
import { achievements } from './achievements/data';

const AUTH_KEY = 'behappy_authenticated';

type View = 'book' | 'achievements';

/** App shell: password gate, then the warm dark backdrop framing the book + achievements. */
export default function App() {
  const [authenticated, setAuthenticated] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [view, setView] = useState<View>('book');
  const { unlocked, unlock, current, dismissCurrent } = useAchievements();

  if (!authenticated) {
    return (
      <WelcomeGate
        onUnlock={() => {
          localStorage.setItem(AUTH_KEY, 'true');
          setAuthenticated(true);
        }}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-6">
      {view === 'book' ? (
        <Book onPageRead={unlock} />
      ) : (
        <AchievementsPage unlocked={unlocked} onBack={() => setView('book')} />
      )}
      <MusicToggle />
      <TrophyButton
        onClick={() => setView((v) => (v === 'book' ? 'achievements' : 'book'))}
        count={unlocked.size}
        total={achievements.length}
      />
      <AchievementToast achievement={current} onDone={dismissCurrent} />
    </div>
  );
}
