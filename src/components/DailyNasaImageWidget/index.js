import React from 'react';
import PropTypes from 'prop-types';

import DailyNasaImage from './DailyNasaImage';

const DailyNasaImageWidget = ({ url }) => {
  return (
    <DailyNasaImage src={url}/>
  );
}

DailyNasaImageWidget.propTypes = {
  url: PropTypes.string.isRequired
};

DailyNasaImageWidget.defaultProps = {
  url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'
};

export default DailyNasaImageWidget