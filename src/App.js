import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Footer from './components/Footer';


var colors = new Array(
  [63,120,255],
  [86,166,108],
  [255,80,98],
  [45,175,230],
  [236,121,198],
  [255,164,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
   background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}

setInterval(updateGradient,15);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="pull-right">
            <div className="logo">
              <p className="logo-text">J:\ </p>
              <span className="glyphicon glyphicon-menu-right"></span>
              <p className="logo-text">_ </p>
            </div>
          </div>
          <div className="title">
            <a className="title-header animated fadeIn" href='/'><h1 className="title-header">Hi, I&rsquo;m Julie!</h1></a>
            <p className="title-text">
              I&rsquo;m A Front-End Web Developer!
            </p>
          </div>
        </div>
        <Nav />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
