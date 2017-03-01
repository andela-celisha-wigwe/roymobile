import 'react-native';
import React from 'react';
import Index from '../index.android.js';

import LoginView from '../src/views/LoginView'
import HomePageView from '../src/views/HomePageView'
import SubforumView from '../src/views/SubforumView'
import NewSubforumView from '../src/views/NewSubforumView'

import SubforumCard from '../src/cards/SubforumCard'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

it('renders login view correctly', () => {
	const tree = renderer.create(
		<LoginView />
	).toJSON()

	expect(tree).toMatchSnapshot()
});

it('renders home page view correctly', () => {
	const tree = renderer.create(
		<HomePageView />
	).toJSON()

	expect(tree).toMatchSnapshot()
});

it('renders subforum view correctly', () => {

	const subforumMock = { name: "Mock Subforum" }

	const tree = renderer.create(
		<SubforumView parameters={{subforum: subforumMock}} />
	).toJSON()

	expect(tree).toMatchSnapshot()
});

it('renders new subforum view correctly', () => {
	const tree = renderer.create(
		<NewSubforumView />
	).toJSON()

	expect(tree).toMatchSnapshot()
});

it('renders subforum card view with short name correctly', () => {
	const subforum = {
		name: "This is a short name",
		description: "",
	}
	const tree = renderer.create(
		<SubforumCard subforum={ subforum } />
	).toJSON()

	expect(tree).toMatchSnapshot()
});

it('renders subforum card view with long name correctly', () => {

	const subforum = {
		name: ((str) => {
			for (const i = 0; i < 10; i++) {
				str += str
			}
			return str
		})("a"),
		description: "",
	}
	
	const tree = renderer.create(
		<SubforumCard subforum={ subforum } />
	).toJSON()

	expect(tree).toMatchSnapshot()
});
