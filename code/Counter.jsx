class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  buttonStyle() {
    return {
      fontSize: 20,
      backgroundColor: 'purple',
      color: 'white',
      padding: 10,
      margin: 10
    }
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>This is the simplest Counter example! 😅</h1>
        <p>But with a bug! 🐛</p>
        <h2>Count: {count}</h2>
        <button style={this.buttonStyle()} onClick={this.increment}>Increment</button>
        <button style={this.buttonStyle()} onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
