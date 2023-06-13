import React, { Component } from 'react'
import Child from './component/Child'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      dataList:[
        {
          languages: "js",
          position:"admin",
          dayOfBirth: "29/02/1999",
          name:"Thanh Trung"
        }
      ]
    }
  }
  
  getData=(keyList)=>{
    this.setState={
      dataList:keyList
      
    }
    console.log(this.state.dataList)
  }

  addIter = (iter) => {
    this.setState({
      dataList: this.state.dataList.push(iter)
    })

    console.log("🚀 ~ file: App.js:10 ~ App ~ constructor ~ dataList:", this.state.dataList)
  }
  render() {
    // console.log(this.state.dataList)
    return (
      <div>App
        <Child addIter={this.addIter}></Child>
      </div>
    )
  }
}
