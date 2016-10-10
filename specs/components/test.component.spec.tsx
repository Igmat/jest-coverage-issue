
import { TestComponent } from '../../src/components';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('TestComponent', () => {

  describe('#render', () => {

    it('should return the right html', () => {
      const wrapper = shallow(<TestComponent />);
      expect(wrapper.html()).toEqual('<div></div>');
    });

  });

});
