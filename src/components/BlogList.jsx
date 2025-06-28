// components/BlogList.jsx
import { Link } from "react-router-dom";

function BlogList({ posts }) {
  return (
    <main className="blog-grid">
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
          <img src={post.heroImage} alt={post.title} />
          <div className="card-text">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default BlogList;
