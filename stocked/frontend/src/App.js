import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";

import MainPage from './components/MainPage/MainPage';
import StockMarket from './components/StockMarket/StockMarket'
import KMeansAlgorithm from "./components/KMeansAlgorithm/KMeansAlgorithm"
import Header from './components/NavLinks/Header/Header';
import Footer from "./components/NavLinks/Footer/Footer";
import Store from "./components/Store";


class App extends Component {
    static contextType = Store;

    componentDidMount() {
        axios.get(`/stocks/getdata`)
            .then(res => {
                let data = res.data;
                for (let key in data) {
                    for (let name in data[key]) {
                        if (data[key][name] !== 'Failed to parse json response')
                            if (this.context.stocks.indexOf(data[key][name].ticker) === -1) {
                                this.context.stocks.push(data[key][name].ticker)
                                this.context.stocksValues.push(data[key][name])
                            }
                    }
                }
                data = [];
                this.context.stocks.sort();
                for (let i in this.context.stocks)
                    for (let j in this.context.stocksValues)
                        if (this.context.stocksValues[j]['ticker'] === this.context.stocks[i])
                            data.push(this.context.stocksValues[j]);
                this.context.stocksValues = data;
            });
    }

    render() {
        return (
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                    </Switch>
                    <Switch>
                        <Route exact path='/stock' component={StockMarket}/>
                    </Switch>
                    <Switch>
                        <Route exact path='/algorithm' component={KMeansAlgorithm}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
    );
  }
}

export default App;