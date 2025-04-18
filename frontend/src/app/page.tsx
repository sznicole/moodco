//import Image from "next/image";
//import styles from "./page.module.css";
//import { useEffect, useState } from 'react'

'use client'

//Mood type; same as defined in index.ts
type Mood = {
  emoji: string;
  mood: string;
}

export default function Home() {
  //handleClick function accesses the POST endpoint, which adds to moodHistory array (index.ts) after a user clicks a button 
  const handleClick =  async (mood: Mood) => {
    await fetch('http://localhost:3000/api/moods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mood),
    })
  }

  //NOTE: commented out for now because I'm still trying to figure out how to use useEffect in Home()'s return 
  /* useEffect(() => {
    async function getMoodHistory() {
      const moodHistoryArrJson = await fetch('http://localhost:3000/api/moods')
      const moodHistoryArr = await moodHistoryArrJson.json()
      return moodHistoryArr;
    }
    
    getMoodHistory()
  }, [])
  */



  return (
    <div>
      <main>
        <h1>MoodCo</h1>
        <h2>Hello! How are you feeling?</h2>

        <div className = "emojiButtons">
          <button onClick={() => handleClick({ emoji: '😁', mood: 'happy' })}>😁</button>
          <button onClick={() => handleClick({ emoji: '🙂', mood: 'neutral' })}>🙂</button>
          <button onClick={() => handleClick({ emoji: '😢', mood: 'sad' })}>😢</button>
          <button onClick={() => handleClick({ emoji: '😡', mood: 'angry' })}>😡</button>
        </div>

        <h2>History</h2>

        

      </main>
    </div>
  );
}
