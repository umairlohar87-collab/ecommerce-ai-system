import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          Commerce<span>AI</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-sub">
          Login to manage your AI shopping experience
        </p>


        <form>

          <input
            type="email"
            placeholder="Email Address"
          />


          <input
            type="password"
            placeholder="Password"
          />


          <button className="btn-primary">
            Login
          </button>

        </form>


        <div className="forgot">
          <a href="#">
            Forgot Password?
          </a>
        </div>


        <p className="switch">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>


      </div>

    </div>
  );
}

export default Login;
