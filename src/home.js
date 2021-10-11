import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Cause from "./components/featured-cause";
import Team from "./components/team";
import Success from "./components/success";
import Mission from "./components/mission";
import Footer from "./components/footer";
import Partner from "./components/Partner";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cause />
      <Mission />
      <Partner />
      <Success />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
