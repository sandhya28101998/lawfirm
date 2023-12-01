import "./App.css";
import FIgstudio from "./Component/Figstudio";
import Intro from "./Component/Intro";
import Choose from "./Component/Choose";
import Area from "./Component/area";
import Clients from "./Component/Clients";
import Ourteam from "./Component/Ourteam";
import FAQ from "./Component/Faq";
import Subscribe from "./Component/Subscribe";
import Footer from "./Component/Footer";
function App() {
  return (
    <div>
      <FIgstudio />
      <Intro />
      <Choose title={"Why Choose us?"} />
      <Area title={"Area of Practices"} />
      <Clients title={"What says our happy Clients"} />
      <Ourteam title={"Our Team"} />
      <FAQ title={"FAQ"} />
      <Subscribe title={"Subscribe Our Newsletter"} />
      <Footer />
    </div>
  );
}

export default App;
