import React ,{ useState } from "react"

export default function TextForm(props){
const [text,setText] = useState("");
const changeHandler= (event)=>{
setText(event.target.value);
}
const UpperclickHandler = (event)=>{
event.preventDefault();
setText(text.toUpperCase());
props.showAlert("Text convert Upper case","success");
}

const LowerclickHandler =(ev) =>{
ev.preventDefault();
setText(text.toLowerCase());
props.showAlert("Text convert Lower case","success");
}

const ClearHandler = (ev)=>{
ev.preventDefault();
setText("");
props.showAlert("Text Clear","success");
}

const reversHandler = (ev)=>{
ev.preventDefault();
let a = text.split(" ");
a = a.reverse();
 document.getElementById("reversTag").innerText = a.join(" ");
props.showAlert("Text Revers","success");

}

return (
<div>
<form>
<h1 className={`my-3  text-${props.changemode==="light"?"dark":"light"}`} >{props.title}</h1>
  <div className="form-group">
    <label className={` text-${props.changemode==="light"?"dark":"light"}`} >Example textarea </label>
    <textarea className="form-control" value={text} onChange={changeHandler} id="textfild" rows="3"></textarea>
  </div>
	<button className="btn btn-primary my-3 mx-3" onClick={ UpperclickHandler }>ToUpperCase</button>
	<button className="btn btn-primary my-3 mx-3" onClick={ LowerclickHandler }>ToLowerCase</button>
	<button className="btn btn-primary my-3 mx-3" onClick={ ClearHandler }>Clear</button>
	<button className="btn btn-primary my-3 mx-3" onClick={reversHandler}>Revers</button>

</form>
<h2 className={` text-${props.changemode==="light"?"dark":"light"}`} >Your Text Service</h2>
<p className={`mx-3 text-${props.changemode==="light"?"dark":"light"}`}>{text.length<1?0:text.split(" ").length} Word {text.split("").length} Character</p>
<p className={`mx-3 text-${props.changemode==="light"?"dark":"light"}`}>{0.008 * text.split("").length} Minitses read</p>
<p className={`mx-3 text-${props.changemode==="light"?"dark":"light"}`}>-----------------------------------------------------------</p>
<p className={`mx-3 text-${props.changemode==="light"?"dark":"light"}`}  >{text.length>0?text:"Enter text for preview"}</p>
<p className={`mx-3 text-${props.changemode==="light"?"dark":"light"}`} id="reversTag" ></p>
</div>
);
}