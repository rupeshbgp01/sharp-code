import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Team from "./components/internship/Team"
import Faq from "./components/faq/Faq"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import { Toaster } from 'react-hot-toast';
import SignUp from "./components/Forms/SignUp"
import Login from "./components/Forms/Login"
import Profile from "./components/Profile/Profile"
import Submission from "./components/Forms/submission"
import Update from "./components/Forms/Update"
import TermandCondition from "./components/common/termandcondition"
import Privacy from "./components/common/privacy"
import AboutCardHome from "./components/about/aboutcardhome"
import CodeOfConduct from "./components/common/codeofcoduct"
import SubmissionForm from "./components/Forms/registration"
function App() {
  return (
    <div className="router__container">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/abouthome' element={<AboutCardHome />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path="/registration" element={<SubmissionForm />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/submission" element={<Submission />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/termandcondition" element={<TermandCondition />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/codeofconduct" element={<CodeOfConduct />} />
        </Routes>
        <Footer/>
      </Router>
      <Toaster />
    </div>
  )
}

export default App
