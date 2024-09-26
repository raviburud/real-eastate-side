import { styles } from "../common/styles";
import Button from "../component/button";
import Card from "../component/card";
import Carousel from "../component/corrosal";
import SectionHeading from "../component/sectionHeading";
import {useLocation, useNavigate}from 'react-router-dom'


function Project(props) {
  const navigate=useNavigate()

  const slides = [
    { img: require("../utils/Assets/pexels-volkerthimm-27307397.jpg") },
    { img: require("../utils/Assets/pexels-volkerthimm-27307398.jpg") },
  ];

  const OngoingProject = [
    { img: require("../utils/Assets/pexels-500photos-com-15338-93400.jpg") },
    { img: require("../utils/Assets/pexels-enginakyurt-1463917.jpg") },
  ];

  const handleClickMore = () => {
    alert("Enquiry");
  };
  const { title } = props;
  return (
    <div>
      <section>
        <SectionHeading title={"Project Highlights"} />
        <div className="projectContatiner" >
          <Card>
            <h4 style={styles.cardTitle}>Completed Project</h4>
            <div style={styles.cardTitle}>
            <Carousel slides={slides} styles={{width:'600px', height:'300px',textAlign:'center'}} />
            </div>
            <div style={styles.cardTitle}>
              <Button title={"Load More"} onClick={() => {navigate('/projectDetails',{state:'completed Project'})}} />
            </div>
          </Card>

          <Card>
            <h4 style={styles.cardTitle}>Ongoing Project</h4>
            <div style={styles.cardTitle}>
            <Carousel slides={OngoingProject} styles={{width:'600px', height:'300px',textAlign:'center'}} />
            </div>
            <div style={styles.cardTitle}>
              <Button
                title={"Load More"}
                onClick={() => {
                navigate('/projectDetails',{state:'ongoing Project'})
                }}
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Project;
