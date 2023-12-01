import "./faq.css";
import Faq from "./faq";
export default function FAQ({ title }) {
  return (
    <div className="faq-container">
      <h1>{title}</h1>
      <div className="faq">
        <div className="faq-p">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint
          </p>
        </div>
        <div>
          <div className="faq-h1-p">
            <h5>Do I need a personal injury report?</h5>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <Faq head={"How much is my case worth?"} />
          <Faq head={"What should I do right after car accidect"} />
          <Faq head={"How much is my case worth?"} />
        </div>
      </div>
    </div>
  );
}
