import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';
import DisplayCards from "./DisplayCards";

const Card = () => {

	const [cards, setCards] = useState([]);
	const [card, setCard] = useState({ id: uniqid(), image: require(`../images/${cards.length + 1}.png`), wasPicked: false });
	

	useEffect(() => {
		if(cards.length < 14) {
			setCard({
				id: uniqid(),
				image: require(`../images/${cards.length + 2}.png`),
				wasPicked: false
			});

			setCards(cards.concat(card));
		}
	}, [card, cards]);

	const shuffleCards = (cards) => {
		return cards.sort((a,b) => 0.5 - Math.random());
	};

	const handleOnClick = (e) => {
		const id = e.target.id ? e.target.id : e.target.parentElement.id;
		const newState = cards.map(card => {
			if (card.id === id) {
				return { ...card, wasPicked: true };
			}
			
			return card;
		});
		setCards(shuffleCards(newState));
	};

	return (
		<div className="Card">
			<DisplayCards cards={cards} handleOnClick={handleOnClick}/>
		</div>
	);

};

export default Card;