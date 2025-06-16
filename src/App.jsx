import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ListPost from "./pages/ListPost"
import ShowPost from "./pages/showPost"
import GuestLayout from "./layouts/GuestLayout"
import Page404 from "./pages/Page404"
import { PostListContext, usePosts } from "./contexts/PostListContext"
// import {AlertProvider} from "./contexts/AlertContext"



function App() {


  const { postList } = usePosts()


  return (
    <>
    
    <PostListContext.Provider value={{postList}}>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/posts" element={<ListPost/>}/>
            <Route path="/posts/:id" element={<ShowPost/>}/>              
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </PostListContext.Provider>
    
    </>
  )
}

export default App
