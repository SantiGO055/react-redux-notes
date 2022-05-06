// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from './reducers/noteReducer'
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
const App = () => {

    return (
      <div>
        <NewNote />
        <VisibilityFilter/>
        <Notes/>
      </div>
    )
  }
  export default App;
// const counterReducer = (state = 0, action) => {
//   console.log(state)
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     case 'ZERO':
//       return 0
//     default:
//       return state
//   }
// }
// const store = createStore(counterReducer)
// const App =()=> {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <h3>
//             {store.getState()}
//           </h3>

//           <button onClick={e=>{store.dispatch({type:'INCREMENT'})}}>
//             Increment
//           </button>
          
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
