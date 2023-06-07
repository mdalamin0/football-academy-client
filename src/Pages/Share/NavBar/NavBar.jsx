import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';



const NavBar = () => {
    const { user } = useContext(AuthContext);

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
                    <Link to="/">
                        Home
                    </Link>
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
                    <Navbar.Link>
                        <img title={user?.displayName} src={user?.photoURL} alt="" />
                    </Navbar.Link> :
                    <Navbar.Link >
                        <Link to="/login"><button className='btn btn-primary'>Login</button></Link>
                    </Navbar.Link>
                }
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavBar;