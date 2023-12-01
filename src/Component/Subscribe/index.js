import "./subscribe.css";
export default function Subscribe({ title }) {
  return (
    <div className="subscribe-container">
      <div className="subscribe1">
        <h1>{title}</h1>
        <div className="subscribe">
          <input
            type="search"
            id="gsearch"
            name="gsearch1"
            placeholder="Name:"
          />
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder="Enter your Email"
          />
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
  );
}
