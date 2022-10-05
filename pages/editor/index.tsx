import Main from 'components/Layouts/Main'
import Markdown from 'components/Modules/Markdown'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from "styles/Pages/Editor.module.scss"

const Page: NextPage = () => {
    const [contents, setContents] = useState("");
    return (
        <Main>
            <div id={styles.container}>
                <Head>
                    <title>Editor</title>
                </Head>

                <textarea onInput={(e) => { setContents(e.currentTarget.value) }} />

                <Markdown>
                    {contents || `# Hello, Editor!
テキストエリアにMarkdownを書いてみましょう。
リアルタイムに反映されます。
`}
                </Markdown>
            </div>
        </Main>
    )
}

export default Page