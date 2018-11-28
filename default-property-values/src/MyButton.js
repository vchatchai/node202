import React ,{Component} from 'react'

export default  class MyButton extends Component { 
    static defaultProps = { 
        disable: false,
        text: 'My Button',
    }

    render() {
        const { disable , text} = this.props
        return  (
            <button disabled={disable}>{text}</button>
        )
    }
}