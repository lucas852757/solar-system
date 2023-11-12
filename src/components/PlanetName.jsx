import React from 'react';
import '../Styles.css';
import PropTypes from 'prop-types';

class PlanetName extends React.Component {
  render() {
    const { planetName } = this.props;
    return (
      <div className={ `${planetName}-name` } data-testid="planet-name">
        {planetName}
      </div>
    );
  }
}

PlanetName.propTypes = {
  planetName: PropTypes.string.isRequired,
};
export default PlanetName;
