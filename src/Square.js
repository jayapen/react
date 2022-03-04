import React from 'react';
export default class Square extends React.Component {

   constructor(props){
       super(props);
       this.state={
           valProp:props.value,
           capProp:props.caption
       };
   }

    saySomething(something) {
       alert(this.state.valProp + " - " +  this.state.capProp);
        
    }

    handleClick(e) {
        this.saySomething("Hello world1");
        
    }


    render() {
      return (
        <button className="square" onClick={this.handleClick.bind(this)}>
          {this.props.value}
        </button>
        
      );
    }
  }

