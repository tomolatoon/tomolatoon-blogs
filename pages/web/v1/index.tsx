import Main from 'components/Layouts/Main'
import Markdown from 'components/modules/Markdown'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.scss'

const Page: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Web with Next.js</title>
      </Head>

      <Markdown>
        {`# Web with Next.js`}
      </Markdown>
    </Main>
  )
}

export default Page
