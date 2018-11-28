import React, {Component} from 'react'


export default class MyList extends Component { 
    
    render() { 
         const {items} = this.props
         return (
             <ul> 
                 {items.map(element => 
                    (<ui key={element}>{element}</ui>)
                 )}
             </ul>
         )
    }
}