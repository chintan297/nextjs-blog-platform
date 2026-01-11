import styles from "@/styles/Editor.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMarkdownPreview = dynamic(() => import("./MarkdownPreview"), {
  loading: () => <div className={styles.preview}>Loading preview...</div>,
  ssr: false,
});

interface EditorProps {
  initialContent: string;
  postSlug: string;
  onSave?: (newContent: string, newHtml: string) => void;
}

export default function Editor(props: EditorProps) {
  const { initialContent, postSlug, onSave } = props;
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSave = async () => {
    if (!content.trim()) {
      setMessage({ text: "Content cannot be empty", type: "error" });
      setSaving(false);
      return;
    }

    setSaving(true);
    setMessage(null);

    // Improved converter: support headers, bold, and paragraphs
    const simpleMarkdownToHtml = (markdown: string) => {
      let html = markdown
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*)\*/gim, "<em>$1</em>");

      return html
        .split(/\n\s*\n/)
        .filter((para) => para.trim())
        .map((para) => (para.startsWith("<h") ? para : `<p>${para.trim()}</p>`))
        .join("");
    };

    const contentHtml = simpleMarkdownToHtml(content);

    // Since we removed the backend, we only update the local UI
    setMessage({ text: "✓ Saved locally!", type: "success" });
    if (onSave) onSave(content, contentHtml);
    setTimeout(() => setMessage(null), 3000);
    setSaving(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.label}>Markdown Editor (Loaded Dynamically)</p>
        {message && (
          <span
            className={
              message.type === "success"
                ? styles.messageSuccess
                : styles.messageError
            }
          >
            {message.text}
          </span>
        )}
      </div>
      <div className={styles.toolbar}>
        <button
          className={`${styles.tab} ${!isPreview ? styles.tabActive : ""}`}
          onClick={() => setIsPreview(false)}
        >
          Write
        </button>
        <button
          className={`${styles.tab} ${isPreview ? styles.tabActive : ""}`}
          onClick={() => setIsPreview(true)}
        >
          Preview
        </button>
      </div>

      {isPreview ? (
        <DynamicMarkdownPreview content={content} />
      ) : (
        <textarea
          className={styles.editor}
          placeholder="# Write your content in Markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}

      <div className={styles.actions}>
        <button
          onClick={handleSave}
          disabled={saving}
          className={styles.saveButton}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
