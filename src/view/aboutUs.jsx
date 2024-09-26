import Card from "../component/card";
import SectionHeading from "../component/sectionHeading";

const AboutUs = (props) => {

  return (
    <div style={{margin:'20px'}}>
      <section>
        <SectionHeading title={"Company Overview"} />
        <Card>
          <div className="companyDetailContainer">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </p>
            <img
              src={require("../utils/Assets/about-us-icon-34429.png")}
              width={"40%"}
              height={"200px"}
              style={{padding:'10px'}}
            />
          </div>
        </Card>

      </section>
    </div>
  );
};

export default AboutUs;
