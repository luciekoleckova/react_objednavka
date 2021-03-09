import React, { Component } from 'react';

export default class Result extends Component {
    render() {
     
        const result = this.props.value;
       if (result || result === 0) return <div className="Result">Výsledná cena je: {result}Kč</div>;
       else return null;
    }
}