import React, { Component } from 'react';
import './App.css';
import Content from './Content'
import axios from "axios";
import { Route, Link } from 'react-router-dom'


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          pages: [],  
          pageId: 0,
          pageInfo: []
        }
      }

      componentDidMount(){
        let posts = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts"
        axios.get(posts)
        .then(response => 
          this.setState({
            posts: response.data
          })
        )}

  render() {
    let posts = this.state.posts;
    if(posts.length > 0){
    return ( 
      <div>
           <ul>
               <li>
               {posts.map((post) => {
          return(
        <div>
          <Link 
            to={`/${post.slug}`}
            id={post.id}
            key={post.id}
            onClick={this.pageChange}
            className={"post"}
            >
              {post.title.rendered}
          </Link>
          </div>
          )})}
               </li>
           </ul>

            </div>
    )
        }
    else {
        return (
            <h1>loading...</h1>
        )
    }
  }
}

export default NavBar;