import React from 'react';
import { mount } from 'enzyme';
import ControlWrapper from "../src/js/components/ControlWrapper";

test('ControlWrapper component ', () => {
  
  const buttons = [10, 25, -10, -25];
  const bars = [10, 25, 50];
  const limit = 100;

  const updateValue = jest.fn();
  
  const wrapper = mount(
	<ControlWrapper 
		buttons={buttons}
		bars={bars}
		limit={limit}
		updateValue={updateValue} />
  );

  expect(wrapper.prop('buttons')).toEqual([10, 25, -10, -25]);
  expect(wrapper.prop('bars')).toEqual([10, 25, 50]);
  expect(wrapper.prop('limit')).toEqual(100);

});