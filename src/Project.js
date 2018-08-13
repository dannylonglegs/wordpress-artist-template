import React, { Component } from 'react';
import './App.css';

class Project extends Component {
    
    render() {
      return (
        <div 
          className="project-wrapper"
          dangerouslySetInnerHTML={{__html: this.props.pageInfo}}>
        </div>
      );
    }
  }
  
  export default Project;
  