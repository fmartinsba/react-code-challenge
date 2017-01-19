import React from 'react';
import { mount } from 'enzyme';
import ProgressBar from '../src/js/components/ProgressBar';

test('ProgressBar component renders the percentage', () => {
	
	const value = 50;
	const limit = 200;

	const wrapper = mount(
		<ProgressBar value={value} limit={limit} />
	);

	const span = wrapper.find('.percent');

	expect(span.text()).toBe('25%');

});