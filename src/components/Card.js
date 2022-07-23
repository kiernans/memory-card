import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';
import DisplayCards from "./DisplayCards";

const Card = ({ score, bestScore, incrementScore, updateBestScore, resetScore }) => {

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

	const resetWasPicked = () => {
		const newCards = cards.map(card => {
			return { ...card, wasPicked: false }
		});
		console.log(`newCards: `, newCards);
		setCards(newCards);
	};

	const handleOnClick = (e) => {
		const id = e.target.id ? e.target.id : e.target.parentElement.id;
		const cardChosen = cards.filter(card => card.id === id)[0].wasPicked;

		if(cardChosen) {
			if(score > bestScore) updateBestScore();
			console.log(`Before: `, cards);
			resetWasPicked();
			console.log(`After: `, cards);
			resetScore();
		} else incrementScore();
		
		const newCards = cards.map(card => {
			if (card.id === id) {
				return { ...card, wasPicked: true };
			}
			
			return card;
		});

		setCards(shuffleCards(newCards));
	};

	return (
		<div className="Card">
			<DisplayCards cards={cards} handleOnClick={handleOnClick}/>
		</div>
	);

};

export default Card;