import Markdown from 'components/Modules/Markdown'
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
        {`# C++ & Siv3D
更新開始は未定です。Web & Next.jsの方を先に更新します。`}
      </Markdown>
    </Main>
  )
}

export default Page
