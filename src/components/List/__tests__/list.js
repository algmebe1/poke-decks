import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import List from '../List';
import { render, unmountComponentAtNode } from 'react-dom';

describe('List', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have a search-input container', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			container.getElementsByClassName('search-container')[0].innerHTML
		).toBe(
			'<input type="text" name="searchBar" id="searchBar" placeholder="Gotta search \'em all!"><div class="search-container__buttons"><button id="button-back_search"><span class="material-icons">arrow_back</span>&nbsp;<span>Go Back</span></button><a class="pokemon-card__text" id="pokemon_evolve" href="/decks"><button id="button-go-deck_search"><span class="material-icons">arrow_forward</span>&nbsp;<span>Go to Deck</span></button></a></div>'
		);
	});

	test('should have a card-gallery', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			document.getElementsByClassName('card-gallery')[0].children.length
		).toBe(0);
	});

	test('should be defined', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('card-gallery')[0]).toBeDefined();
	});

	test('should have navigation buttons', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			document.getElementsByClassName('search-container__buttons')[0].innerHTML
		).toBe(
			'<button id="button-back_search"><span class="material-icons">arrow_back</span>&nbsp;<span>Go Back</span></button><a class="pokemon-card__text" id="pokemon_evolve" href="/decks"><button id="button-go-deck_search"><span class="material-icons">arrow_forward</span>&nbsp;<span>Go to Deck</span></button></a>'
		);
	});
});
