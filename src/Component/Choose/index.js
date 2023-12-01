import "./choose.css";
import Chooseitems from "./choose";
export default function Choose({ title }) {
  return (
    <div className="choose-container">
      <h1>{title}</h1>
      <div className="choose1">
        <Chooseitems pre={98} />
        <Chooseitems pre={100} />
        <Chooseitems pre={100} />
      </div>
    </div>
  );
}
