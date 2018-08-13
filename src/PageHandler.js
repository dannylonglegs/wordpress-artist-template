import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import Page from './Page.js';

class PageHandler extends Component {
    
    render() {
    if(this.props.currentPageType === 'post'){
        return (
            <Project 
                pageId={this.props.pageId}
                pageInfo={this.props.pageInfo}
                currentPageType={this.props.currentPageType}
                slug={this.props.slug}
            />
          );
    }

    if(this.props.currentPageType === 'page'){
        return (
            <Page
                pageId={this.props.pageId}
                pageInfo={this.props.pageInfo}
                currentPageType={this.props.currentPageType}
                slug={this.props.slug}
            />
          );
    }
     
    }
  }
  
  export default PageHandler;