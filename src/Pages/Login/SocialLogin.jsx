import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { createUserWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLoginWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully Sign Up',
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <p onClick={handleLoginWithGoogle}  className="border-2 px-6 py-2.5 mt-7 font-semibold rounded-md justify-center flex items-center cursor-pointer"> <img className='h-5 w-5 me-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</p>
            
        </div>
    );
};

export default SocialLogin;