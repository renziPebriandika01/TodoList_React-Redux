import React, { Component } from 'react'
import {connect } from 'react-redux'
 class NoteList extends Component {
  render() {
    return (
      <div>
        <p>NOTES</p>
        <ul className="list-group">
            {this.props.notes.map((note,index)=>{
              return (
                    <li key={index} className="list-group-item container">
                            {note}
                    </li>
            )})}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return{
        notes:state.notesReducer.notes
    }
}

export default connect(mapStateToProps,null)(NoteList)
