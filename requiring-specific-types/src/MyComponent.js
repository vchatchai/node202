import React from 'react'
import MyUser from './MyUser'
import PropTypes from 'prop-types'

const  MyComponent = ({
    myDate, 
    myCount,
    myUsers,
}) => (
    <section>
        <p>{myDate.toLocaleString()}</p>
        <p>{myCount}</p>
        <ul>
            {myUsers.map(i =>(<li key={i.id}>{i.name}</li>))}
        </ul>
    </section>
);

MyComponent.prototypes = {
    myDate: PropTypes.instanceOf(Date),
    myCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    myUsers: PropTypes.arrayOf(PropTypes.instanceOf(MyUser)),
}

export default MyComponent;