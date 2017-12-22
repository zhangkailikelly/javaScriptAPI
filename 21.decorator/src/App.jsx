import React from "react";
import { render } from "react-dom";
import Main from "./component/decorator.jsx";
var node = document.getElementById("main");

class App extends React.Component{
	render(){
		return <div>
            <Main/>
		</div>
	}
}
render(<App/>, node);
