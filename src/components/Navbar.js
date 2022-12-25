import React from "react";

class Navbar extends React.Component{
    render(){
        //console.log(this.props);
       // this.props.data='Hello React'; => cannot be reassigned
        return (
            <nav class="navbar navbar-expand-lg " style={{backgroundColor: "blue"}}>
  <div class="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}}>{this.props.title}</a>
    
  </div>
</nav>
        );
    }
}
export default Navbar;