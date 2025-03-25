import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserLayout from './component/layout/UserLayout'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<UserLayout />} >
    {/** User layout */}
    </Route>

    <Route>{/** Admin layout */}</Route>
   </Routes>

   
   </BrowserRouter>
  )
}

export default App
