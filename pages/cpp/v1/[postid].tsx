import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Markdown from "components/Modules/Markdown";
import { getPostByFilename } from "lib/posts";
import { getRoutingArgument } from "lib/getProps";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    let r = { notFound: true };

    const routingArgument = getRoutingArgument(context, "postid")

    if(typeof routingArgument !== "string") return r;
    
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
        <Markdown>
            {contents}
        </Markdown>
    );
}

export default Page;