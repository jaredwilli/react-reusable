import React from 'react';
import PropTypes from 'prop-types';

const Hello = () => {
    return (
        <div>
            Hello world
        </div>
    );
};

Hello.propTypes = {
    message: PropTypes.string
};

export default Hello;
