import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PageHandler from './PageHandler.js';
import { connect } from 'react-redux';
import { apiCall } from './actions/apiCall';

const siteName = "YadaYada";

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(apiCall())
 })


class App extends Component {
  
// constructor(props) {
//     super(props);
//     // this.pageChange = this.pageChange.bind(this);
//     this.state = {
//       posts:[],
//       pages: [],
//       pageId: 1,
//       pageInfo: [],
//       currentPageType: 'post',
//       currentSlug: ''
//     }
//   }

// componentDidMount(){
    // let projects = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts"
    // fetch(projects)
    // .then(response => response.json())
    // .then(response => 
    //   this.setState({
    //     posts: response
    //   })
    // )

    // let pages = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/pages"
    // fetch(pages)
    // .then(response => response.json())
    // .then(response => 
    //   this.setState({
    //     pages: response
    //   })
    // )
  // }

// pageChange(e){
//     e.preventDefault();
//     let id = parseInt(e.target.id);
//     let type = e.target.className;
//     let slug = e.target.getAttribute('href');
//     this.setState({
//       pageId: id,
//       currentPageType: type,
//       currentSlug: slug
//     })
//   }
  
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

componentDidMount(){
  this.props.loadPosts();
}

  render() {
    return (
      <div className="full-page">
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
