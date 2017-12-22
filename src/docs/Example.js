import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCode: false
        };
    }

    toggleCode = event => {
        event.preventDefault();

        this.setState(prevState => ({ showCode: !prevState.showCode }));
    }

    render() {
        const { showCode } = this.state;
        const { code, description, name } = this.props.example;
        // Must use CommonJS to require dynamically cuz ES modules  must be statically analyzable
        const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

        return (
            <div className="example">
                {description && <h4>{description}</h4>}

                <ExampleComponent />

                <p>
                    <a href onClick={this.toggleCode}>
                        {showCode ? 'Hide' : 'Show'} Code
                    </a>
                </p>

                {showCode && code}
            </div>
        );
    }
}

Example.propTypes = {
    example: PropTypes.object.isRequired
};

export default Example;