export default function Footer() {
  return (
    <footer style={{
      position: "static",
      width: "100%",
      backgroundColor: "transparent",
      color: "#000",
      padding: "2rem 1rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      marginTop: "4rem"
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} The Cinematic Fly. All rights reserved.</p>
      <div style={{ display: "flex", gap: "1rem",  }}>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "none" }}>Instagram</a>
        <a href="https://www.tiktok.com/@thecinematicfly" target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "none" }}>Tiktok</a>
        <a href="mailto:info@cinematicfly.com" style={{ color: "#000", textDecoration: "none" }}>Email</a>
      </div>
    </footer>
  );
}
