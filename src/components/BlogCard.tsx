import styles from "@/styles/BlogCard.module.css";
import Link from "next/link";

interface Post {
  title: string;
  slug: string;
  body: string;
  date: string;
  image?: string;
  author?: string; // Optional for now
  category?: string; // Optional for now
}

export default function BlogCard({ post }: { post: Post }) {
  // Mock data for visual completeness tailored to the Figma description
  const category = post.category || "Lifestyle";
  const author = post.author || "John Doe";
  const categoryClass =
    styles[`cat-${category.toLowerCase()}`] || styles["cat-default"];

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <div className={styles.placeholderGradient}></div>
        )}
      </div>

      <span className={`${styles.category} ${categoryClass}`}>{category}</span>

      <h2 className={styles.title}>{post.title}</h2>

      <div className={styles.meta}>
        By <span className={styles.author}>{author}</span>
      </div>
    </Link>
  );
}
