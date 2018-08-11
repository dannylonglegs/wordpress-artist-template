import React, { Component } from 'react';
import './App.css';

class Project extends Component {

    render() {
      let pageInfo = this.props.pageInfo.content;
      console.log("this is page info", pageInfo)
      return (
        <div className="project-wrapper">
        
        </div>
      );
    }
  }
  
  export default Project;
  