import Markdown from 'components/modules/Markdown'
import type { NextPage } from 'next'
import Main from 'components/Layouts/Main'
import Head from 'next/head'

const Page: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>C++ & Siv3D</title>
      </Head>

      <Markdown>
        {`# C++ & Siv3D`}
      </Markdown>
    </Main>
  )
}

export default Page
