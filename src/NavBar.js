import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {

    render() {
        let projects = this.props.projects;
        let pages = this.props.pages;
        console.log(pages)
      return (
        <div className="nav-bar">
            {projects.map((title) =>
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
  