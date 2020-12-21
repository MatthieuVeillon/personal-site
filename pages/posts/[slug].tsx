import React, {FC} from 'react';
import matter from "gray-matter";
import path from "path";
import * as fs from "fs";
import Link from "next/link";

type PostPageProps = { data: { [p: string]: any }, content: string }

const PostPage: FC<PostPageProps> = ({data, content}) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">
                        <a>👈 Go back home</a>
                    </Link>
                </nav>
            </header>
            <div className="post-header">
                <h1>{data.title}</h1>
                {data.description && (
                    <p className="description">{data.description}</p>
                )}
            </div>
            <main>{content}</main>

            <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
        </div>
    );
};

export default PostPage;

export const getStaticProps = async ({params}) => {
    const POSTS_PATH = path.join(process.cwd(), "posts")
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const {content, data} = matter(source)

    return {
        props: {
            content,
            data,
        },
    }
}

export const getStaticPaths = async () => {
    const POSTS_PATH = path.join(process.cwd(), "posts")
    const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({params: {slug}}))

    return {
        paths,
        fallback: false,
    }
}