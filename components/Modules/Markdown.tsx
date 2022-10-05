import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "styles/Modules/Markdown.module.scss"

import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
const remarkRemoveComments = require("remark-remove-comments");

export interface Props {
    children: string;
}

const Markdown = ({ children }: Props) => {
    return (<ReactMarkdown 
        className={"markdown-body " + styles.markdown}
        remarkPlugins={[
            remarkRemoveComments,
            remarkBreaks,
            remarkGfm,
            [remarkToc, { heading: "目次", ordered: true }],
            remarkDirective,
        ]}
        rehypePlugins={[
            rehypeSlug,
            rehypeHighlight,
        ]}
    >
        {children}
    </ReactMarkdown>);
}

export default Markdown;