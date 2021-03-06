import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="main">
          <div className="gdc-header">
            GDC
          </div>
          <div>
            <small>GCOEA DEVELOPERS CLUB</small>
          </div>
          <div className="header-links">
            <a href="https://github.com/GCOEA-DEV">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://in.linkedin.com/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://slack.com">
              <i className="fa fa-slack"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
