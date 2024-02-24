
import { createContext } from 'react';
import './App.css'
import DynamicData from './Components/DynamicData'
import ContextHook from './lecture/ContextHook';


export let userContext = createContext(null);


function App() {
  let user = {
    name:"mohamed"
    ,age:20
        }
  return (
    <userContext.Provider value={user} className='app'>
<ContextHook/>
<DynamicData/>
</userContext.Provider>
  )
}

export default App
