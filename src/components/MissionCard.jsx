/** Source: https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/proptypes-checagem-de-tipos/de0f34ac-c606-4217-a738-d16a245da6a4?use_case=side_bar */
/** Source: http://www.hackingwithreact.com/read/1/41/how-to-add-react-component-prop-validation-in-minutes */
import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <span data-testid="mission-name">{name}</span>
        <span data-testid="mission-year">{year}</span>
        <span data-testid="mission-country">{country}</span>
        <span data-testid="mission-destination">{destination}</span>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
