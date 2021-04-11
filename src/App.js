import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Your fullname',
      password: 'Password must be 8 charactors'
    }
  }


  showInput(e) {
    console.log({name: e.target.name, value: e.target.value});
    this.setState={
      name: e.target.value,
    }
  }
  showPassword(e) {
    console.log({name: e.target.name, value: e.target.value});
    this.setState={
      password: e.target.value,
    }
  }
  showInfor(e) {
    e.preventDefault();
    console.log(this.state.name, this.state.password)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <form onSubmit={(e)=>this.showInfor(e)}>
        <div className="input-form">
          <label htmlFor="">Username</label>
          <input name="name" type="text" onChange={(e)=>this.showInput(e)} value={this.state.name} />
        </div>
        <div className="input-form">
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={(e)=>this.showPassword(e)} value={this.state.password} />
        </div>
        <button type="submit">Submit</button>
        </form>     
      </div>
    );
  }
}

export default App;
