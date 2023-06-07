import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                setError('');
                setEmailError('')
                form.reset()
            })
            .catch(error => {
                if(error.message === 'Firebase: Error (auth/user-not-found).'){
                    setEmailError('user not found!')
                    setError('');
                    return;
                }
                if(error.message === 'Firebase: Error (auth/wrong-password).'){
                    setEmailError('')
                    setError('Your Password Wrong')
                    return
                }
            })
    }
    return (

        <div className="">
            <form onSubmit={handleLogin} className=" rounded-md shadow-md w-2/3 md:w-1/3 mx-auto mt-10 border-2 px-8 py-16">
                <h3 className="text-2xl text-center font-semibold mb-4">Please Login</h3>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <span className="text-red-600"><small>{emailError}</small></span>
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <p className="text-red-600"><small>{error}</small></p>
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover"><small>Forgot password?</small></a>
                    </label>
                </div>
                <button type="submit" className="text-white mt-7 bg-blue-700 hover:bg-blue-800  rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <div className="text-center mt-4">
                    <p>New to football academy? <Link className="text-blue-700" to="/signUP">Sign Up</Link></p>
                </div>


                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                </div>
                <SocialLogin></SocialLogin>

            </form>
        </div>

    );
};

export default Login;