import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/css/bootstrap.min.css';
import './index.css';
import Terminal from './terminal/terminal';
import Search from './search/search';
import Map from './map/map';

class App extends React.Component{
    state = {
        List: []
    };

    componentDidMount(){
        fetch(
            "https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne"
        )
        .then(response => response.json())
        .then(({devices})=>{
            this.setState({
                List: devices
            });
        });
    }
    render(){
        return (
            <div className='container appReact'>
                <h2 className='d-flex justify-content-center'>
                Пошук терміналів Приват Банку
                </h2>
                <Search searchTerminals={this.gettingTerminals}></Search>
                <Terminal TerminalList={this.state.List}></Terminal>
                <Map></Map>
            </div>
        )
    }
}