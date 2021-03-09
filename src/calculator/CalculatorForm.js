import React, { Component } from 'react';
import NumberInput from './NumberInput';
import Operation from './Operation';
import OperationSelect from './OperationSelect';

export default class CalculatorForm extends Component {
    constructor(props) {
        super(props);
        this.operations = {
            [Operation.sunkova]: 'Šunková 149Kč',
            [Operation.syrova]: 'Sýrová 159Kč',
            [Operation.paliva]: 'Pálivá 139Kč',
            [Operation.olivova]: 'Olivová 149Kč',
            [Operation.houbova]: 'Houbová 169Kč',
            [Operation.ananasova]: 'Ananasová 159Kč',
        };
        this.state = { x: 0, y: 0, operation: null, result: null };

        const handleChange = (name, value) => this.setState({ [name]: value });
        this.handleChangeX = handleChange.bind(this, 'x');
        this.handleChangeY = handleChange.bind(this, 'y');
        this.handleChangeOperation = handleChange.bind(this, 'operation');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    calculate() {
        const { x, y, operation } = this.state;
        switch (operation) {
            case Operation.sunkova: return 149 * x;
            case Operation.syrova: return 159 * x;
            case Operation.paliva: return 139 * x;
            case Operation.olivova: return 149 * x;
            case Operation.houbova: return 169 * x;
            case Operation.ananasova: return 159 * x;
            default: return null; // Sem by to nikdy nemělo dojít.
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const result = this.calculate();
        this.setState({ result });
        this.props.onResultChange(result);
    }

    render() {
        return (
            <form className="CalculatorForm" onSubmit={this.handleSubmit}>
                <OperationSelect name="pizza" label="pizza:"
                    operations={this.operations}
                    value={this.state.operation}
                    onChange={this.handleChangeOperation} />
                <NumberInput name="x" label="ks:"
                    value={this.state.x}
                    onChange={this.handleChangeX} />
                
                <input type="submit" value="Spočítej" />
            </form>
        );
    }
}