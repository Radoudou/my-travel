// src/Quote.js
import React from "react";

const Quote = ({ country, destination, photo, distance }) => (
    <figure>
        <img src={photo} alt={destination} />
        <figcaption>
            <h1>{destination}</h1>
            <h2>{country}</h2>
            <h3>{distance}</h3>
        </figcaption>
    </figure>
);

export default Quote;