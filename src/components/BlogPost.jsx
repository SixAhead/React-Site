import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import BlogLayout from "./BlogLayout";
import { posts } from "../data/blogData";
import Footer from "../components/Footer"; // Adjust path if needed

const mdxFiles = import.meta.glob("../posts/*.mdx");

export default function BlogPost({ slug }) {
  const [Content, setContent] = useState(null);
  const [meta, setMeta] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const importPost = async () => {
      const path = `../posts/${slug}.mdx`;
      const importer = mdxFiles[path];
      if (!importer) {
        console.error("No matching post found for:", path);
        return;
      }
      const mod = await importer();
      setContent(() => mod.default);
      setMeta(mod.frontmatter || {});
    };
    importPost();
  }, [slug]);

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = posts[currentIndex - 1];
  const next = posts[currentIndex + 1];

  if (!Content) return <p>Loading…</p>;

  return (
    <>
      <BlogLayout title={meta.title || slug.replace(/-/g, " ")}>
        {meta.subtitle && (
          <h2
            style={{ fontWeight: "normal", fontSize: "1.25rem", color: "#666" }}
          >
            {meta.subtitle}
          </h2>
        )}
        {meta.date && (
          <p style={{ fontSize: "0.875rem", color: "#999" }}>
            {meta.date} — by {meta.author || "Anonymous"}
          </p>
        )}

        <MDXProvider>
          <div
            style={{
              fontSize: "1.125rem", // ~18px
              lineHeight: "1.75", // Comfortable reading
              color: "#333", // Body text color
              maxWidth: "700px", // Optional: constrain line length
              margin: "2rem auto", // Centered content
              padding: "0 1rem", // Padding on small screens
              fontFamily: "'Georgia', serif", // Optional: switch to serif for readability
            }}
          >
            <Content />
          </div>
        </MDXProvider>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {prev && (
            <button onClick={() => navigate(`/blog/${prev.slug}`)}>
              ← {prev.title}
            </button>
          )}
          {next && (
            <button onClick={() => navigate(`/blog/${next.slug}`)}>
              {next.title} →
            </button>
          )}
        </div>
      </BlogLayout>

      <Footer />
    </>
  );
}
