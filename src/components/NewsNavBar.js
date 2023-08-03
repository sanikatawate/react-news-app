import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Google_News.png';
export class navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{background: "white"}}>
          <Link to="/"><img src={Logo} style={{ height: '40px' }} alt="Google News" /></Link>
        <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
        </button>
          <div className="container-fluid d-flex justify-content-center">
            <div className='logo'> 
            </div>
            <div className="nav">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent" 
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <Link className="nav-link" to="/india">
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/world">
                      World
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/health">
                      Health
                    </Link>
                  </li>

                  {/* <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li> */}
                  {/* <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li> */}
                </ul>
              </div>
            </div>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default navbar;
