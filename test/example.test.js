/* eslint-env node, jest */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Example from '../src/Model';

const props = {
    classname: '--news',
};

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('component snapshoot', () => {

    it('render without props', () => {
        act(() => {
            render(<Example />, container);
        });

        expect(
            pretty(container.innerHTML),
        ).toMatchSnapshot();
    });

    it('render with all props', () => {
        act(() => {
            render(<Example {...props}/>, container);
        });

        expect(
            pretty(container.innerHTML),
        ).toMatchSnapshot();
    });
});

describe('Example', () => {

    it('render changing cta text', () => {
        act(() => {
            render(<Example cta={'click here'} />, container);
        });
        expect(container.querySelector('button').textContent).toBe('click here');
    });

});
