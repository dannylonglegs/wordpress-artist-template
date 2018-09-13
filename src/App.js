import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Link } from 'react-router-dom'


const siteName = "YadaYada";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
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
    )

    let pages = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/pages"
    axios.get(pages)
    .then(response => 
      this.setState({
        pages: response.data
      })
    )
  }

// componentDidUpdate(prevProps, prevState) {
//   let pageId = this.state.pageId;
//   let posts = this.state.posts;
//   let pages = this.state.pages;
//   let allPosts = posts.concat(pages);
//   let post = [];
//   post = allPosts.filter((x) => {
//     if (x.id === pageId){
//       return x
//     }
//   })
//   if (post.length > 0 && this.state.pageId !== prevState.pageId && post[0].type === "post") {
//     let pageContent = post[0].content.rendered;
//     this.setState({
//       pageInfo: pageContent,
//       currentPageType: 'post'
//     })
//   }
//   if (post.length > 0 && this.state.pageId !== prevState.pageId && post[0].type === "page") {
//     let pageContent = post[0].content.rendered;
//     this.setState({
//       pageInfo: pageContent,
//       currentPageType: 'page'
//     })
//   }
// }

  render() {
    let posts = this.state.posts;
    let pages = this.state.pages;
    console.log("posts", posts);
    return (
    <BrowserRouter>
      <NavBar
        posts={this.state.posts}
        pages={this.state.pages}
      >
        {this.props.children}
      </NavBar>
    </BrowserRouter>
    );
  }
}

export default App;
