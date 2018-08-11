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
      pageInfo: []
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
    var id = e.target.id;
    id = parseInt(id);
    this.setState({
      pageId: id
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.pageId !== prevState.pageId) {
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
  }


  render() {
    return (
      <div className="App">
        <h1 className="title-page-header">Hello Daniel</h1>
        <NavBar 
          projects={this.state.projects} 
          pages={this.state.pages} 
          pageChange={this.pageChange}
        >
        </NavBar>
        <Project 
          pageId={this.state.pageId}
          pageInfo={this.state.pageInfo}
        />
      </div>
    );
  }
}

export default App;
