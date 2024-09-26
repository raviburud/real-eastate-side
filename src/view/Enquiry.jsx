import { useState } from "react";
import Button from "../component/button";
import SectionHeading from "../component/sectionHeading";
import { InputField } from "../component/inputcomponent";



const Enquiry = () => {

  const [isDialogOpen,setDialogOpen]=useState(false)
  const handleSubmitClick=()=>{
    setDialogOpen(!isDialogOpen)
  }
  return (
    <>
      {" "}
  
     
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'center',
            alignItems: "center",

          }}
        >
              <SectionHeading title={"please fill the details "} />
          <InputField
            Lable={" Name"}
            placeholder={"Please enter your Name"}
            onchange={() => {}}
            value={""}
          />
          <InputField
            Lable={"Email-Id"}
            placeholder={"Please enter your Email-id"}
            onchange={() => {}}
            value={""}
          />
          <InputField
            Lable={"Mobile No"}
            placeholder={"Please enter your Mobile-No"}
            onchange={() => {}}
            value={""}
          />
          <div style={{ padding: "10px" }} />
          <Button title={"Submit"} onClick={handleSubmitClick}/>
          <div style={{ padding: "20px" }} />
          <dialog open={isDialogOpen} style={{width:'500px'}}>
            <div  style={{textAlign:'center'}}>
            <h4>Deatils submitted sussefully</h4>
            <Button title={"ok"} onClick={handleSubmitClick}/>
            </div>
            </dialog>
        </div>
      
    </>
  );
};

export default Enquiry;
