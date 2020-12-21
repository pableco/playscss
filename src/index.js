import React from 'react';
import { render } from 'react-dom';
import Model from './Model';
import './main.scss';

render(
    <Model classname={'--news'}/>,
    document.getElementById('content'),
);
