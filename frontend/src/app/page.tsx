//import Image from "next/image";
//import styles from "./page.module.css";

'use client'

type Mood = {
  emoji: string;
  mood: string;
}

export default function Home() {

  const handleClick =  async (mood: Mood) => {
    await fetch('http://localhost:3000/api/moods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mood),
    })
  }

  return (
    <div>
      <main>
        <h1>Hello!</h1>
        <button onClick={() => handleClick({ emoji: '😁', mood: 'happy' })}>😁</button>
        <button onClick={() => handleClick({ emoji: '🙂', mood: 'neutral' })}>🙂</button>
        <button onClick={() => handleClick({ emoji: '😢', mood: 'sad' })}>😢</button>
        <button onClick={() => handleClick({ emoji: '😡', mood: 'angry' })}>😡</button>
      </main>
    </div>
  );
}
