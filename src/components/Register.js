import React from 'react';
import User from '../data/User.json'
class Form extends React.Component {
    constructor(props) {
    super();
    this.state = {
      input: {},
      errors: {},
      name: "",
      surname:"",
      password:"",
      birth:"",
      photo:"",
      accept:false,
    };

  
    
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.birthRef = React.createRef();
    this.photoRef=React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    
    this.setState({
     
      input
    });
  }
  
   handleReset(event){
     event.preventDefault();
     document.getElementById('name').value = "";
     document.getElementById('surname').value = "";
     document.getElementById('birth').value = "";
     document.getElementById('password').value = "";
     document.getElementById('email').value = "";
     document.getElementById('photo').value = "";
     document.getElementById('accept').checked = false;


  }
  
    
  handleSubmit(event) {
    event.preventDefault();
 
    if(this.validate()){
        console.log(this.state);
       
        let input = {};
        input["name"]=""
        input["surname"]=""
        input["password"] = ""
        input["email"] = ""
        input["birth"]=""
        input["accept"]=

        alert("Zarejstrowany")
       
        this.setState({
          name:this.nameRef.current.value,
          surname:this.surnameRef.current.value,
          password:this.passwordRef.current.value,
          email:this.emailRef.current.value,
          birth:this.birthRef.current.value,
          photo:this.photoRef.current.value,

          input
        });
        
      
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
      if(!document.getElementById("accept").checked){
        isValid = false;

        errors["accept"] = "Please accept conditions.";
       
      }

      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
      if (!input["surname"]) {
        isValid = false;
        errors["surname"] = "Please enter your surname.";
      }
      if (!input["birth"]) {
        isValid = false;
        errors["birth"] = "Please enter your birth.";
      }
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
      if (!input["photo"]) {
        isValid = false;
        errors["photo"] = "Please insert your photo.";
      }
      
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      if (typeof input["password"] !== "undefined") {
          
        var patterns = new RegExp("^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}$");
        if (!patterns.test(input["password"])) {
          isValid = false;
          errors["password"] = "Please enter valid password.";
        }
      }
      

      
     
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
         
        
        <form onSubmit={this.handleSubmit}>
       
        <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              ref={this.nameRef}
              id="name" />
              
              <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div class="form-group">
            <label for="surname">Surname:</label>
            <input 
              type="text" 
              name="surname" 
              value={this.state.input.surname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Surname" 
              ref={this.surnameRef}
              id="surname" />
  
              <div className="text-danger">{this.state.errors.surname}</div>
          </div>

          <div class="form-group">
            <label for="birth">Birth:</label>
            <input 
              type="date" 
              name="birth" 
              value={this.state.input.birth}
              onChange={this.handleChange}
              ref={this.birthRef}
              class="form-control" 
              placeholder="Enter birth" 
              id="birth" />
  
              <div className="text-danger">{this.state.errors.birth}</div>
          </div>


          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              ref={this.passwordRef}
              placeholder="Enter password" 
              id="password" />

              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              ref={this.emailRef}
              id="email" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          

          <div class="form-group">
            <label for="photo">Insert photo:</label>
            <input 
              type="file" 
              name="photo" 
              accept="image/x-png,image/gif,image/jpeg"
              value={this.state.input.photo}
              onChange={this.handleChange}
              ref={this.photoRef}
              class="form-control" 
              id="photo" />
   
              <div className="text-danger">{this.state.errors.photo}</div>
          </div>
          <div class="form-group">
            <label for="accept">Accept conditions:</label>
            <input 
              type="checkbox" 
              name="accept" 
              value={this.state.input.accept}
              onChange={this.handleChange}
              class="form-control" 
              id="accept" />
   
              <div className="text-danger">{this.state.errors.accept}</div>
          </div>

          
          <input type="submit" value="Register" class="btn btn-success" />
          <h1></h1>
          <button  class="btn btn-success" onClick={this.handleReset}>Reset</button>

        </form>
        <h1>Your personal data:</h1>
        <table class="table table-striped">
        <tr>
          <td>
            name:
          </td>
          <td>
          {this.state.name}
          </td>
        </tr>
        <tr>
          <td>
            Surname:
          </td>
          <td>
          {this.state.surname}
          </td>
        </tr>
        <tr>
          <td>
            E-mail:
          </td>
          <td>
          {this.state.email}
          </td>
        </tr>
        <tr>
          <td>
            Password:
          </td>
          <td>
          {this.state.password}
          </td>
        </tr>
        <tr>
          <td>
            Birthday:
          </td>
          <td>
          {this.state.birth}
          </td>
        </tr>
        </table>
        
      </div>

    );
  }
}
  
export default Form;