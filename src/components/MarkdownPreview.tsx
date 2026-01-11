import styles from "@/styles/Editor.module.css";

interface MarkdownPreviewProps {
  content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const previewCurrentHtml = (text: string) => {
    let html = text
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

  return (
    <div
      className={styles.preview}
      dangerouslySetInnerHTML={{ __html: previewCurrentHtml(content) }}
    />
  );
}
