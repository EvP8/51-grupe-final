import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from "./context/GlobalContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TermsOfService } from "./pages/TermsOfService";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";

export function App() {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route path='/tos' element={<TermsOfService />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/feed' element={<Feed />}></Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  )
}