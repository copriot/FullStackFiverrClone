import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Detail from "./pages/detail/Detail";
import MyGigs from "./pages/myGigs/MyGigs";
import AddGig from "./pages/addGig/AddGig";
import Search from "./pages/search/Search";
import Protected from "./components/protected/Protected";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 p-5 max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
            //Sadece satıcı hesabı
            <Route element={<Protected />}>
              <Route path="/my-gigs" element={<MyGigs />} />
              <Route path="/add-gig" element={<AddGig />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
