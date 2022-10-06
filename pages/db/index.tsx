import Markdown from 'components/Modules/Markdown'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import Main from 'components/Layouts/Main'
import Head from 'next/head'
import { Post, getPostsByIndex } from 'lib/postsFromDatabase';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async () => {
    const posts = await getPostsByIndex("all_posts");

    return {
        props: {
            posts,
        }
    }
}

const Page: NextPage<Props> = ({ posts }) => {
    return (
        <Main>
            <Head>
                <title>Database</title>
            </Head>

            <Markdown>
                {`# 記事一覧
||Title|Author|Date|Description|
|:-:|:-:|:-:|:-:|:-:|
${posts.map((v, i) => `|${i + 1}|${v.data.title}|${v.data.author}|${v.data.date}|${v.data.description}|`).join("\n")}

`}
            </Markdown>
        </Main>
    )
}

export default Page
