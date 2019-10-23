import React from 'react';
import Counter from '../Counter/Counter'
import '../../App.css';
import '../../Counter.css';

class CounterGroup extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        counterGroup: this.props.defaultCounter,
        inputValue:'',
        sum:0
    }
  }

  counterUpdateCallBack = changeNum =>{
    this.setState({sum: this.state.sum + changeNum})
  }

  handleInputChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({inputValue: event.target.value})
    }
  }

  regenerateCounters = () => {
      this.setState({counterGroup: this.state.inputValue})
  }

  renderCounters = () => {
    return Array.apply(null, {length: this.state.counterGroup}).map(element => {
        return (<Counter 
            key={element}
            onCounterValueChange={this.counterUpdateCallBack}
        />);
    })
  }
  
  render(){
    let counters = this.renderCounters()
    return (
      <div className="counter-group">
          <div className="regenerate">
            <input type = "text" value={this.state.inputValue} onChange={this.handleInputChange}/>
            <button onClick={this.regenerateCounters}>Regenerate Counter</button>
            <div className ="counters">
                <span>Sum: {this.state.sum}</span>
                {counters}
            </div>
          </div>
      </div>
    );
  }
}

export default CounterGroup;