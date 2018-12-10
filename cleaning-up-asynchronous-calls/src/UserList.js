import React from 'react';
import { Map as ImmutableMap } from 'immutable'

const ErrorMessage = ({ error }) => ImmutableMap().set(null, null).get(error, (<strong>{error}</strong>))


const LoadingMessage = ({ loading }) => ImmutableMap().set(null, null).get(loading, (<em>{loading}</em>))


const CancelLink = ({ loading, onClick }) => ImmutableMap().set(null, null).get(loading, (<a href="#" onClick={onClick}>Cancel</a>))


export default ({
    error,
    loading,
    users,
    onClickCancel,
}) => (
        <section>
            <ErrorMessage error={error} />
            <LoadingMessage loading={loading} />
            <ul>
                {users.map(i => (<li key={i.id}>{i.name}</li>))}
            </ul>
            <CancelLink
                loading={loading}
                onClick={onClickCancel}
            />
        </section>
    )
