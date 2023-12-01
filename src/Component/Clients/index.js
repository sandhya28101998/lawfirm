import "./clients.css";
import ChooseClient from "./Client";
export default function Clients({ title }) {
  return (
    <div className="clients-container">
      <div className="text-arrow">
        <h1>{title}</h1>
        <div className="arrow">
          <div className="right">
            <img src="right.png" alt="rigth" />
          </div>
          <p className="left">
            <img src="left.png" alt="left" />
          </p>
        </div>
      </div>

      <div className="clients1">
        <ChooseClient name={"Jane Cooper"} img={"Ellipse3.png"} />
        <ChooseClient name={"Devon Lane"} img={"Ellipse1.png"} />
        <ChooseClient name={"Robert Fox"} img={"Ellipse2.png"} />
      </div>
    </div>
  );
}
