/** Source: https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/proptypes-checagem-de-tipos/de0f34ac-c606-4217-a738-d16a245da6a4?use_case=side_bar
 */
/** Source: http://www.hackingwithreact.com/read/1/41/how-to-add-react-component-prop-validation-in-minutes */

import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
