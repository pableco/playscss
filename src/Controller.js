import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './View';

export default class Controller extends Component {

    render() {
        return (
            <View {...this.props}/>
        );
    }
}

Controller.propTypes = {
    first: PropTypes.string,
    second: PropTypes.string,
};
