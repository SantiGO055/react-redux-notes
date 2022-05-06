import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { noteReducer, createNote } from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';
import {filterChange} from './reducers/filterReducer';




// const container = document.getElementById('root');
// const root = createRoot(container);
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

export const store = createStore(reducer)

store.subscribe(()=>console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer form many simple reducers'))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
const renderApp = () => {
  // ReactDOM.render(<App />, document.getElementById('root'))
  //root.render(<App />);
}

// renderApp()
// store.subscribe(renderApp) //cualquier cambio que se produzca vuelve a renderizar la app
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
