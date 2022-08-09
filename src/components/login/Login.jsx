import "./login.css"


const Login=()=>{
   
  return (
   
     
    <div className="login">
        <form >
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-fields"
              placeholder="Enter email"
             
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input-fields"
              placeholder="Enter password"
             
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          
        </form>
       
    </div>

        
       
          
      
        
       
   
    )
  }


  
;
export default Login;
