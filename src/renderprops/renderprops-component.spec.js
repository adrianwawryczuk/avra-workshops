import React from 'react';
import { shallow } from 'enzyme';
import { CompoundToggle } from './renderprops-component.js';

it('CompoundComponent', () => {
    const rendered = shallow(
        <CompoundToggle>
            <CompoundToggle.On>On</CompoundToggle.On>
            <CompoundToggle.Off>On</CompoundToggle.Off>
            <CompoundToggle.Switch />
        </CompoundToggle>,
    );

    const On = rendered.at(0).at(0).props();
    on.simulate('click')

    expect(rendered.find('CompoundToggle.On').props())
        .toEqual({});
});

