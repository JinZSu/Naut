import React from "react";
import "./Nautstring.css";
import Bubble from "./Bubble";

class Nautstring extends React.Component{
	constructor(props){
		super(props);
		this.state={
			inputstring : "",
		}
		this.updateInput = this.updateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	updateInput(event){
		this.setState({inputstring : event.target.value})
	}

	handleSubmit(event){
		event.preventDefault();
	}

	render(){
		return(
		<div className="Nautstring">
			<header className="Nautstring-header">
				<h1>Naut a string</h1>
			</header>
			<form>
				<input type="text" name="cstring" id="cstring" onChange={this.updateInput} />
				<button onClick={this.handleSubmit} > Submit </button>
			</form>
			<body className = "speech-bubble"> 
				<Bubble inputstring={this.state.inputstring} />
			</body>
    </div>
 		);
	}
};

export default Nautstring;