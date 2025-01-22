import "./App.css";
import Chatbox from "./ChatBox/ChatBox";
import ExecutiveTeam from "./component/ExecutiveTeam/ExecutiveTeam";
import LogoSlider from "./component/LogoSlider/LogoSlider";
import CustomNavbar from "./component/Navbar/Navbar";
import RoadMap from "./component/Roadmap/RoadMap";
import Banner from "./component/section1/Banner";
import CardSection from "./component/section2/CardSection";
import B2c from "./component/section3/B2c";
import B2B from "./component/section4/B2B";
import Card from "./component/section5/Card";
import Photo3D from "./component/section6/Business3D";
import Image3D from "./component/section7/Image3D";
import AiModal from "./component/section8/AiModal";
import Footer from "./component/section9/Footer";
import CardSlider from "./component/Team/CardSlider";
import Video from "./component/Video/Video";

function App() {
  return (
    <>
      <CustomNavbar />
      <Chatbox />
      {/* <Banner /> */}
      <Video />
      <CardSection />
      <B2B />
      <Image3D />
      <B2c />
      <LogoSlider />
      <Card />

      {/* <AiModal /> */}
      <Photo3D />
      <ExecutiveTeam />
      <CardSlider />
      <RoadMap />
      <Footer />
    </>
  );
}

export default App;
