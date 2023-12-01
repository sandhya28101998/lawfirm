import "./figstudio.css";
export default function FIgstudio() {
  return (
    <div className="igs-container">
      <nav className="navbar">
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="vector.png" alt="logo" />
          <h1>IGSTUDIO</h1>
        </div>

        <div className="nav-items">
          <p>Home</p>
          <p>Attorney</p>
          <p>Practice Areas</p>
          <p>About us</p>
        </div>
        <div className="contact">
          <p>Contact us</p>
        </div>
      </nav>
      <div className="text">
        <div className="text-igs">
          <h1>You don’t have to Fight them Alone.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <img src="Group 11.png" alt="search" />
        </div>
        <div>
          <img src="Group 10591.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
