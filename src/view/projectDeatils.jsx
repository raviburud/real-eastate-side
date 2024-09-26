//import liraries
import React, { Component } from "react";
import Card from "../component/card";
import { styles } from "../common/styles";
import { useLocation } from "react-router-dom";



const completedProjectData = [
  {
    id: 1,
    describe:
      "It is with great enthusiasm that we present this proposal for Project Name.] [Your company/team name] has reviewed the provided RFP documents, and I have no doubt our enthusiasm, attention to detail, and past experience will enable us to deliver an exceptional project outcome. This project is accompanied by many challenges, including operating in a highly populated area,demanding schedules, and following an inflexible budget, and we are confident our past experience managing similar projects will enable us to address these challenges and deliver on a successful final product",
    image: require("../utils/Assets/pexels-volkerthimm-27307397.jpg"),
  },
  {
    id: 2,
    describe:
      "It is with great enthusiasm that we present this proposal for Project Name.] [Your company/team name] has reviewed the provided RFP documents, and I have no doubt our enthusiasm, attention to detail, and past experience will enable us to deliver an exceptional project outcome. This project is accompanied by many challenges, including operating in a highly populated area,demanding schedules, and following an inflexible budget, and we are confident our past experience managing similar projects will enable us to address these challenges and deliver on a successful final product",
    image: require("../utils/Assets/pexels-volkerthimm-27307398.jpg"),
  },
];

const ongoingProject = [
  {
    id: 1,
    describe:
      "It is with great enthusiasm that we present this proposal for Project Name.] [Your company/team name] has reviewed the provided RFP documents, and I have no doubt our enthusiasm, attention to detail, and past experience will enable us to deliver an exceptional project outcome. This project is accompanied by many challenges, including operating in a highly populated area,demanding schedules, and following an inflexible budget, and we are confident our past experience managing similar projects will enable us to address these challenges and deliver on a successful final product",
    image: require("../utils/Assets/pexels-500photos-com-15338-93400.jpg"),
  },
  {
    id: 2,
    describe:
      "It is with great enthusiasm that we present this proposal for Project Name.] [Your company/team name] has reviewed the provided RFP documents, and I have no doubt our enthusiasm, attention to detail, and past experience will enable us to deliver an exceptional project outcome. This project is accompanied by many challenges, including operating in a highly populated area,demanding schedules, and following an inflexible budget, and we are confident our past experience managing similar projects will enable us to address these challenges and deliver on a successful final product",
    image: require("../utils/Assets/pexels-enginakyurt-1463917.jpg"),
  },
];
// create a component
const ProjectDetails = () => {
  const location = useLocation();

  console.log({ location });

  const RenderProject = ({ title, projectData }) => {
    return (
      <Card>
        <h4 style={styles.cardTitle}>{title}</h4>
        <div style={{ alignContent: "center" }}>
         
{projectData.map((item,id)=>{
    return(
        <>
        <p>{item.id}.{item.describe}</p>
        <img src={item.image} style={{width:'100%',alignSelf:'center'}}/>
        </>
    )
})}
       </div>
      </Card>
    );
  };
  return (
    <div
      style={styles.ProjectDetailContainer}
    >
      <div style={{ width: "90%" }}>
        {location.state == "completed Project" ? (
          <RenderProject title={"Completed Project"} projectData={completedProjectData} />
        ) : (
          <RenderProject title={"Ongoing Project"} projectData={ongoingProject} />
        )}
      </div>
    </div>
  );
};

//make this component available to the app
export default ProjectDetails;
