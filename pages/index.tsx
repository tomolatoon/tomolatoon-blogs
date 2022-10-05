import type { NextPage } from 'next'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {"tomolatoon's blogs"}
        </h1>
        <div className={styles.subtitle}>ゆっくり更新します。</div>

        <div className={styles.grid}>
          <Link href="/cpp">
            <a className={styles.card}>
              <h2>C++ & Siv3D &rarr;</h2>
              <p>C++とSiv3Dを使えるようになるまで。</p>
            </a>
          </Link>

          <Link href="/web">
            <a className={styles.card}>
              <h2>Web with Next.js &rarr;</h2>
              <p>Next.jsを使ってWebページを作るまで。</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
