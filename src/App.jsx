// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
    return (
        <div className="App">
            <ForgotPassword />
            <ResetPassword />
            <Register />
            <Login />
        </div>
        
    );
};

export default App;