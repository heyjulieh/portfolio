import React, {Component} from 'react'

class Nav extends Component {
  render() {
  		return(
        <nav className="navbar">
          <div className="container-fluid nb">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Projects <span className="glyphicon glyphicon-menu-down"></span></a>
                  <ol className="dropdown-menu">
                    <li><a className="animated fadeIn" href="https://life-better.herokuapp.com/">01  LIFEBETTER</a></li>
                    <li><a className="animated fadeIn" href="https://thawing-ocean-17046.herokuapp.com/">02  SNEAKERHUB</a></li>
                    <li><a className="animated fadeIn" href="#">03  WAYFARER</a></li>
                    <li><a className="animated fadeIn" href="#">04  WOX</a></li>
                    <li><a className="animated fadeIn" href="https://github.com/heyjulieh/">05  GITHUB REPO</a></li>
                  </ol>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">About Me <span className="glyphicon glyphicon-menu-down"></span></a>
                  <ol className="dropdown-menu">
                    <li><a className="animated fadeIn" href="/myresume">01   resume</a></li>
                    <li><a className="animated fadeIn" href="/aboutme">02  about me</a></li>
                    <li><a className="animated fadeIn" href="/contactme">03  contact me</a></li>
                  </ol>
                </li>
              </ul>
              <div className="pull-right title-blurb" id="title-blurb">
                <p className="title-blurb">
                  I love creating beautiful & responsive web apps. Checkout my work and learn more about me.
                </p>
              </div>
          </div>
        </nav>
      )
  }
}
export default Nav;
