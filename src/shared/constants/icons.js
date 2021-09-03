import React from 'react';
import { _scaleText } from '../';
import HOME from '../../assets/icons/home.svg';
import ERROR from '../../assets/icons/error.svg';

const iconStyle = (width = 0, height = 0, color) => ({
    width: _scaleText(width).fontSize,
    height: _scaleText(height ? height : width).fontSize,
})

export const ICONS = {
    HOME: (...params) => <HOME {...iconStyle(...params)} />,
    ERROR: (...params) => <ERROR {...iconStyle(...params)} />
};
