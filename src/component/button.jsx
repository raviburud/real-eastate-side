import { styles } from "../common/styles";

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={onClick} style={styles.buttonStyle}>
      {title ? title : "button"}
    </button>
  );
};

export default Button;
