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
    first: 'Feliz',
    second: '<del>Na</del>vida<del>d</del>',
};
