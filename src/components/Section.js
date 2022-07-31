import React, { Component } from 'react'
import Cart from './section/Cart'
import Details from './section/Details'
import MainContent as Products from './MainContent'
//import Payment from './section/Payment'
import {Route} from "react-router-dom"


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    // <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section