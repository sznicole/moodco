import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  type Mood = {
    emoji: string;
    mood: string;
  }

  function handleClick() {

  }

  return (
    <div>
      <main>
        <h1>Hello!</h1>
      </main>
    </div>
  );
}
