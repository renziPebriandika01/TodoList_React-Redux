import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo } from '../../store/actions/todoAction'

 class TextAndForm extends Component {
    
    constructor(props){
    super(props)
    this.state = {
      viewMode: 'show',
      text: props.todo
    }
    }  
  deleteHandler =(index)=>{
    this.props.deleteTodo(this.props.index)
  }
     // fungsi untuk handle ketika user klik tombol edit
  editButtonHandler = () => {
    this.setState({ viewMode: 'edit'})
  }
   // fungsi untuk handle ketika user klik tombol save
   saveButtonHandler = () => {
    this.props.editTodo(this.props.index,this.state.text)
    this.setState({viewMode:'show'})
   }
   // fungsi untuk handle ketika user klik tombol cancel
   cancelButtonHandler = () => {
     this.setState({ viewMode: 'show'})
   }
     // fungsi untuk handle ketika user edit text di form
  onChangeHandler = (e) => {
    this.setState({ text: e.target.value })
  }
  render() {
      // default tampilan todo berupa text
      let todo = (
        <p>{this.props.todo}</p>
      )
  
      // defaut tampilan disamping text todo berupa tombol edit
      let buttonEdit = (
        <button
          className="btn btn-primary"
          onClick={this.editButtonHandler}
        >
          Edit
        </button>
      )   
      // jika viewMode berubah menjadi 'edit',
      if (this.state.viewMode === 'edit') {
        // ganti element text todo menjadi form input
        todo = (
          <input
            className="form-control"
            type="text"
            value={this.props.text}
            onChange={this.onChangeHandler}
          />
        ) 
        // ganti tombol ediit menjadi tombol save dan cancel
        buttonEdit = (
          <>
            <button
              className="btn btn-success"
              onClick={this.saveButtonHandler}
            >
              Save
            </button>
            <button
              className="btn btn-warning"
              onClick={this.cancelButtonHandler}
            >
              Cancel
            </button>
          </>
        )
      }
  
    return (
      <div>
        <div className="row">
        <div className="col-8">
          {todo}
        </div>
        <div className="col-4">
          {buttonEdit}
          <button
            className="btn btn-danger"
            onClick={this.deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
  editTodo :(index,todo)=>dispatch(editTodo({index,todo})),
  deleteTodo :(index) =>dispatch(deleteTodo(index))
  }
}

export default connect (null,mapDispatchToProps)(TextAndForm)
