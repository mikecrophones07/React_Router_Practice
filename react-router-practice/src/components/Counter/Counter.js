import React from 'react';

class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        number: 0
      };
  }

  plusBtn = () =>{
    this.setState({number: this.state.number + 1});
    this.props.onCounterValueChange(1);
  }

  minusBtn = () =>{
    this.setState({number: this.state.number - 1});
    this.props.onCounterValueChange(-1);
  }
  
  render(){
    return (
        <p className = "p">
            <button className ="btnDesign" onClick={this.plusBtn}>+</button>
            <span>{this.state.number}</span>
            <button className ="btnDesign" onClick={this.minusBtn}>-</button>
        </p>
    );
  }
}

export default Counter;