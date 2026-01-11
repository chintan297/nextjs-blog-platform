import { staticComments } from "@/data/comments";
import { staticPosts } from "@/data/posts";

export const fetchPosts = async () => {
  // Simulate network delay
  return staticPosts;
};

export const fetchPost = async (slug: string) => {
  return staticPosts.find((post) => post.slug === slug) || null;
};

export const fetchComments = async (slug: string) => {
  const post = staticPosts.find((p) => p.slug === slug);
  if (!post) return [];
  return staticComments.filter((c) => c.postId === post._id);
};

export const fallbackPosts = staticPosts;
