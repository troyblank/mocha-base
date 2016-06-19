import React from 'react';
import styles from './fakes/styles';
import { assert } from 'chai';
import { render } from 'enzyme';
import SomeComponent from './react-components/some-component';

// const SomeComponent = React.createClass({
//     render: function() {
//         return (
//           <button className={styles['some-style']}></button>
//         );
//     }
// });

describe('React-Component', () => {
    it('should render a component', () => {
        const wrapper = render(<SomeComponent />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = render(<SomeComponent />);
        const button = wrapper.find('button');

        assert.isTrue(button.hasClass(styles['some-style']));
    });
});
