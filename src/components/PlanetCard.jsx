import React from 'react';
import '../Styles.css';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ planetName }
        />
        <p
          style={
            {
              color: 'white',
              textAlign: 'center',
              paddingTop: '70px' }
          }
          data-testid="planet-name"
        >
          {planetName}

        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  // k: PropTypes.string.isRequired,
};

export default PlanetCard;
