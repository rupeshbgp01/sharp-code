import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/internship/Team"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Verify from "./components/verify/Blog"
// import SignIn from "./components/login-signup/login"
import Signinup from "./components/Forms/signinup"
// import Verify from "./components/verify/Blog"
import { Toaster } from 'react-hot-toast';
import SignUp from "./components/Forms/SignUp"
import Login from "./components/Forms/Login"
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className="router__container">
      <Router>
        <Header />
        <Switch>
          {/* <Verify/> */}
          <Route exact path='/' element={Home} />
          <Route exact path='/about' element={About} />
          <Route exact path='/courses' element={CourseHome} />
          <Route exact path='/team' element={Team} />
          <Route exact path='/pricing' element={Pricing} />
          {/* <Route exact path='/journal' component={Blog} /> */}
          
          <Route exact path='/journal' element={Verify} />
          <Route exact path='/contact' element={Contact} />
          <Route exact path='/signinup' element={Signinup} />
        </Switch>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<CourseHome />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  )
}

export default App
