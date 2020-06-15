import React, { Component } from 'react';

import Stock from "../Stock/Stock";

class Card extends Component {
    state = {
        stock: 0
    };

    incrementStock = () => {
        this.state.stock < this.props.stock && this.setState({ stock: this.state.stock + 1 });
    }

    decrementStock = () => {
        this.state.stock > 0 && this.setState({ stock: this.state.stock - 1 });
    }

    addProduct = () => {
        const data = {
            id: this.props.id,
            name: this.props.name,
            summary: this.state.stock * this.props.price,
            amount: this.state.stock
        }

        const sum = {
            total: this.state.stock * this.props.price
        }

        this.setState({ stock: 0 });
        this.props.addToCart(data);
        this.props.grandTotal(sum);
    }

    render() {
        return (
            <div>
                <div>{ this.props.name }</div>
                <div>{ this.props.price }</div>
                <Stock 
                    stock = {this.state.stock}
                    incrementStock = {this.incrementStock}
                    decrementStock = {this.decrementStock}
                />
                <div onClick = { () => this.addProduct() }>Add To Cart</div><br/>
            </div>
        );
    }
}

export default Card;