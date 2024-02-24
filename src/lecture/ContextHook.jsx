/*
هوا عباره عن  store
1- createContext = export let userContext = createContext(null);
2-what? where? = app or main provider
3-use it
*/

import { userContext } from "../App"



const ContextHook = () => {
let {name , age} = userContext(userContext)
  return (
    <div>
    {name}
        {age}
    </div>
  )
}

export default ContextHook
