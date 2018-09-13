import React, { Component } from 'react';
import './App.css';
import Content from './Content'
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.pageChange = this.pageChange.bind(this);
        this.state = {
          pageId: 1,
          pageInfo: []
        }
      }
    
  pageChange(e){
    let id = parseInt(e.target.id);
    this.setState({
      pageId: id
    })
  }
  

  render() {
    let posts = this.props.posts;
    let pages = this.props.pages;
    return (
        <div className="full-page">
        <div className="nav-bar">
           <ul>
               <li>
               {posts.map((post) => {
          return(
          <Link 
            to={"/" + post.slug}
            id={post.id}
            key={post.id}
            onClick={this.pageChange}
            >
              {post.title.rendered}
          </Link>)})}
               </li>
           </ul>
           <ul>
               <li>
                {pages.map((post) => {
                    return(
                    <Link 
                        to={"/" + post.slug}
                        id={post.id}
                        key={post.id}
                        onClick={this.pageChange}
                        >
                        {post.title.rendered}
                    </Link>)})}
               </li>
           </ul>
        </div>
        <Content pageId={this.state.pageId}/>
        </div>
    )
  }
}

export default NavBar;