import React from 'react' 

export default class MyUser extends React.Component {
    state = {
        modified: new Date(),
        first: 'First',
        last: 'Last',
    };

    shouldComponentUpdate(props, state) {
        return +state.modified > + this.state.modified;
    }

    render() {
        const {
            modified, first, last
        } = this.state

        return (
            <section>
                <p>{modified.toLocaleString()}</p>
                <p>{first}</p>
                <p>{last}</p>
            </section>
        );
    }

}