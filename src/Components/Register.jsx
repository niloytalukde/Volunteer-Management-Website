import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext)
  const handelSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name =form.name.value
    const email = form.email.value;
    const photo =form.photo.value
    const password = form.password.value;

    // Register User 
createUser(email,password)
.then(res=>{
   console.log( res.user);
   toast.success('Registration Successful')
   form.reset()
})

// Update user profile 
updateUserProfile(name,photo)

  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full  it max-w-xl shrink-0 shadow-2xl justify-start flex mx-auto ">
        <form onSubmit={handelSubmit} className="card-body">
          <h1 className="flex justify-center text-2xl font-bold">
            Register Now!
          </h1>
          {/* Name field start here */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Name field End here */}

          {/* Email field start here */}
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
          {/* Email field End here */}

          {/* Photo Url field start here */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo Url field End here */}

          {/* Password field start here */}
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
          {/* Password field End here */}
          <div></div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ff7f3a] text-white text-xl">
              Register
            </button>
          </div>
        </form>
        <p className=" justify-center flex pb-4">
          Already You Have Account Please{" "}
          <span className="text-[#ff7f3a]">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
