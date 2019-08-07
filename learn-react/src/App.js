import React,{ Component } from 'react';

//class Timer extends Component {

  //We initiate the state inside the constructor

  //constructor(props) {
  //  super(props);

  //  this will give the internal value to startWith since it is State
  //  this.state = { startWith: 200 }

  //it will start with the props value
//  this.state = {currentValue: this.props.startWith};

  //Thats how we set out the time
  /*setTimeout(() => {
    this.setState({currentValue: 1221});
  }, 1000); */
//}

  //render() {
  //destructuring currentValuea nd resetTimerFunction so we can use it in the function
  const Timer = ({currentValue, resetTimerFunction}) => {
    return (
      //Timer ... {this.state.startWith} it will start with state value line 8
      //Timer ... {this.props.startWith} starts with the input provided
      //we are des resetTimerFunction and using it in onClick() event
      <div className="Timer" onClick={resetTimerFunction}>
      Timer ... {currentValue}
      </div>
    );
  }

class Greeting extends Component {
componentWillMount() {
  console.log('In componentWillMount');
}
componentDidMount() {
  console.log('In componentDidMount');
}
componentWillReceiveProps(nextProps) {
  console.log('In componentWillReceiveProps', nextProps);
}
shouldComponentUpdate() {
  console.log('In shouldComponentUpdate');
  return true;
}
componentWillUpdate(nextProps, nextState) {
  console.log('In componentWillUpdate');
}
componentDidUpdate(prevProps, prevState) {
  console.log('In componentDidUpdate');
}
componentWillUnmount() {
  console.log('In componentWillUnmount');
}
  render() {
    return(
      <div> {this.props.greeting} </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    //we dont need to put currentValue
    //this.state = {startValue: '' };
    this.state = {greeting: "Hello"};

    setTimeout(() => {
      this.setState({greeting: "Hi"});
    }, 500);
  }

  //Starts the timer
  startTimer = () => {
    //we are wrapping it with 'Number' because it is showing the number on DOM
    this.setState({
      currentValue: Number(this.state.startValue)
    });
    //this.refs.startInput.focus();
    setInterval(() => {
      //Thats how we set the time interval
      this.setState({
        currentValue: this.state.currentValue - 1
      });
     }, 1000);
  };

  resetTimer = (event) => {
    //debugger;
    this.setState({
      currentValue: 100
    });
  };

  //Handles User Input
  handleInputChange = (event) => {
    this.setState({
      startValue: event.target.value
    });
  }
  render() {
    return (
    //startWith acts as an input of the component
    <div className="App">
      <Timer currentValue={this.state.currentValue} resetTimerFunction={this.resetTimer}
      />
      <input type="text" value={this.state.startValue} onChange={this.handleInputChange} />
      <button onClick={this.startTimer}>Start Timer</button>
      <Greeting greeting={this.state.greeting}/>
    </div>
  );
 }
}

export default App;

//<button onClick={this.resetTimer}>Reset</button>
