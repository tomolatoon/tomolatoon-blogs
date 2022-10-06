import faunadb from "faunadb";

export const q = faunadb.query;
export const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET!,
})

export interface Post {
    ts: number;
    data: {
        date: string;
        first: number;
        title: string;
        description: string;
        author: string;
        available: boolean;
        contents: string;
    };
}

export interface PostRaw {
    ref: any;
    ts: number;
    data: {
        first: number;
        title: string;
        description: string;
        author: string;
        available: boolean;
        contents: string;
    };
}

const toDate = (ts: number) => {
    const date = new Date();
    date.setTime(Math.floor(ts / 1000));
    return date.toLocaleDateString();
}

export const toPost = (post: PostRaw): Post => {
    const { ts, data } = post;
    return {
        ts,
        data: {
            date: toDate(ts),
            ...data,
        }
    }
}

export const getPostsByIndex = async (indexName: string): Promise<Post[]> => {
    return ((await client.query(
        q.Map(
            q.Paginate(q.Match(q.Index(indexName))),
            q.Lambda("X", q.Get(q.Var("X"))),
        )
    ) as any).data as PostRaw[]).map(toPost);
}
