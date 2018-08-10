import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {

    render() {
        var projects = this.props.projects;
        var pages = this.props.pages;
      return (
        <div className="nav-bar">
            <h2>Zines</h2>
            {projects.map((title) =>
                <li className="zine-author" key={title.id} id={title.id} onClick={this.props.pageChange}>
                    {title.title.rendered}
                </li>
            )
            }
            {pages.map((title) =>
                <li className="pages-title" key={title.id} id={title.id} onClick={this.props.pageChange}>
                    {title.title.rendered}
                </li>
            )
            }
        </div>
      );
    }
  }
  
  export default NavBar;
  