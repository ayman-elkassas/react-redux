import React,{Component} from 'react'
import {connect} from 'react-redux'
import {increase,decrease} from './actions/actions'

class App extends Component {

  // constructor(props) {
  // 	super(props)
  //   //*private component state
  //   this.state={
  //     count:0
  //   }
  // }

  // increment=()=>{
  //   this.setState({
  //     count:this.props.count+1
  //   })
  // }

  // decrement=()=>{
  //   this.setState({
  //     count:this.props.count-1
  //   })
  // }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        {/* this.props.increase => this is mean of dispatching action to reducer */}
        <button onClick={this.props.increase}> + </button>
        <div>
          {this.props.countComp}
        </div>
        <button onClick={this.props.decrease}> - </button>
      </div>
    );
  }
}

//todo:define connection function to map (redux state) to props
let mapStateToProps=(state)=>{
  return {
    countComp:state.count
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    //todo:dispatch to reducer
    increase:()=>dispatch(increase()),
    //or using direct decrease
    decrease:()=>dispatch(decrease()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)