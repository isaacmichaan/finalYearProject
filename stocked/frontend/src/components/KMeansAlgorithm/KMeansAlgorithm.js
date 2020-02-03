import React, { Component, Fragment} from 'react';

import Store from '../Store'
import {Table} from "react-bootstrap";


class KMeansAlgorithm extends Component {
    static contextType = Store;
    state = {
        show: true,
        cart: this.context.cart,
        cartValues: this.context.cartValues
    };
    handleClick(value) {
        this.context.stocks.push(value.item);

        const index = this.context.cart.indexOf(value.item);
        this.context.cart.splice(index,1);

        this.context.cartValues.map((item, index) => (
            item['ticker'] === value.item ? (
                    this.context.stocksValues.push(item),
                    this.context.cartValues.splice(index,1)
                )
                : null
        ));

        let data = [];
        this.context.stocks.sort();
        for (let i in this.context.stocks)
            for (let j in this.context.stocksValues)
                if (this.context.stocksValues[j]['ticker']===this.context.stocks[i])
                    data.push(this.context.stocksValues[j]);
        this.context.stocksValues = data;

        this.setState({
            cart: this.context.cart,
            cartValues: this.context.cartValues
        });
    }

    render() {
        return (
        <Fragment>
            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-danger mt-4"
                >
                    K-MEANS CLUSTERING
                </button>
            </div>

            {
                this.state.show ?
                <div className="text-center">
                    <button
                        onClick={() => {
                            this.setState({ show: false });
                        }}
                        type="button"
                        className="btn btn-warning mt-4"
                    >
                        Show Cart
                    </button>
                </div> :
                    (
                        <div>
                            {
                                this.state.cart.length !== 0 ?
                                    <div className="row mt-4">
                                        <div className="col-md-8 m-auto">
                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th className="text-center" width="5%">#</th>
                                                    <th>Stock</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.cart.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-lg"
                                                                onClick={() => this.handleClick({item})}>-
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {item}
                                                        </td>
                                                        <td>
                                                            {this.context.cartValues[index]['Open']}
                                                        </td>
                                                        <td>
                                                            {this.context.cartValues[index]['Previous Close']}
                                                        </td>
                                                    </tr>
                                                ))
                                                }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div> :
                                <p className="lead text-center">
                                    <br/> Your Cart is Empty!
                                </p>
                            }
                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        this.setState({show: true});
                                    }}
                                    type="button"
                                    className="btn btn-outline-warning mt-4"
                                >
                                    Hide Cart
                                </button>
                            </div>
                        </div>
                    )
            }
        </Fragment>
        );
    }
}

export default KMeansAlgorithm;