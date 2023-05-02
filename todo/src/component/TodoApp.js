import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {
  state={
    input:"",
    items:[]
  }
  handleChange=event=>{
    this.setState({
      input:event.target.value
    })
  
  };
  storeItems=event=>{
    event.preventDefault();
    const{input}=this.state
    this.setState({
      items:[...this.state.items,input],
      input: ""
    });
  };
  deleteItem=key=>{
    const allItems=this.state.items;
    allItems.splice(key,1);
    this.setState({
      items:allItems
    })
  };
  
  render() {
    const{input,items}=this.state
    console.log(items)
    return (
      <div class="todo-container">
        
        <form class='input-section' onSubmit={this.storeItems}>
        <h1>todo</h1>
    
            <input type='text'value={input} onChange={this.handleChange} placeholder='enter items...' />
        </form>
        <ul>
          {items.map((data,index)=>(
            <li key={index}>
              {data}<li><i className='fa-solid fa-trash' onClick={()=>this.deleteItem(index)}></i></li>

            </li>
          ))}
        </ul>
      </div>
    )
  }
}
