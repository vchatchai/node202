import React from 'react'
import PropTypes from 'prop-types'

export default class BaseComponent extends React.Component { 
    static propTypes = { 
        users: PropTypes.array.isRequired, 
        groups: PropTypes.array.isRequired,
    }

    static defaultProps= {  
        users: [],
        groups: [],
    }

    render() { 
        return null;
    }
}