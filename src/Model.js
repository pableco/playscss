import React, { Component } from 'react';
import Controller from './Controller';

export default class Model extends Component {

    render() {
        return (
            <Controller {...this.props}/>
        );
    }
}

Model.defaultProps = {
    cta: 'Call now',
    description: `Aenean vitae neque ultricies, egestas eros non, bibendum purus.
    Suspendisse sodales quam non lectus imperdiet dignissim.`,
    imgBg: 'https://source.unsplash.com/random',
    subTitle: 'Subtitle test',
    title: 'Test title',
};
