import React, { Component } from 'react';
import airbnbsRentals from './airbnbs.json';
import './Cart.css'
import Rental from './Rental'

class RentalsAndCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            totalPrice: 0,
            buttons: [
                { isAdd: true },
                { isAdd: true },
                { isAdd: true }
            ]
        };

    }

    onCompleteHandler = (priceAfterChange, itemsAfterChange, idx) => {
        return () => {
            console.log('idx', idx);
            const buttonState = this.state.buttons[idx];
            const updatedItem = {
                isAdd: !buttonState.isAdd
            };

            const buttons = [
                ...this.state.buttons.slice(0, idx),
                updatedItem,
                ...this.state.buttons.slice(idx + 1)
            ];
            this.setState({
                buttons: buttons
            })
            console.log(this.state.buttons);
            this.setState({
                totalItems: itemsAfterChange,
                totalPrice: priceAfterChange

            })
        }
    }

    render() {
        let totalFromCart = this.state.totalPrice;
        let itemsFromCart = this.state.totalItems;
        return (

            <div>
                <div className='cartClass'>
                    <div><h3> Airbnb Rentals</h3>
                    </div>Cart total $: {totalFromCart}  items: {itemsFromCart}</div>

                <div className="rentals">
                    {airbnbsRentals.map((airbnb, idx) => {

                        return < Rental
                            rental={airbnb}
                            key={idx}
                            items={this.state.totalItems}
                            total={this.state.totalPrice}
                            onComplete={this.onCompleteHandler}
                            button={this.state.buttons[idx]}
                            index={idx}
                        />
                    }
                    )}

                </div>
            </div>
        )

    }


}

export default RentalsAndCart