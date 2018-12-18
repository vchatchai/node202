import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import MyComponent from './MyComponent'

export default (
    <BrowserRouter>
    <div>
        <Route  path="/" component={MyComponent} />
    </div>
    </BrowserRouter>
)