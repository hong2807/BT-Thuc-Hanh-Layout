import React, { Component } from 'react'
import Header from './Header'
import Jumbotron from './Jumbotron'
import ProductList from './ProductList'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Jumbotron/>
                    <ProductList/>
                </div>
                <Footer/>
            </div>
        )
    }
}
