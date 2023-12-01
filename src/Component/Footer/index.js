import "./footeer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <nav className="navbar1">
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="vector.png" alt="logo" />
          <h1>IGSTUDIO</h1>
        </div>

        <div className="nav-items1">
          <p>Home</p>
          <p>Attorney</p>
          <p>Practice Areas</p>
          <p>About us</p>
        </div>
        <div className="logo">
          <img src="Group 90.png" alt="logo" />
        </div>
      </nav>
      <div className="footer-p">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}
