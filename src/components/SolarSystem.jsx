/** Source: https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/lista-de-componentes-e-chaves/c557f0df-fdc4-4e9d-a787-e4545030eea6?use_case=side_bar */
/** Source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-map-e-filter/eb53fd32-be11-4a70-a925-c29e1d7f8925/conteudos/3f220de0-5fea-47cf-8993-452b778d10b6/arraymap/4842d96e-a016-4dd4-bb3a-2feb7b1c2078?use_case=side_bar */
/** Source: https://reactjs.org/docs/lists-and-keys.html#keys */
import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import PlanetName from './PlanetName';
import '../Styles.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="flex-container">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />

          ))}
        </div>
        {/* <div className="flex-container-name">
          {planets.map((planet) => (<PlanetName
            key={ planet.name }
            planetName={ planet.name }
          />))}
        </div> */}
      </div>
    );
  }
}

export default SolarSystem;
