// src/data/blogData.js
const mdxFiles = import.meta.glob("../posts/*.mdx", { eager: true });

export const posts = Object.entries(mdxFiles).map(([path, module]) => {
  const slug = path.split("/").pop().replace(".mdx", "");
  return {
    slug,
    title: module.title || "Untitled",
    date: module.date || "Unknown Date",
    author: module.author || "Anonymous",
    subtitle: module.subtitle || "",
    topic: module.topic || "General",
  };
});
