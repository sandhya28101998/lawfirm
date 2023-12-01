import "./faq.css";
export default function Faq({ head }) {
  return (
    <div className="faq-h1-p">
      <hr />
      <div className="Faq1">
        <h5>{head}</h5>
        <div className="add">
          <p>+</p>
        </div>
      </div>
    </div>
  );
}
