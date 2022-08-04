
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Auth/Login";
import RoutePrivate from "../Auth/RoutePrivate";
import Home from "../Paginas/Home";
import NotFound from "../Paginas/NotFound";
import Posts from "../GestionPosts/Posts";
import Layout from "./Layout";

function Router() {
  return (
   
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="product-admin" element={<RoutePrivate><Posts/></RoutePrivate>}></Route>


          <Route path="*" element={<NotFound />}></Route>
        </Route>

      </Routes>
 
  );


}
export default Router;
