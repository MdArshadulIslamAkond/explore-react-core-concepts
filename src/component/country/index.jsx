import PropTypes from 'prop-types';
import './country.css';
const Country = ({country}) => {

    console.log(country);

    const {name:{common:name}, flags:{png:src}, population,area} = country;
    // console.log(Id);
    return (
        <div className='country'>
          <h3>Name: {name} </h3> 
          <img src={src} alt="" /> 
          <p>population: {population} </p>
          <p>Area: {area} </p>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.array.isRequired,
}
export default Country;