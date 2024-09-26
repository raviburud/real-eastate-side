//import liraries
import React, { Component } from 'react';
import SectionHeading from '../component/sectionHeading';


// create a component
const Services = () => {
    return (
        <div style={styles.container}>
          <SectionHeading title={'Services'}/>
        </div>
    );
};

// define your styles
const styles = {
    container: {
        flex: 1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

//make this component available to the app
export default Services;
