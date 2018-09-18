import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {}
      // slug: this.props.match.params.slug
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

  shouldComponentUpdate(nextProps){
      if(nextProps.match.params.slug != this.props.match.params.slug){
        console.log("new props", nextProps);
        return true
      }
      if(nextProps.match.params.slug == this.props.match.params.slug){
        console.log("same props", nextProps);
        return false
      }
  }

  componentDidUpdate() {
    let slug = this.props.match.params.slug;
      let post = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts?slug=${slug}`
      axios.get(post)
      .then(response => 
        this.setState({
          post: response.data
        })
      )
    }
      

  render(){
      let post = this.state.post;
      if(post.length > 0){return(
        post.map((p) => {return(
          <div dangerouslySetInnerHTML={{ __html: p.content.rendered }} />

        )})
      )
        
    }
    else {
      return (
      <h1></h1>
      )
    }
  }
    
  
}

export default Content;