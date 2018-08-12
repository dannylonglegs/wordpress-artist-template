import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    
    render() {
      return (
        <div 
          className="page-wrapper" 
          dangerouslySetInnerHTML={{__html: this.props.pageInfo}}>
        </div>
      );
    }
  }
  
  export default Page;