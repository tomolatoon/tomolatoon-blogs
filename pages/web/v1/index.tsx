import Main from 'components/Layouts/Main'
import Markdown from 'components/Modules/Markdown'
import type { NextPage } from 'next'
import Head from 'next/head'

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
