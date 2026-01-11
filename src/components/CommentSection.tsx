import { fetchComments } from "@/lib/api";
import styles from "@/styles/CommentSection.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AverageIcon, BadIcon, GoodIcon, NiceIcon, NormalIcon } from "./Icons";

const DynamicEditor = dynamic(() => import("./Editor"), {
  loading: () => <p>Loading editor...</p>,
  ssr: false,
});

interface Comment {
  _id: string;
  author: string;
  comment: string;
  rating: number;
  date: string;
}

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5); // 1-5 based on emojis
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchComments(slug)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!author.trim() || !email.trim() || !text.trim()) {
      setFormError("All fields are required.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // Since we removed the backend, we just add the comment to local state
    const newComment: Comment = {
      _id: Math.random().toString(36).substr(2, 9),
      author,
      comment: text,
      rating,
      date: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setText("");
    setAuthor("");
    setEmail("");
    setRating(5);
  };

  /* Rating configuration for icons, labels, and colors */
  const ratingConfig: Record<
    number,
    { label: string; color: string; icon: React.FC }
  > = {
    1: { label: "Bad", color: "#FF0412", icon: BadIcon },
    2: { label: "Average", color: "#FF6700", icon: AverageIcon },
    3: { label: "Normal", color: "#FFB416", icon: NormalIcon },
    4: { label: "Nice", color: "#1C9AF4", icon: NiceIcon },
    5: { label: "Good", color: "#00BA5C", icon: GoodIcon },
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.headingBar}>Comments</h3>

      <ul className={styles.commentList}>
        {loading && <p>Loading comments...</p>}
        {!loading && comments.length === 0 && (
          <li className={styles.emptyState}>No comments yet. Be the first!</li>
        )}
        {comments.map((c) => (
          <li key={c._id} className={styles.comment}>
            <img
              src={`https://ui-avatars.com/api/?name=${c.author}&background=ff6b6b&color=fff`}
              alt={c.author}
              className={styles.avatar}
              loading="lazy"
            />
            <div className={styles.commentContent}>
              <div className={styles.authorName}>{c.author}</div>
              <div className={styles.ratingRow}>
                <span className={styles.stars}>
                  {"★".repeat(c.rating)}
                  {"☆".repeat(5 - c.rating)}
                </span>
                <span className={styles.ratingScore}>({c.rating}.0)</span>
              </div>
              <div className={styles.date}>
                {new Date(c.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <p className={styles.body}>{c.comment}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.formSection}>
        <h3 className={styles.headingBar}>Add A Comment</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.leftCol}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  className={styles.input}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={`${styles.formGroup} ${styles.fullHeight}`}>
                <label className={styles.label}>Comment</label>
                <textarea
                  className={styles.textarea}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write your comment here..."
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <div className={styles.ratingPrompt}>
              <span className={styles.promptText}>
                Rate The Usefulness Of The Article
              </span>
              <div className={styles.emojis}>
                {[1, 2, 3, 4, 5].map((item) => {
                  const Config = ratingConfig[item];
                  const Icon = Config.icon;
                  const isSelected = rating === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      className={`${styles.emojiBtn} ${
                        isSelected ? styles.selectedPill : ""
                      }`}
                      onClick={() => setRating(item)}
                      title={Config.label}
                      data-selected={isSelected}
                      style={
                        { "--btn-color": Config.color } as React.CSSProperties
                      }
                    >
                      <div className={styles.iconWrapper}>
                        <Icon />
                      </div>
                      {isSelected && (
                        <span className={styles.pillLabel}>{Config.label}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.actions}>
              {formError && (
                <span className={styles.errorMessage}>{formError}</span>
              )}
              <button type="submit" className={styles.sendBtn}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
