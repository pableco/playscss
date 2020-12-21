import React from 'react';
import { render } from 'react-dom';
import Example from '../src';

const props = {
    classname: '--news',
};

render(
    <Example {...props}/>,
    document.getElementById('content'),
);
