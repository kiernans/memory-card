import React from "react";
import '../styles/Card.css'

const DisplayCards = ({ cards }) => {

    return (
        <div className="Cards">
            {cards.map((card) => {
                return <div className="card" key={card.id}>
                            <img src={require('../images/1.png')} alt='' />
                        </div>
            })
            }
        </div>
    );
};

export default DisplayCards;