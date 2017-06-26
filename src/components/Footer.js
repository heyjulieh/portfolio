import React, {Component} from 'react';



class Footer extends Component {
  render() {
      return(
        <div className="container footer">
          <div className="row">
          <h3 className="footer">Ways to Contact Me</h3>
            <a className="footer" href="#">send me an email</a>
            <a className="footer" href="#">find me on facebook</a>
            <a className="footer" href="#">follow me on instagram</a>
            <a className="footer" href="#">checkout my github</a>
          </div>
        </div>
      )
  }

}

export default Footer;
