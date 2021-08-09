import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketigApp from './components/MarketingApp'
import Header from './components/Header'

const  generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketigApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}