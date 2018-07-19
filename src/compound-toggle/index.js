import React from 'react';
import { CompoundToggleImpl } from './compound-component';

export function CompoundToggle() {
    return (
        <CompoundToggleImpl>
            <CompoundToggleImpl.Switch />
            <CompoundToggleImpl.Off>"Wylaczony"</CompoundToggleImpl.Off>
            <CompoundToggleImpl.On>"Właczony"</CompoundToggleImpl.On>
        </CompoundToggleImpl>
    )
}
