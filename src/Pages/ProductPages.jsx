import React, { Component } from 'react';

import Card from "../Component/Card/Card";
import ProductList from "../ProductList/ProductList";
import Cart from "../Component/Cart/Cart";
import Transaction from "../Component/Transaction/Transaction";

class ProductPages extends Component {
    state = {
        products: [],
        cart: [],
        transaction: [],
        total: 0
    };

    componentDidMount() {
        this.setState({ products: ProductList });
    }

    addToCart = (data) => {
        this.setState({ cart: [...this.state.cart, data] });
    }

    generateTransaction = () => {
        this.setState({ transaction: [...this.state.cart] });
        this.setState({ cart: [] });
    }

    transactionSummaryButton = () => {
        return (
            <div onClick = { () => this.generateTransaction() }>
                Generate Transaction
                <Transaction datas = { this.state.transaction } grandTotal = { this.state.total } />
            </div>
        );
    }

    grandTotal = (sum) => {
        this.setState({ total: this.state.total + sum.total });
    }

    render() {
        return (
        <div>
            <Cart datas = {this.state.cart} /><br/>
            {this.state.products.map((product) =>(
                <div key={ product.id }>
                    <Card 
                        key = { product.id }
                        name = { product.name }
                        price = { product.price }
                        stock = { product.stock }
                        addToCart = { this.addToCart }
                        grandTotal = { this.grandTotal }
                    />
                </div>
            ))}
            { this.transactionSummaryButton() }
        </div>
        );
    }
}

export default ProductPages;