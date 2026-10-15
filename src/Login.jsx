
// import React, { useState } from "react";

// function Login() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");

//   return (
//     <form>
//       <h2>Login Form</h2>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="text"
//         placeholder="Enter Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <br /><br />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;


// import { useReducer } from "react";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

// function Login() {
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     email: "",
//     password: "",
//     phone: ""
//   });

//   function handleChange(e) {
//     dispatch({
//       name: e.target.name,
//       value: e.target.value
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("Login Successful!");
//     console.log(state);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login Form</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//         value={state.name}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter Email"
//         value={state.email}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Password"
//         value={state.password}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="tel"
//         name="phone"
//         placeholder="Enter Phone"
//         value={state.phone}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

import { useReducer } from "react";
import "./Login.css";

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

function Login() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  function handleChange(e) {
    dispatch({
      name: e.target.name,
      value: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome, ${state.name}!`);
    console.log(state);
  }

  return (
    <main className="">
      

      <section className="form-panel">
        <div className="login-card">
          <div className="card-brand">✦</div>
          <p className="eyebrow center"></p>
          <h2>Sign in</h2>
          <p className="subtitle">
            Enter your details to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <label>FULL NAME</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={state.name}
              onChange={handleChange}
              required
            />

            <label>EMAIL ADDRESS</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={state.email}
              onChange={handleChange}
              required
            />

            <label>PASSWORD</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={handleChange}
              required
            />

            <label>PHONE NUMBER</label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={state.phone}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Continue <span>↗</span>
            </button>
          </form>

          <p className="footer-text">
            
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
