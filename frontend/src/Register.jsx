import { Link } from "react-router-dom";
import "../App.css";


function Register(){

return(

<div className="auth-page">


<div className="auth-card">


<div className="auth-logo">
Commerce<span>AI</span>
</div>


<h1>Create Account</h1>


<p className="auth-sub">
Join the future of AI ecommerce
</p>



<form>


<input
type="text"
placeholder="Full Name"
/>


<input
type="email"
placeholder="Email Address"
/>


<input
type="password"
placeholder="Password"
/>


<input
type="password"
placeholder="Confirm Password"
/>



<button className="btn-primary">
Create Account
</button>


</form>



<p className="switch">

Already have account?

<Link to="/login">
Login
</Link>

</p>


</div>


</div>

)

}


export default Register;
