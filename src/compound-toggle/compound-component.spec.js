import React from 'react';
import { shallow } from 'enzyme';
import { CompoundToggle } from './index';

it('CompoundComponent', () => {
    const sut = shallow(<CompoundToggle />);

    getSelect(sut).simulate('click');
    const updated = sut.update();

    expect(getSelect(updated)).toHaveProp({ on: true });
});

function getSelect(component) {
    return component.dive().at(0).at(0).dive()
}
