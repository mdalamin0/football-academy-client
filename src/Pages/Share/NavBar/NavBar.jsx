import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';



const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);


    const handleLogOut = () => {
        logOutUser()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Navbar className='my-5'>
            <Navbar.Brand >
                <img
                    alt="Flowbite React Logo"
                    className=" h-10 md:h-12 "
                    src="http://shippo.imoodev.com/wp-content/uploads/2023/05/shippo-logo.png"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link

                >
                    <ActiveLink to="/">
                        Home
                    </ActiveLink>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <p>
                        Instructors
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Classes
                </Navbar.Link>
                <Navbar.Link href="#">
                    Dashboard
                </Navbar.Link>
                {user ?

                    <>
                        <Navbar.Link>
                            <button onClick={handleLogOut}>Log Out</button>
                        </Navbar.Link>
                        <img className='h-10 w-10 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />
                    </>
                    :

                    <ActiveLink to="/signUp"><button className='btn btn-primary'>Sign Up</button></ActiveLink>
                }
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavBar;