module.exports = [{"name":"Hello","description":"A basic example component description for Hello component","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A basic example component description for Hello component */\nexport default function Hello() {\n    return (\n        <div>\n            Hello world\n        </div>\n    );\n};\n\nHello.propTypes = {\n    /** Message to display */\n    message: PropTypes.string\n};\n\nHello.defaultProps = {\n    message: 'World'\n};\n","examples":[{"name":"ExampleHello","description":"Custom message","code":"import React from 'react';\nimport Hello from 'react-reuse/Hello/Hello';\n\n/** Custom message */\nfunction ExampleHello() {\n    return <Hello message=\"Nice component guys!\" />;\n};\n\nexport default ExampleHello;\n"}]}]