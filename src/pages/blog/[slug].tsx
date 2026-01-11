import { LocationIcon } from "@/components/Icons";
import { fallbackPosts, fetchPost, fetchPosts } from "@/lib/api";
import styles from "@/styles/BlogPost.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Dynamically load heavy components - only loads when needed
const DynamicEditor = dynamic(() => import("@/components/Editor"), {
  loading: () => <p>Loading editor...</p>,
  ssr: false,
});

const DynamicCommentSection = dynamic(
  () => import("@/components/CommentSection"),
  {
    loading: () => <p>Loading comments...</p>,
  }
);

interface Post {
  _id: string;
  title: string;
  slug: string;
  body: string;
  date: string;
  image: string;
  contentHtml?: string;
}

export default function BlogPost({
  post,
  relatedPosts,
  prevPost,
  nextPost,
}: {
  post: Post;
  relatedPosts: Post[];
  prevPost?: Post | null;
  nextPost?: Post | null;
}) {
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState(post.body);
  const [currentHtml, setCurrentHtml] = useState(post.contentHtml || "");
  const [useHtml, setUseHtml] = useState(!!post.contentHtml);
  const [exploreIndex, setExploreIndex] = useState(0);

  const handleNextExplore = () => {
    if (relatedPosts.length > 0) {
      setExploreIndex((prev) => (prev + 1) % relatedPosts.length);
    }
  };

  const handlePrevExplore = () => {
    if (relatedPosts.length > 0) {
      setExploreIndex(
        (prev) => (prev - 1 + relatedPosts.length) % relatedPosts.length
      );
    }
  };

  if (!post) return <div>404</div>;

  const handleSave = (newContent: string, newHtml: string) => {
    setContent(newContent);
    setCurrentHtml(newHtml);
    setUseHtml(true); // We now have valid HTML to display
    setShowEditor(false);
  };

  return (
    <>
      <Head>
        <title>{post.title} - The Blog</title>
        <meta name="description" content={content.substring(0, 150)} />
      </Head>

      <main>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLinkMain}>
            HOME
          </Link>
          /
          <Link href="/blog" className={styles.breadcrumbLink}>
            ARTICLES
          </Link>
          /
        </div>

        {/* Centered Title */}
        <h1 className={styles.headerTitle}>{post.title}</h1>

        {/* Hero Image */}
        <div className={styles.heroImageContainer}>
          <Image src={post.image} alt={post.title} width={1000} height={560} />
        </div>

        {/* Two Column Layout */}
        <div className={styles.contentGrid}>
          {/* Left Col: Content */}
          <article className={styles.mainContent}>
            {/* Meta Row: Avatar/Author + Date */}
            <div className={styles.metaRow}>
              <div className={styles.authorBlock}>
                <Image
                  className={styles.avatar}
                  src="https://i.pravatar.cc/150?u=alex_carter"
                  alt="Alex Carter"
                  width={32}
                  height={32}
                />

                {/* Grey circle avatar */}
                <span className={styles.authorName}>Alex Carter</span>
              </div>
              <div className={styles.metaRowActions}>
                <span className={styles.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={() => setShowEditor(!showEditor)}
                  className={styles.editButton}
                >
                  {showEditor ? "Close Editor" : "Edit Post"}
                </button>
              </div>
            </div>

            {/* Dynamically Loaded Editor - Only loads when Edit button is clicked */}
            {showEditor && (
              <div className={styles.editorSection}>
                <DynamicEditor
                  initialContent={content}
                  postSlug={post.slug}
                  onSave={handleSave}
                />
              </div>
            )}

            {/* Article Text */}
            <div className={styles.articleBody}>
              {useHtml && currentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: currentHtml }} />
              ) : (
                content.split("\n").map((para, i) => <p key={i}>{para}</p>)
              )}
            </div>

            {/* About Author Section */}
            <div className={styles.desktopAuthor}>
              <div className={styles.aboutSection}>
                <h3 className={styles.aboutTitle}>About Alex Carter</h3>
                <img
                  src="https://i.pravatar.cc/150?u=alex_carter"
                  alt="Alex Carter"
                  className={styles.aboutImage}
                />
                <p className={styles.aboutBio}>
                  With over a decade in fitness, Alex specializes in strength
                  training. Certified by NASM, he designs challenging yet
                  achievable workout programs. His passion is helping clients
                  build strength and confidence through personalized routines.
                  Outside the gym, Alex enjoys running and outdoor adventures.
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className={styles.desktopNav}>
              <div className={styles.navSection}>
                {prevPost ? (
                  <div className={styles.navGroupLeft}>
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className={styles.navButton}
                    >
                      <span className={styles.navArrow}>←</span>
                      <span className={styles.navButtonText}>Previous</span>
                    </Link>
                    <span className={styles.navLabel}>{prevPost.title}</span>
                  </div>
                ) : (
                  <div className={styles.navPlaceholder} />
                )}

                {nextPost ? (
                  <div className={styles.navGroupRight}>
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className={styles.navButton}
                    >
                      <span className={styles.navButtonText}>Next</span>
                      <span className={styles.navArrow}>→</span>
                    </Link>
                    <span className={styles.navLabel}>{nextPost.title}</span>
                  </div>
                ) : (
                  <div className={styles.navPlaceholder} />
                )}
              </div>
            </div>
          </article>

          {/* Right Col: Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Explore more</h3>
            <div className={styles.exploreListDesktop}>
              {relatedPosts.map((related) => (
                <Link
                  href={`/blog/${related.slug}`}
                  key={related._id || related.slug}
                  className={styles.sidebarCard}
                >
                  <div className={styles.sidebarImage}>
                    {/* Placeholder Image */}

                    {related.image ? (
                      <img
                        src={related.image}
                        alt={related.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#f3f4f6",
                        }}
                      />
                    )}
                  </div>
                  <div className={styles.sidebarContent}>
                    <div className={styles.sidebarMeta}>
                      <span>Travel</span>
                      <span className={styles.sidebarMetaSeparator}>|</span>
                      <span className={styles.sidebarMetaDate}>
                        {new Date(related.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h4 className={styles.sidebarCardTitle}>{related.title}</h4>
                    <p className={styles.sidebarCardExcerpt}>
                      {related.body
                        ? related.body
                            .replace(/<[^>]*>?/gm, "")
                            .substring(0, 80) + ".."
                        : "No description.."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Explore Slider */}
            <div className={styles.exploreListMobile}>
              {relatedPosts.length > 0 && (
                <div className={styles.mobileSliderWrapper}>
                  <Link
                    href={`/blog/${relatedPosts[exploreIndex].slug}`}
                    className={styles.mobileSlideCard}
                  >
                    <div className={styles.mobileSlideImageContainer}>
                      <img
                        src={
                          relatedPosts[exploreIndex].image ||
                          "https://via.placeholder.com/600x400"
                        }
                        alt={relatedPosts[exploreIndex].title}
                        className={styles.mobileSlideImage}
                      />
                      <div className={styles.mobileSlideBadge}>A</div>
                    </div>
                    <div className={styles.mobileSlideContent}>
                      <div className={styles.sidebarMeta}>
                        <span>Travel</span>
                        <span className={styles.sidebarMetaSeparator}>|</span>
                        <span className={styles.sidebarMetaDate}>
                          {new Date(
                            relatedPosts[exploreIndex].date
                          ).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h4 className={styles.sidebarCardTitle}>
                        {relatedPosts[exploreIndex].title}
                      </h4>
                      <p className={styles.mobileSlideExcerpt}>
                        {relatedPosts[exploreIndex].body
                          ? relatedPosts[exploreIndex].body
                              .replace(/<[^>]*>?/gm, "")
                              .substring(0, 80) + ".."
                          : "No description.."}
                      </p>
                    </div>
                  </Link>

                  <div className={styles.mobileSliderControls}>
                    <button
                      onClick={handlePrevExplore}
                      className={styles.sliderButton}
                    >
                      <span className={styles.sliderArrow}>←</span> Previous
                    </button>
                    <button
                      onClick={handleNextExplore}
                      className={styles.sliderButton}
                    >
                      Next <span className={styles.sliderArrow}>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Tour Guides Widget */}
            <div className={styles.tourGuidesSection}>
              <h3 className={styles.sidebarTitle}>Tour Guides</h3>
              <div className={styles.sidebarList}>
                {/* Guide 1 */}
                <div className={styles.tourGuideItem}>
                  <Image
                    src="https://i.pravatar.cc/150?u=miranda"
                    alt="Miranda Rachel"
                    height={60}
                    width={60}
                    className={styles.guideAvatar}
                  />
                  <div className={styles.guideInfo}>
                    <span className={styles.guideName}>Miranda Rachel</span>
                    <span className={styles.guideLocation}>
                      <LocationIcon /> Jombang, Jawa timur
                    </span>
                    <div className={styles.rating}>
                      <span>★ ★ ★ ★ ☆ </span>
                      <span className={styles.ratingScore}>(4.0)</span>
                    </div>
                  </div>
                </div>
                {/* Guide 2 */}
                <div className={styles.tourGuideItem}>
                  <Image
                    src="https://i.pravatar.cc/150?u=danielle"
                    alt="Miranda Rachel"
                    height={60}
                    width={60}
                    className={styles.guideAvatar}
                  />
                  <div className={styles.guideInfo}>
                    <span className={styles.guideName}>Danielle Marsh</span>
                    <span className={styles.guideLocation}>
                      <LocationIcon /> Wonosobo, Jawa ten..
                    </span>
                    <div className={styles.rating}>
                      <span>★ ★ ★ ★ ☆ </span>
                      <span className={styles.ratingScore}>(4.0)</span>
                    </div>
                  </div>
                </div>
                {/* Guide 3 */}
                <div className={styles.tourGuideItem}>
                  <Image
                    src="https://i.pravatar.cc/150?u=haerin"
                    alt="Kang Haerin"
                    height={60}
                    width={60}
                    className={styles.guideAvatar}
                  />
                  <div className={styles.guideInfo}>
                    <span className={styles.guideName}>Kang Haerin</span>
                    <span className={styles.guideLocation}>
                      <LocationIcon /> Bandung, Jawa barat
                    </span>
                    <div className={styles.rating}>
                      <span>★ ★ ★ ★ ★ </span>
                      <span className={styles.ratingScore}>(5.0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Tablet-only Author Section */}
        <div className={styles.tabletAuthor}>
          <div className={styles.aboutSection}>
            <h3 className={styles.aboutTitle}>About Alex Carter</h3>
            <img
              src="https://i.pravatar.cc/150?u=alex_carter"
              alt="Alex Carter"
              className={styles.aboutImage}
            />
            <p className={styles.aboutBio}>
              With over a decade in fitness, Alex specializes in strength
              training. Certified by NASM, he designs challenging yet achievable
              workout programs. His passion is helping clients build strength
              and confidence through personalized routines. Outside the gym,
              Alex enjoys running and outdoor adventures.
            </p>
          </div>
        </div>

        {/* Tablet-only Navigation */}
        <div className={styles.tabletNav}>
          <div className={styles.navSection}>
            {prevPost ? (
              <div className={styles.navGroupLeft}>
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className={styles.navButton}
                >
                  <span className={styles.navArrow}>←</span>
                  <span className={styles.navButtonText}>Previous</span>
                </Link>
                <span className={styles.navLabel}>{prevPost.title}</span>
              </div>
            ) : (
              <div className={styles.navPlaceholder} />
            )}

            {nextPost ? (
              <div className={styles.navGroupRight}>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className={styles.navButton}
                >
                  <span className={styles.navButtonText}>Next</span>
                  <span className={styles.navArrow}>→</span>
                </Link>
                <span className={styles.navLabel}>{nextPost.title}</span>
              </div>
            ) : (
              <div className={styles.navPlaceholder} />
            )}
          </div>
        </div>

        {/* Global Comment Section (Full Width on all screens) */}
        <div className={styles.commentsContainer}>
          <DynamicCommentSection slug={post.slug} />
        </div>

        {/* Related Articles Section */}
        <section className={styles.relatedArticlesSection}>
          <div className={styles.relatedContainer}>
            <div className={styles.relatedHeader}>
              <h2 className={styles.relatedTitle}>Related articles</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedPosts.slice(0, 4).map((post, index) => {
                const authors = [
                  "Alex Carter",
                  "Maya Lee",
                  "Jordan Smith",
                  "Emma Rodriguez",
                ];
                return (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post._id || post.slug}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImageWrapper}>
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <div className={styles.placeholderImage} />
                      )}
                    </div>
                    <div className={styles.relatedCardContent}>
                      <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                      <p className={styles.relatedCardExcerpt}>
                        {post.body
                          ? post.body
                              .replace(/<[^>]*>?/gm, "")
                              .substring(0, 100) + "..."
                          : "No description available."}
                      </p>
                      <span className={styles.relatedCardAuthor}>
                        By {authors[index % authors.length]}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();
  const paths = Array.isArray(posts)
    ? posts.map((p: any) => ({
        params: { slug: p.slug },
      }))
    : [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await fetchPost(slug);

  if (!post) {
    return { notFound: true };
  }

  let allPosts = await fetchPosts();
  if (!Array.isArray(allPosts)) allPosts = fallbackPosts;

  const total = allPosts.length;

  let prevPost = null;
  let nextPost = null;
  const relatedPosts: Post[] = [];

  for (let i = 0; i < total; i++) {
    const current = allPosts[i];

    if (current.slug === slug) {
      // 🔁 Circular navigation
      prevPost = allPosts[(i + 1) % total]; // Older
      nextPost = allPosts[(i - 1 + total) % total]; // Newer
    } else {
      // 📌 All other posts are related
      relatedPosts.push(current);
    }
  }

  return {
    props: {
      post,
      relatedPosts, // ← contains ALL posts except current
      prevPost,
      nextPost,
    },
    revalidate: 10,
  };
};
