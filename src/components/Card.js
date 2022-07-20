import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';
import DisplayCards from "./DisplayCards";

const Card = () => {

	const [card, setCard] = useState({ id: uniqid(), image: '../images/1.png', wasPicked: false });
	const [cards, setCards] = useState([]);

	useEffect(() => {

		if(cards.length < 16) {
			setCard({
				id: uniqid(),
				image: `../images/${cards.length + 2}.png`,
				wasPicked: false
			});

			setCards(cards.concat(card));
		}}, [card, cards]);

	return (
		<div className="Card">
			<DisplayCards cards={cards}/>
		</div>
	);

};

export default Card;