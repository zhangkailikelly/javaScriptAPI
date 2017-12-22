//给类加上修饰器
export const decoratorClass=target=>{
	target.prototype.say=()=>{
		alert("hello")
	}
}
//给类加上修饰器,外层包个函数可传值
export const decoratorClassFn=(...list)=>{
	return (target)=>{
		Object.assign(target.prototype,...list)
	}
}
//给类中的方法加个修饰器
/**
target  类的原型属性 =>targe.prototype
name    方法名
descript 方法的描述对象   =>{configurable:true,writable:true,enumerable:false,value:fn}
*/
export const decoratorFn=(target,name,descript)=>{
	descript.enumerable=false;
	return descript;
}
export const decoratorFnfn=(context)=>{

	return (target,name,descript)=>{return descript;}
}
