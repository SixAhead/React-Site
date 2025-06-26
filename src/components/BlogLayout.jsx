// components/BlogLayout.jsx
export default function BlogLayout({ children, title }) {
  return (
    <div style={{
      padding: "4rem 2rem",
      maxWidth: "800px",
      margin: "0 auto",
      color: "#222",
      backgroundColor: "#fff",
      fontFamily: "'Mori', sans-serif",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>{title}</h1>
      {children}
    </div>
  );
}
