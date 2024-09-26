import { styles } from "../common/styles";


const Card = ({ children }) => {
  return <div style={styles.cardContainer}>{children}</div>;
};

export default Card;
