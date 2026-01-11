import BlogCard from "@/components/BlogCard";
import { fetchPosts } from "@/lib/api";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import Head from "next/head";

interface Post {
  _id: string;
  title: string;
  slug: string;
  body: string;
  date: string;
  image?: string;
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Futuristic Blog | Home</title>
        <meta
          name="description"
          content="A Next.js 13 blog with a futuristic design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <section className={styles.hero}>
          <h1>The Future of Thoughts</h1>
          <p className={styles.subtitle}>
            Exploring technology, design, and humanity through a digital lens.
          </p>
        </section>

        <div className={styles.grid}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post._id || post.slug} post={post} />
            ))
          ) : (
            <p className="glass-card">
              No posts found. Is the backend running?
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return {
    props: {
      posts: Array.isArray(posts) ? posts : [], // Ensure array
    },
    revalidate: 10,
  };
};
