import React from 'react'
import BaseComponent  from './BaseComponent'

export default class MyComponent extends BaseComponent { 
    componentWillMount() { 
         this.data = this.data.merge({
             placeholder: "Enter a name...",
             enabled: true,
         });
    }

    render() { 
        const {
            enabled, 
            name, 
            placeholder,
        } = this.data.toJS();
        return (
          <label htmlFor="my-input">
            Name:
            <input 
                id="my-input"
                disabled={!enabled}
                defaultValue={name}
                placeholder={placeholder}
                />
          </label>  
        );
    }
}