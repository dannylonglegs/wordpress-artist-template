import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {},
      slug: this.props.match.params.slug
    }
  }

  componentDidMount(){
    let slug = this.props.match.params.slug;
    let posts = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts?slug=${slug}`
    axios.get(posts)
    .then(response => 
      this.setState({
        post: response.data
      })
    )}

  render(){
      let post = this.state.post;
      console.log(post);
      if(post.length > 0){return(
        post.map((p) => {return(
          <div dangerouslySetInnerHTML={{ __html: p.content.rendered }} />

        )})
      )
        
    }
    else {
      return (
      <h1>loading...</h1>
      )
    }
  }
    
  
}

export default Content;