import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './View';

export default class Controller extends Component {

    render() {
        return (
            <View {...this.props}
                imgBgStyles={{ backgroundImage: `url(${this.props.imgBg})` }}/>
        );
    }
}

Controller.propTypes = {
    cta: PropTypes.string,
    description: PropTypes.string,
    extraInfo: PropTypes.string,
    imgBg: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
};
