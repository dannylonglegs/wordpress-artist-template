import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {

    render() {
        let posts = this.props.posts;
        let pages = this.props.pages;
      return (
        <div className="nav-bar">
            {posts.map((title) =>
                <a className={title.type} key={title.id} id={title.id} onClick={this.props.pageChange} href={title.slug}>
                    {title.title.rendered}
                </a>
            )
            }
            {pages.map((title) =>
                <a className={title.type} key={title.id} id={title.id} onClick={this.props.pageChange} href={title.slug}>
                    {title.title.rendered}
                </a>
            )
            }
        </div>
      );
    }
  }
  
  export default NavBar;
  