import "./ourteam.css";
import Ourteamdata from "./ourteam";
export default function Ourteam({ title }) {
  return (
    <div className="ourteam-container">
      <h1>{title}</h1>
      <div className="ourteam-grid">
        <Ourteamdata
          name={"Danial Def"}
          cases={"301 Cases"}
          img={"team1.png"}
        />
        <Ourteamdata name={"Sanfole"} cases={"850 Cases"} img={"team2.png"} />
        <Ourteamdata name={"Cesforila"} cases={"470 Cases"} img={"team3.png"} />
        <Ourteamdata name={"Colleen"} cases={"180 Cases"} img={"team4.png"} />
        <Ourteamdata name={"Haldone"} cases={"212 Cases"} img={"team5.png"} />
        <Ourteamdata name={"Nik Jeo"} cases={"350 Cases"} img={"team6.png"} />
      </div>
    </div>
  );
}
