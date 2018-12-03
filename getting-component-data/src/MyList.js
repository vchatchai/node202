import React, {Component} from 'react'

export default class MyList extends Component { 
    constructor(){ 
        super();
        this.onClick = this.onClick.bind(this)
    }

    onClick(id) { 

        console.log(id)

        const {name} = this.props.items[id]
        console.log('clicked', `"${name}"`);
    }
    render() { 
        return (
            <ul>
                {this.props.items.map(({id, name}) => (
                    <li key={id} 
                    onClick={this.onClick.bind(null,id)} > {name} </li>
                ))}
            </ul>
        );


    }
}