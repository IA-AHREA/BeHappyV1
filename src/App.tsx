import Book from './components/Book';

/** App shell: the warm dark backdrop framing the book. */
export default function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-6">
      <Book />
    </div>
  );
}
