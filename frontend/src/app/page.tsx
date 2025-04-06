//import Image from "next/image";
//import styles from "./page.module.css";

export default function Home() {
  type Mood {
    emoji: string;
    mood: string;
  }

  const handleClick =  async (mood: Mood) {
    await fetch('/api/moods', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mood),
    })
  }

  return (
    <div>
      <main>
        <h1>Hello!</h1>
        <button onClick={}>Mood</button>
        <button onClick={() => handleClick({ emoji: '😁', mood: 'happy' })}>😁</button>
        <button onClick={() => handleClick({ emoji: '🙂', mood: 'neutral' })}>🙂</button>
        <button onClick={() => handleClick({ emoji: '😢', mood: 'sad' })}>😢</button>
        <button onClick={() => handleClick({ emoji: '😡', mood: 'angry' })}>😡</button>
      </main>
    </div>
  );
}
