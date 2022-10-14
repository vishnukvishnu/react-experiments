import React from 'react'

class Class extends React.Component {
    constructor(){
        super()
        this.state = {
            title:'Class Component',
            subTilte:'state and setState'
        }
      
    }
    // changeHeader = () =>{
    //     this.setState({title:'vsinudsf',subTilte:'State'},
    //     ()=>{
    //         console.log('arrow funciton',this.state)
    //     })
    //     console.log(this.state)
    // }

    render(){
        // console.log(this.props)
        return (
            <>
            {/* <h1>{this.state.title}</h1>
            <h3>{this.state.subTilte}</h3>
            <button onClick={this.changeHeader}>change</button> */}
            </>
        )

    }
}

export default Class;