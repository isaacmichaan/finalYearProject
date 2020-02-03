import React, {Component, Fragment} from 'react';
import {Table} from "react-bootstrap"


class TableStock extends Component {
    handleClick(data) {
        this.props.onClickChange(data.item);
    }
    render() {
        return (
                <Fragment>
                    <div className="row mt-4">
                        <div className="col-md-8 m-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th className="text-center" width="5%">#</th>
                                    <th>Stock</th>
                                    <th>Open</th>
                                    <th>Previous Close</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.stocks.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-success btn-lg"
                                                onClick={() => this.handleClick({item})}>+
                                            </button>
                                        </td>
                                        <td>
                                            {item}
                                        </td>
                                        <td>
                                            {this.props.stocksValues[index]['Open']}
                                        </td>
                                        <td>
                                            {this.props.stocksValues[index]['Previous Close']}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Fragment>
        );
    }
}

export default TableStock;