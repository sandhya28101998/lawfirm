import "./clients.css";
export default function ChooseClient({ name, img }) {
  return (
    <div className="clientItems">
      <img src={img} alt="logo" />
      <h2>{name}</h2>
      <p>Ceo of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
}
