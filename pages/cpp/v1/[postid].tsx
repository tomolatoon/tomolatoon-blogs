import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Markdown from "components/Modules/Markdown";
import { getPostByFilename } from "lib/postsFromDirectory";
import { getRoutingArgument } from "lib/getProps";
import Main from "components/Layouts/Main";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    let r = { notFound: true };

    const routingArgument = getRoutingArgument(context, "postid")

    if (typeof routingArgument !== "string") return r;

    const contents = getPostByFilename("/posts/basics/", routingArgument);

    if (contents) {
        return {
            props: {
                contents,
            }
        }
    } else {
        return r;
    }
}


const Page: NextPage<Props> = ({ contents }) => {
    return (
        <Main>
            <Markdown>
                {contents}
            </Markdown>
        </Main>
    );
}

export default Page;