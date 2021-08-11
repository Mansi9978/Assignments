import React, {Component} from 'react';

class Keypad extends Component {

    render() {
        return (
            <div className="button">
                <button class="btn btn-secondary" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                <button class="btn btn-secondary" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button class="btn btn-secondary" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button class="btn btn-secondary" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button class="btn btn-secondary" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
                <button class="btn btn-secondary" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button class="btn btn-secondary" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button class="btn btn-secondary" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button class="btn btn-secondary" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
                <button class="btn btn-secondary" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button class="btn btn-secondary" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button class="btn btn-secondary" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button class="btn btn-secondary" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>
                <button class="btn btn-secondary" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button class="btn btn-secondary" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button class="btn btn-secondary" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button class="btn btn-secondary" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}
export default Keypad;