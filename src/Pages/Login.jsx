import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [regno, setRegno] = useState(2021239000);
  let navigateTo = useNavigate();

  const handleSubmit = (e) => {
    navigateTo("/profile", { state: { regno: regno } });
    navigateTo("/dashboard", { state: { regno: regno } });
  };
  return (
    <div className="body">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Register Number : </label>
          <input
            type=""
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
// return (
//   <div className="body">
//     <div className="container">
//       <h2 className="login-font">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-cont">
//           <label>Register Number : </label>
//           <input
//             type=""
//             required
//             value={regno}
//             min="2000000000"
//             max="2040000000"
//             onChange={(e) => setRegno(e.target.value)}
//           />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   </div>
// );

//  onSubmit={() =>
//           navigateTo("/dashboard", { state: { regno: regno } })
//         }
