import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {

    render() {
        let posts = this.props.posts;
        let pages = this.props.pages;
      return (
        <div className="nav-bar">
            {posts.map((title) =>
                <li className={title.type} key={title.id} id={title.id} onClick={this.props.pageChange}>
                    {title.title.rendered}
                </li>
            )
            }
            {pages.map((title) =>
                <li className={title.type} key={title.id} id={title.id} onClick={this.props.pageChange}>
                    {title.title.rendered}
                </li>
            )
            }
        </div>
      );
    }
  }
  
  export default NavBar;
  