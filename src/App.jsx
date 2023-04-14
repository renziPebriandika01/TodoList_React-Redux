import { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Form from './components/Form/Form';
import List from './components/List/List';
import NoteList from './components/noteList/NoteList';
class App extends Component {
    render(){
     return  (
        <Provider store={store}>
          <div className="App container">
          <Form />
          <List />
         <NoteList/>
        </div>
        </Provider>
      );


    }
}

export default App
