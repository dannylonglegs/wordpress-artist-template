import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import Page from './Page.js';
import { Route, Link} from "react-router-dom";

class PageHandler extends Component {
    
    render() {
    let slugPath = this.props.slug;
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