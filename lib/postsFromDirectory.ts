import { posix as path } from "path";
import fs from "fs";

export function getPostByFilename(postpath: string, filename: string): string | null {
    const postsDirectory = path.join(process.cwd(), postpath);

    const fullPath = path.join(postsDirectory, filename + '.md');

    try {
        return fs.readFileSync(fullPath, 'utf8');
    } catch {
        return null;
    }
}

export function getPostsPath(postpath: string) {
    const postsDirectory = path.join(process.cwd(), postpath);
    return fs.readdirSync(postsDirectory).map((string) => string.replace(/\.md$/, ''));
}
