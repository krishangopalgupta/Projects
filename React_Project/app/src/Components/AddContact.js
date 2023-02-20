import React from "react";
import {Link} from 'react-router-dom'
class AddContact extends React.Component {
  state={
    name:"",
    email:""
  };

   add = (e)=>{
    e.preventDefault();
      if(this.state.name === "" || this.state.email === ""){
        alert('this is invalid');
        return;
      }
      // console.log('this is this.state', this.state)
      
      this.props.addContactHandler(this.state);
      this.setState({name:'',email:''})
  }

  render() {
    return (
      <div>
        <div className="ui main">
          <h2>Add Contact</h2>
          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                />
              <br /> <br />
            </div>
            <div className="field">
              <label>email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                />
            </div>
            <button className="ui button blue">Add</button>
            <Link to="/"><button className="ui button blue">Contact List</button></Link>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
