import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [confirmError, setConfirmError] = useState('');

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.confirm !== data.password){
                setConfirmError('password not match')
            return
        }
        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            setConfirmError('')
            reset()
        })
        .catch(error => {
            console.log(error.message)
        })
        console.log(data.confirm)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" rounded-md shadow-md w-2/3 md:w-1/3 mx-auto my-10 border-2 px-8 py-10 ">
            <h3 className="text-2xl text-center font-semibold mb-4">Please Sign Up</h3>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("name", { required: true })} />
                {errors.name && <span className="text-red-600"><small>Name is required</small></span>}
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("email", { required: true })} />
                {errors.email && <span className="text-red-600"><small>Email is required</small></span>}
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password", { required: true, minLength: 6 })} />
                {errors.password?.type === 'required' && <p className="text-red-600"><small>Password is required</small></p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600"><small>Password must be 6 characters long</small></p>}
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover"><small>Forgot password?</small></a>
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="confirm" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("confirm", { required: true })} />
                <span className="text-red-600"><small>{confirmError}</small></span>
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phot Url</label>
            </div>
            <button type="submit" className="text-white mt-7 bg-blue-700 hover:bg-blue-800  rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            <div className="text-center mt-4">
                <p>Already have an account? <Link className="text-blue-700" to="/login">Login</Link></p>
            </div>


            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <SocialLogin></SocialLogin>

        </form>
    );
};

export default SignUp;
