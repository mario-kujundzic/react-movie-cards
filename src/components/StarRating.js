import React, {useState} from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, addRating}) => {
  const originalContainerStyle = { width: `${cropWidth(rating)}px` };

  const [containerStyle, setContainerStyle] = useState({ width: `${cropWidth(rating)}px` });
  
  // 20px je jedna zvezda
  
  const mouseEnter = (value) => {
    setContainerStyle({ width: `${(110/5)*value}px` });
  };
  
  const mouseLeave = () => {
    setContainerStyle(originalContainerStyle);  
  };

  const updateRating = (value) => {
    console.log("Adding rating... " + value)
    addRating(value);
  };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} onMouseEnter={() => mouseEnter(1)} onMouseLeave={mouseLeave} onClick={() => updateRating(1)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onMouseEnter={() => mouseEnter(2)} onMouseLeave={mouseLeave} onClick={() => updateRating(2)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onMouseEnter={() => mouseEnter(3)} onMouseLeave={mouseLeave} onClick={() => updateRating(3)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onMouseEnter={() => mouseEnter(4)} onMouseLeave={mouseLeave} onClick={() => updateRating(4)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onMouseEnter={() => mouseEnter(5)} onMouseLeave={mouseLeave} onClick={() => updateRating(5)}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};




StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
