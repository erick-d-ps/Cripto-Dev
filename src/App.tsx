
// 20250219163450
// https://api.coincap.io/v2/assets?limit=10&offset=0    api

import { RouterProvider } from "react-router-dom"
import {Router} from './routes'

function App() {

  return (
    <RouterProvider router={Router}/>
  )
}

export default App
