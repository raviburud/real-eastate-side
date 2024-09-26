
import { styles } from '../common/styles';
import '../css/index.css';

const SectionHeading=(props)=> {
const {title}=props
  return (
  <div style={styles.sectionHeadercontainer}>
     <h2 >{title?title:'Welcome'}</h2>
     <span style={styles.sectionHeaderLineSeprator}/>
  </div>
  );
}

export default SectionHeading;
