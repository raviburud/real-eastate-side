import { styles } from "../common/styles";
import Carousel from "../component/corrosal";
import Footer from "../component/footer";
import Header from "../component/header";
import SectionHeading from "../component/sectionHeading";
import AboutUs from "./aboutUs";
import Enquiry from "./Enquiry";
import Navbar from "./navbar";

import Project from "./project";

const Dashboard = () => {
  const slides = [
    { img: require("../utils/Assets/pexels-500photos-com-15338-93400.jpg") },
    { img: require("../utils/Assets/pexels-volkerthimm-27307397.jpg") },
  ];
  return (
    <>
      <div style={{ flex: 1, height: window.innerHeight }}>
        <div className="body">
          {/* <div style={styles.sectionWrapper}> */}
          <Carousel slides={slides} styles={styles.section1} />
          {/* </div> */}

          {/* <SectionHeading title={"Project"} /> */}
          <div>
            <Project />
          </div>

          <SectionHeading title={"About Us"} />
          <div>
            <AboutUs />
          </div>
          <SectionHeading title={"Equiry"} />
          <div>
            <Enquiry />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
