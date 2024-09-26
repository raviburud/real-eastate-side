import { styles } from "../common/styles";
import "../css/index.css";

function Footer(props) {
  const { title } = props;

  return (
    <div>
      <footer className="footer">
        <div style={{ flex: 0.8 }}>
          <p>Address :</p>
          <p>
            Street: Ghatala Towers, 19, Avenue Road
            <br /> City: Pune State: Maharastra <br />
            Phone number: 04428202018 <br />
            Zip code: 600000 Country calling code: +91 <br />
            Country: India
          </p>
        </div>

        <nav style={{ flex: 0.3 }}>
          <ul style={{ display: "flex" }}>
            <li style={styles.pad10}>
              <img
                src={require("../utils/icons/icons8-email-48.png")}
                style={styles.imgStyle}
              />
            </li>
            <li style={styles.pad10}>
              <img
                src={require("../utils/icons/icons8-facebook-64.png")}
                style={styles.imgStyle}
              />
            </li>
            <li style={styles.pad10}>
              <img
                src={require("../utils/icons/icons8-linkedin-48.png")}
                style={styles.imgStyle}
              />
            </li>
            <li style={styles.pad10}>
              <img
                src={require("../utils/icons/icons8-twitter-50.png")}
                style={styles.imgStyle}
              />
            </li>
            <li style={styles.pad10}>
              <img
                src={require("../utils/icons/icons-new-topic.png")}
                style={styles.imgStyle}
              />
            </li>
          </ul>
        </nav>
      </footer>
      <div style={{ textAlign: "center" }}>
        <p>@ The is copyright of section comapny @abcd</p>
      </div>
    </div>
  );
}

export default Footer;
