import React, { Fragment, Component } from 'react';

import Autocomplete from "./AutoComplete";
import TableStock from "./TableStock";
import Store from '../../Store'
import "./SMFirst.css"


class SMFirst extends Component {
    static contextType = Store;

    state = {
        stocks: this.context.stocks,
        stocksValues: this.context.stocksValues
    };

    onInputChange = value => {
        this.setState({
            stocks: value
        });
    };

    onClickChange = value => {
        this.context.cart.push(value);

        let index = this.context.stocks.indexOf(value);
        this.context.stocks.splice(index,1);

        this.context.stocksValues.map((item, index) => (
            item['ticker'] === value ? (
                this.context.cartValues.push(item),
                this.context.stocksValues.splice(index,1)
                )
            : null
        ));

        this.setState({
            stocks: this.context.stocks,
            stocksValues: this.context.stocksValues
        });
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Stocked
                            </h1>
                            <div>
                                <Autocomplete stocks={this.context.stocks} onInputChange={this.onInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.stocks.length !== 0 ?
                    <div>
                        <TableStock
                            stocks={this.state.stocks}
                            stocksValues={this.state.stocksValues}
                            onClickChange={this.onClickChange}/>
                    </div> :
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-success btn-lg blink_me"
                            onClick={() => this.forceUpdate()}>
                            Show Data
                        </button>
                    </div>
                }
            </Fragment>
        );
    }
}

export default SMFirst;