import React, { Component } from 'react';
import './App.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount(){
    let slug = this.props.match.params.slug;
    let posts = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts?slug=${slug}`
    fetch(posts)
    .then(response => response.json())
    .then(response =>
      this.setState({
        post: response
      })
    )}

  componentDidUpdate(prevProps) {
    if(this.props.match.params.slug !== prevProps.match.params.slug){
      let slug = this.props.match.params.slug;
      let post = `https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts?slug=${slug}`
      fetch(post)
      .then(response => response.json())
      .then(response => 
        this.setState({
          post: response
        })
      )}
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
      <h1>...</h1>
      )
    }
  }
}

export default Content;