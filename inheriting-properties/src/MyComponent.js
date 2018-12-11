import React from 'react'
import { Map as ImmutableMap } from 'immutable'
import BaseComponent from './BaseComponent'

const SectionHeader = ({ text, length }) => ImmutableMap().set(0, null).get(length, (<h1>{text}</h1>));


export default class MyComponent extends BaseComponent {
    render() {
        console.log('props', this.props)
        const { users, groups } = this.props

        return (
            <section>
                <SectionHeader text="Users" length={users.length}></SectionHeader>
                <ul>
                    {users.map(i => (<li key={i}>{i}</li>))}
                </ul>

                <SectionHeader text="Groups" length={groups.length} />
                <ul>
                    {groups.map(i => (<li key={i}> {i}</li>))}
                </ul>
            </section>
        );
    }
}
