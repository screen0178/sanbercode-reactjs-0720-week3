import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      realTime: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(() => this.tick(),1000);
    this.timeID = setInterval(() => this.getTime(),1000)
  }

  componentDidUpdate(){
    if (this.state.time === 0) {
      this.componentWillUnmount()
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
    if (this.state.item === 0) {
        clearInterval(this.timerID);
    }
  }
  getTime() {
      this.setState({
        realTime: new Date().toLocaleTimeString()
      })
  }


  render(){
    return(
      <>
      {this.state.time > 0 &&
        <h1>sekarang jam : {this.state.realTime} hitung mundur : {this.state.time}</h1>
      }
      </>
    )
  }
}

export default Timer