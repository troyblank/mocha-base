import React from 'react';
import styles from './fakes/styles';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import SomeComponent from './react-components/some-component';

describe('React-Component', () => {
    it('should render a component', () => {
        const wrapper = shallow(<SomeComponent />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = shallow(<SomeComponent />);
        const button = wrapper.find('button');

        assert.isTrue(button.hasClass(styles['some-style']));
    });
});
