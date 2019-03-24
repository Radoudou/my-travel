import React from "react";
import Quote from "./Quote"
// src/Quotes.js
const quotes = [
    {
        destination: "New York",
        country: "United States of America",
        distance: "6 301 km - Distance between Marseille and New York",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/NYC_-_Time_Square_-_From_upperstairs.jpg/1200px-NYC_-_Time_Square_-_From_upperstairs.jpg"
    },
    {
        destination: "Tokyo",
        country: "Japan",
        distance: "10 083 km km - Distance between Marseille and Tokyo",
        photo:
            "https://s3.amazonaws.com/fathom_media/photos/tokyo-street-crossing-larkin-clark.jpg.1200x800_q85_crop.jpg"
    },
    {
        destination: "Rio",
        country: "Brazil",
        distance: "8 869 km - Distance between Marseille and Rio de Janeiro",
        photo:"https://www.bally.ch/on/demandware.static/-/Library-Sites-bally-shared-general/default/dw1bf21ce3/images/journal/ss16/travel/rio-de-janeiro/rio-de-janeiro-01.jpg"
    },
    {
        destination:
            "Toronto",
        country: "Canada",
        distance: "6 508 km - Distance between Marseille and Toronto",
        photo:"https://www.airtransat.com/experiencetransat/wp-content/uploads/2018/02/toronto-ontario-cn-tower.jpg"
    },
    {
        destination:
            "Sydney",
        country: "Australia",
        distance: "16 881 km - Distance between Marseille and Sydney",
        photo:"http://img.over-blog-kiwi.com/1/50/64/28/20160724/ob_ab3e1a_65830387.jpg"
    }
];

const Quotes = () => (
    <div>
        {quotes.map(quote => <Quote {...quote} />
        )}
    </div>
);

export default Quotes;