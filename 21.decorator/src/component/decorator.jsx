import React from "react";
import {decoratorClass,decoratorClassFn,decoratorFn,decoratorFnfn} from "../decoratorJs/index.js";
//修饰器后面不能写分号
@decoratorClass
@decoratorClassFn({height:200})
class TestComp extends React.Component{
	@decoratorFn
	get height(){
		return "get获值函数"
	}
	set height(m){
		console.log(m)
	}
	@decoratorFnfn("点击")
	click(){
		

		console.log("点击了")
		console.log(this.height)
	}
	render(){

		return <div><h1 onClick={this.click.bind(this)}>test</h1></div>
	}
}
let a=new TestComp();
a.say()
console.log(a.height)
export default TestComp;