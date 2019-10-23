import React from 'react';
class Number extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        number: 0
      };
  }
  
  render(){
    const buttonClk = () => {
      this.setState({number: this.state.number + 2});
    }
    return (
      <div>
        <button onClick={buttonClk}>Hello World
        </button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default Number;
