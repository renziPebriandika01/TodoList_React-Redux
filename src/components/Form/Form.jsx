import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todoAction'
import { addNotes } from '../../store/actions/addNotes'
class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      choice:'Todo'
    }
  }  

  onChangeHandler = (e) => {
    this.setState({ text : e.target.value })
  }

  onSubmit = () => {
    if(this.state.choice ==='todo'){
    this.props.addTodos(this.state.text)
    this.setState({ text: '' })

    }else{
      this.props.addNotes(this.state.text)
      console.log(this.state.text)
    }
    this.setState ({
      text:''
    })
  }
  onClickChoice = (value) => {
    this.setState({ choice: value })
  }


  render () {
    let styleButtonTodo = ''
    let styleButtonNotes =''

    if(this.state.choice === 'todo'){
      styleButtonTodo = "btn btn-success"
    }else {
      styleButtonNotes="btn btn-success "
    }

    return (
      <>
      <button className={`btn m-2 ${styleButtonTodo}`}         
       onClick={() => this.onClickChoice('todo')}>Switch to Add Todo</button>
     <button className={`btn m-2 ${styleButtonNotes}`}  
      onClick={() => this.onClickChoice('notes')}>Switch to Add Notes</button>
  
        <p>Add {this.state.choice}</p>
        <div className="form-group">
          <input 
          value={this.state.text}
          onChange={this.onChangeHandler} type="text" className="form-control" placeholder="Type todo here" />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary mt-2 mb-2">Add</button>
      </>
    )
  }
} 

const mapDispatchToProps = dispatch =>{
  return {
    addTodos:(todo) =>dispatch(addTodo(todo)),
    addNotes:(note)=>dispatch(addNotes(note))
  }
}
export default connect(null,mapDispatchToProps)(Form)
