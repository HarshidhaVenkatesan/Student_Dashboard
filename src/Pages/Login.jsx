import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [regno, setRegno] = useState(2021239000);
  let navigateTo = useNavigate();

  const handleSubmit = () => {
    navigateTo("/dashboard", { state: { regno: regno } });
  };
  return (
    <div className="body">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Register Number : </label>
          <input
            required
            value={regno}
            min="2000000000"
            max="2040000000"
            onChange={(e) => setRegno(e.target.value)}
          />
          <div className="button-cont">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;