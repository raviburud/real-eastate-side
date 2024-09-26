
import { styles } from '../common/styles';

function Header(props) {
    const {title}=props
  return (
  <div>
   <header style={styles.headerContainer}>
    <img src="logo.png" alt="Company Logo" className="logo" style={{flex:0.4}} />
    <nav >
        <ul style={styles.navConatiner}>
            <li style={styles.pad10}><a href="/">Home</a></li>
            <li style={styles.pad10}><a href="/Project">Project</a></li>
            <li style={styles.pad10}><a href="/services">Services</a></li>
            <li style={styles.pad10}><a href="/Enquiry">Enquiry</a></li>
            <li style={styles.pad10}><a href="/aboutUs">About us</a></li>
        </ul>
    </nav>
</header>

  </div>
  );
}

export default Header;
