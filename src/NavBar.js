import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Link } from 'react-router-dom'


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          pages: []
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
    if(this.state.posts.length > 0){
    return ( 
      <div className="nav-bar">
        <ul>
          {this.state.posts.map((post) => {
          return(
            <li>
              <Link 
                to={post.slug}
                id={post.id}
                key={post.id}
                onClick={this.pageChange}
                className={"post"}
                >
                  {post.title.rendered}
              </Link>
            </li>
          )})}
          </ul>
        </div>
    )}
    else {
        return (
            <h1>loading...</h1>
        )
    }
  }
}

export default NavBar;