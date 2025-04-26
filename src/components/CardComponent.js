import React, {Component} from "react"

class ClassCard extends React.Component{
    constructor(props){
        super(props)
       this.state={
        count: 2,
        count2: 0,
       }
    }

   async componentDidMount(){
    const data = await fetch("")
    const json = await data.json
    
   }
render(){
    const {name, location} = this.props
    return <div className="card">
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>{
            this.setState ({
                count: this.state.count+ 1
            })
        }}>Incriment</button>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Review: Good</h4>
    </div>
}
}

export default ClassCard