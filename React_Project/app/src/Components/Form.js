import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         value:'',
      }
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert(`this form has been submitted ${this.state.value}`)
        event.preventDefault();
    }
  render() {
    return (
      <div id='root'>
        <div>Pick your favourite Color</div>
        <form onSubmit={this.handleSubmit}>
        <select name="" id="">
            <option value="Coconut">Coconut</option>
            <option value="redebra">redebra</option>
            <option value="chilly">chilly</option>
            <option value="banana">banana</option>
        </select>
        <input type="submit" value="submit" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

 ReactDom.render(
    <Form/>,
    document.getElementById('root')
)


