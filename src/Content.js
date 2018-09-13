import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Content extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          post: []
        }
      }

    componentDidMount(){
        axios.get("https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts/" + this.props.pageId)
        .then(response => 
            this.setState({
              post: response.data
            })
          )
    }
  render() {
    let post = this.state.post;
    console.log(post)
    return (
        <div>
            <p>content</p>
        </div>
    )
  }
}

export default Content;
