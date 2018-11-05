import React, { Component } from 'react';

import { getDailyNasaPictureURL } from './services';
import DailyNasaImageWidget from '../../components/DailyNasaImageWidget';

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      nasaDailyPicture: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'
    };
  }

  componentDidMount() {
    getDailyNasaPictureURL()
    .then((response) => {
      this.setState({
        nasaDailyPicture: response.data.url
      });
    })
    .catch(function (error) {
       console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>Daily Nasa Picture on this website! :)</h1>
        <DailyNasaImageWidget url={this.state.nasaDailyPicture} />
      </div>
    );
  }
}

export default HomePage;
