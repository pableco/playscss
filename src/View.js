import React from 'react';

import Star from './star.svg';
import './swing.scss';

function createMarkup(first) {
    return { __html: first };
}

const Message = ({ first, second, children }) => (
    <p className="message">
        <span className='message__word message__word--first'>
            <div dangerouslySetInnerHTML={createMarkup(first)} />
            {children}
        </span>
        <span className='message__word message__word--second'>
            <div dangerouslySetInnerHTML={createMarkup(second)} />
            {children}
        </span>
    </p>
);

const View = ({
    first,
    second,
}) => (
    <main className="wrapper">
        <div className='swing'>
            <Message second={second} first={first} />
            <Message second={second} first={first} />
            <Message second={second} first={first} />
            <Message second={second} first={first}>
                <Star className='star' alt="Star" />
            </Message>
        </div>

    </main>
);

export default View;
