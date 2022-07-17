import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';

const Card = () => {

	const [card, setCard] = useState({ id: uniqid(), image: null, wasPicked: false });
	const [cards, setCards] = useState([]);

	useEffect(() => {
		if(cards.length <= 16) {
			setCard({
				id: uniqid(),
				image: '',
				wasPicked: false
			});
			setCards(cards.concat(card));
		}});

	return (
		<div className="Card">

		</div>
	);

};

export default Card;