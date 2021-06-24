import React from 'react'

function BeerList() {
    const beers = [
        {
            brewery: "Glutenberg",
            type: "American Pale Ale",
            ABV: 5.5
        },
        {
            brewery: "Ghostfish",
            type: "Pumpkin Ale",
            ABV: 6.5
        },
        {
            brewery: "Departed Soles",
            type: "Golden Ale",
            ABV: 5.5
        },
        {
            brewery: "Aurochs",
            type: "Porter",
            ABV: 6.5
        }
    ]
    return (
        <div>
            {beers.map((beer, idx) => (
                <div key={idx}>
                    <h1>{beer.brewery}</h1>
                    <p>{beer.type}</p>
                    <p>{beer.ABV}</p>
                </div>
            ))}
        </div>
    );
}

export default BeerList