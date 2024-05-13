import { useState, useEffect } from "react";
import Country from "../country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
       .then(res => res.json())
       .then(data =>setCountries(data))
    } , [])
    const handleVisitedCountry = (country) =>{
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag = (flag) =>{
        console.log(flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h3>Visited countries</h3>
                <ul>
                   { visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className="flag-container">
                {visitedFlags.map(flag => <img src={flag} key={flag} />)}
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.name.common} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}  ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;