import ScrambleHoverBlock from "../components/ScrambleHoverBlock";
import Footer from "../components/Footer"; // Adjust path if needed

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ flexGrow: 1, padding: "2rem" }}>
        <ScrambleHoverBlock />
      </div>
      <Footer />
    </div>
  );
}

export default About;
