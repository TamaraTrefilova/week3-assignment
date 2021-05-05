import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Rental.css'

class Rental extends Component {

    static propTypes = {
        rental: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }),
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperhost: PropTypes.bool.isRequired
            }),
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            }),

        }),
        onComplete: PropTypes.func.isRequired,
        items: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        button: PropTypes.bool.isRequired,
        index: PropTypes.number.isRequired
    }


    render() {
        const { title, houseType, image, location, payment, host, rating } = this.props.rental;
        let cancellation = payment.description;
        let totalFromCart = this.props.total;
        let itemsFromCart = this.props.items;
        let cost = parseInt(payment.cost);
        let buttonState = this.props.button;
        console.log('index', this.props.index);
        let index = this.props.index;
        return (
            <div className="flex-container-child">

                <div className='image'>
                    <div className='title'>
                        <h3>
                            {title}
                        </h3>
                        <h3> House type: {houseType}  </h3>
                    </div>
                    <img className='rentalImage'
                        src={image}
                        alt='rental-image'>
                    </img>

                </div>
                <div className='rental-info'>
                    <div className='location'>
                        <h3>
                            Location: {location.city},{location.country}
                        </h3>
                    </div>
                    <div className='payment'>
                        <h3>
                            Payment: {payment.cost}, Free cancellation: {cancellation !== '' ? 'Yes' : 'No'}
                        </h3>
                    </div>
                    <div className='host'>
                        <h3>
                            Host Name: {host.name}
                            <h4>{host.isSuperhost ? 'Super host!' : ''}</h4>
                        </h3>

                    </div>
                    <div className='rating'>
                        <h3>
                            Raiting: {rating.stars}. Reviews: {rating.reviews}
                        </h3>

                    </div>
                </div>

                <div className='cart'>
                    <div>
                        <button className={buttonState.isAdd ? '' : 'hide'} onClick={this.props.onComplete((totalFromCart + cost), (itemsFromCart + 1), index)}
                        >Add To Cart</button>
                    </div>
                    <div>
                        <button className={!buttonState.isAdd ? '' : 'hide'} onClick={this.props.onComplete((totalFromCart - cost), (itemsFromCart - 1), index)}
                        >Delete From Cart</button>

                    </div>
                </div>
            </div>
        )
    }


}

export default Rental