import React from 'react';
import { shallow } from 'enzyme';
import { CompoundToggle } from './compound-component.js';

it('CompoundComponent', () => {
    const rendered = render(
        <CompoundToggle>
            <CompoundToggle.On>On</CompoundToggle.On>
            <CompoundToggle.Off>On</CompoundToggle.Off>
            <CompoundToggle.Switch />
        </CompoundToggle>,
    );

    debugger
    expect(rendered.find('CompoundToggle.On').props())
        .toEqual({});
});

function render(children) {
    return shallow(<CompoundToggle>{children}</CompoundToggle>);
}
