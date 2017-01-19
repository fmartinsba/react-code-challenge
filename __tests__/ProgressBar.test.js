import React from 'react';
import { mount } from 'enzyme';
import ProgressBar from '../src/js/components/ProgressBar';

test('ProgressBar component renders the percentage', () => {
	
	const value = 50;
	const limit = 200;

	const wrapper = mount(
		<ProgressBar value={value} limit={limit} />
	);

	const span = wrapper.find('span.percent');

	expect(span.text()).toBe('25%');

});

test('ProgressBar component does not go under zero', () => {
	
	const value = -50;
	const limit = 100;

	const wrapper = mount(
		<ProgressBar value={value} limit={limit} />
	);

	const span = wrapper.find('span.percent');

	expect(span.text()).toBe('0%');

});

test('ProgressBar component get red after limit', () => {
	
	const value = 110;
	const limit = 100;

	const wrapper = mount(
		<ProgressBar value={value} limit={limit} />
	);

	const progressBar = wrapper.find('div.progress-bar progress-bar-danger');

	expect(progressBar).toBeTruthy();

});