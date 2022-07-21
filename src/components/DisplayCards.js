import React from "react";
import '../styles/Card.css'

const DisplayCards = ({ cards, handleOnClick }) => {

    return (
        <div className="Cards">
            {cards.map((card) => {
                return  <div key={card.id} className="card"  id={card.id} onClick={handleOnClick}>
                            <img src={card.image} alt='' />
                        </div>
            })
            }
        </div>
    );
};

export default DisplayCards;