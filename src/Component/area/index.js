import "./area.css";
export function Areagrid() {
  <div className="grid-item item1 container">
    <img src="Rectangle 3652.png" alt="img" />
    <div className="position">BUSINESS LAW</div>
  </div>;
}
export default function Area({ title }) {
  return (
    <div className="area-container">
      <h1>{title}</h1>
      <div className="area-grid">
        <div className="grid-item item1 container">
          <img src="Rectangle 3652.png" alt="img" />
          <div className="position">BUSINESS LAW</div>
        </div>
        <div className="grid-item item2 container">
          <img src="Rectangle 3651.png" alt="img" />
          <div className="position">Partnership LAW</div>
        </div>
        <div className="grid-item item3 container">
          <img src="Rectangle 3653.png" alt="img" />
          <div className="position">REAL ESTATE LAW</div>
        </div>
        <div className="grid-item item4 container">
          <img src="Rectangle 3654.png" alt="img" />
          <div className="position">BUSINESS LAW</div>
        </div>
        <div className="grid-item item5 container">
          <img src="Rectangle 3656.png" alt="img" />
          <div className="position">LANDLORD DISPUTES</div>
        </div>
        <div className="grid-item item6 container">
          <img src="Rectangle 3655.png" alt="img" />
          <div className="position">ELDER ABUSE</div>
        </div>
      </div>
    </div>
  );
}
