
import { TestComponent } from '../../src/components';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('TestComponent', () => {

  describe('#render', () => {

    it('should return the right html', (done) => {
      const wrapper = shallow(<TestComponent />);

      expect(wrapper.html()).toEqual('<div></div>');
      setTimeout(() => done, jasmine.DEFAULT_TIMEOUT_INTERVAL);
    });

  });

});
