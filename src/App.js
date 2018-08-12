import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Project from './Project.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.pageChange = this.pageChange.bind(this);
    this.state = {
      projects:[],
      pages: [],
      pageId: 1,
      pageInfo: [],
      currentPageType: ''
    }
  }

  componentDidMount(){
    let projects = "https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts"
    fetch(projects)
    .then(response => response.json())
    .then(response => 
      this.setState({
        projects: response
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
    let id = e.target.id;
    id = parseInt(id);
    let type = e.target.className
    console.log(type)
    this.setState({
      pageId: id,
      currentPageType: type
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.pageId !== prevState.pageId && this.state.currentPageType === "post") {
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

    if(this.state.pageId !== prevState.pageId && this.state.currentPageType === "page") {
      let id = this.state.pageId;
      let url = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/pages/`;
      let info = url + id;
    fetch(info)
    .then(response => response.json())
    .then(response => 
      this.setState({
        pageInfo: response.content.rendered
      }))
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className="title-page-header">Test Site</h1>

        <NavBar 
          projects={this.state.projects} 
          pages={this.state.pages} 
          pageChange={this.pageChange}
        />

        <Project 
          pageId={this.state.pageId}
          pageInfo={this.state.pageInfo}
        />
      </div>
    );
  }
}

export default App;
