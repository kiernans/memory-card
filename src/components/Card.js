import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';
import DisplayCards from "./DisplayCards";

const Card = ({ score, bestScore, incrementScore, updateBestScore, resetScore }) => {

	const [cards, setCards] = useState([]);
	
	useEffect(() => {
		createCardsArray();
	}, []);

	useEffect(() => {
		console.log('Cards after state change: ', cards);
	}, [cards]);

	useEffect(() => {
		if(cards.length) resetWasPicked();
		resetScore();
	}, [bestScore]);

	const createCardsArray = () => {
		for(let i=0; i < 14; i++){
			const card = {
				id: uniqid(),
				image: require(`../images/${i+1}.png`),
				wasPicked: false
			};

			setCards(prevCards => [...prevCards, card]);
		}
	};

	const shuffleCards = (cards) => {
		return cards.sort((a,b) => 0.5 - Math.random());
	};

	const resetWasPicked = () => {
		const newCards = cards.map(card => {
			return { ...card, wasPicked: false }
		});
		setCards(newCards);
	};

	const handleOnClick = (e) => {
		const id = e.target.id ? e.target.id : e.target.parentElement.id;
		const cardChosen = cards.filter(card => card.id === id)[0].wasPicked;

		if(cardChosen) {
			if(score > bestScore) updateBestScore();
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