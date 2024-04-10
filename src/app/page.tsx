import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import sparrow_image from "./AngrySparrow.png"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src={sparrow_image}
          alt="Next.js Logo"
          priority
        />
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
