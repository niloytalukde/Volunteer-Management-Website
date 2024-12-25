import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
const location =useLocation()
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(res=>{
      console.log(location);
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full  it max-w-sm shrink-0 shadow-2xl justify-start flex mx-auto ">
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div>
            {/* Login With Google start here  */}
            <button
              onClick={loginWithGoogle}
              className="flex items-center justify-center mx-auto text-xl border p-3 rounded-md"
            >
              <span className="mr-5 text-yellow-400">
                <FaGoogle></FaGoogle>
              </span>
              Login With Google
            </button>
            {/* Login With Google End here  */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ff7f3a] text-white text-xl">
              Login
            </button>
          </div>
        </form>
        <p className=" justify-center flex pb-4">
          If You Don't Have Account Please{" "}
          <span className="text-[#ff7f3a]">
            <Link to={"/register"}>Register </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
