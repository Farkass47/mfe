import React, {lazy, Suspense, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Progress from './components/Progress'
import Header from './components/Header'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

const  generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setSignedIn] = useState(false)
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header onSignedOut={()=>setSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress/>}>
                        <Switch >
                            <Route path="/auth">
                                <AuthLazy onSignIn={()=>setSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch >
                    </Suspense>                    
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}