export default function Ourteamdata({ name, cases, img }) {
  return (
    <div className="t">
      <div className="team1">
        <div className="team-img">
          <img src={img} alt="img" />
        </div>
        <div className="team-data">
          <h3>{name}</h3>
          <p>{cases}</p>
        </div>
      </div>
    </div>
  );
}
