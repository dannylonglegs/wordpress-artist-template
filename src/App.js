import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
// import Project from './Project.js';
// import Page from './Page.js';
import PageHandler from './PageHandler.js';

const siteName = "YadaYada";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.pageChange = this.pageChange.bind(this);
    this.state = {
      posts:[],
      pages: [],
      pageId: 1,
      pageInfo: [],
      currentPageType: 'post',
      currentSlug: ''
    }
  }

  componentDidMount(){
    let projects = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts"
    fetch(projects)
    .then(response => response.json())
    .then(response => 
      this.setState({
        posts: response
      })
    )

    let pages = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/pages"
    fetch(pages)
    .then(response => response.json())
    .then(response => 
      this.setState({
        pages: response
      })
    )

    let id = this.state.pageId;
    let url = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts/`;
    let info = url + id;
    fetch(info)
    .then(response => response.json())
    .then(response => 
      this.setState({
        pageInfo: response.content.rendered
    }))
  }

  pageChange(e){
    e.preventDefault();
    let id = parseInt(e.target.id);
    let type = e.target.className;
    let slug = e.target.getAttribute('href');
    this.setState({
      pageId: id,
      currentPageType: type,
      currentSlug: slug
    })
  }
  
componentDidUpdate(prevProps, prevState) {
  let pageId = this.state.pageId;
  let posts = this.state.posts;
  let pages = this.state.pages;
  let allPosts = posts.concat(pages);
  let post = [];
  post = allPosts.filter((x) => {
    if (x.id === pageId){
      return x
    }
  })
  if (post.length > 0 && this.state.pageId !== prevState.pageId && post[0].type === "post") {
    console.log("here i am inside post")
    let pageContent = post[0].content.rendered;
    this.setState({
      pageInfo: pageContent,
      currentPageType: 'post'
    })
  }
  if (post.length > 0 && this.state.pageId !== prevState.pageId && post[0].type === "page") {
    console.log("here i am inside page")
    let pageContent = post[0].content.rendered;
    this.setState({
      pageInfo: pageContent,
      currentPageType: 'page'
    })
  }
}

  render() {
    return (
      <div className="App">
        <h1 className="title-page-header">{siteName}</h1>

        <NavBar 
          posts={this.state.posts} 
          pages={this.state.pages} 
          pageChange={this.pageChange}
        />
        <PageHandler
          pageId={this.state.pageId}
          pageInfo={this.state.pageInfo}
          currentPageType={this.state.currentPageType}
          slug={this.state.currentSlug}
        />
      </div>
    );
  }
}

export default App;
