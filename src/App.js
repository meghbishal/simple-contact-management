import React  from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import uuid from "uuid";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//creating class based component
//map is used for loop in react

class App extends React.Component{
  state ={
    contact:[
      {id:1,name:'Bsal',phone:9867543467,email:'bsal@gmail.com'},
      {id:2,name:'Abhi',phone:9867543467,email:'abhi@gmail.com'},
      {id:3,name:'Dipes',phone:9867543467,email:'dipes@gmail.com'}
    ]
   
  };
  handleDelete = id =>
  {
    let filterData=this.state.contact.filter(function(contact){
      return contact.id !== id
    });
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({contact:filterData});
        toast.success('Successfully Deleted!')
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  handleSubmittedData = (formData) => {
    //let id = this.state.contact.length + 1;
    let insertData = {id: uuid(),...formData}
    console.log(insertData);
    //console.log(id);
    this.setState({contact:[insertData,...this.state.contact]})
    toast.success('Data inserted');
  };
  handleEditData = editData => {
    let editContact = this.state.contact.map(function(contact){
      if(editData.id === contact.id){
        return editData;
      }
      return contact;
    });
    this.setState({ contact: editContact});
    toast.success("Edit Successfully");
  };
  render(){
    return (
      <div>
        <Navbar title="Contact Management System"/> 
        <Form formData={this.handleSubmittedData}/>
        {this.state.contact.map(contact=>(
          <Contact 
          contact={contact} 
          delete={this.handleDelete} 
          edit={this.handleEditData}
          key={contact.id}/>
          ))} 
          <ToastContainer />
      </div>
    )
    
  }
}
export default App;