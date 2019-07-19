import * as React from 'react';
import { mount } from 'enzyme';
import TestComponent from '../src/components/__test__/test.component';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<TestComponent />);
      expect(wrap.find('div').text()).toBe('Hello Next.js');
    });
  });
});
