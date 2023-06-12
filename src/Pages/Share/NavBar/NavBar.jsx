import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import logo from '../../../../public/shippo-logo.png'

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar className="my-5">
      <Navbar.Brand>
        <img
          alt="Flowbite React Logo"
          className=" h-10 md:h-12 "
          src={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <ActiveLink to="/">Home</ActiveLink>
        </Navbar.Link>
        <Navbar.Link>
          <ActiveLink to="/instructors">Instructors</ActiveLink>
        </Navbar.Link>
        <Navbar.Link>
          <ActiveLink to="/classes">Classes</ActiveLink>
        </Navbar.Link>
        {user && (
          <Navbar.Link>
            <Link to="/dashboard">Dashboard</Link>
          </Navbar.Link>
        )}

        {user ? (
          <>
            <Navbar.Link>
              <button onClick={handleLogOut}>Log Out</button>
            </Navbar.Link>
            <img
              className="h-10 w-10 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              alt=""
            />
          </>
        ) : (
          <ActiveLink to="/login">
            <button className="btn btn-primary">Login</button>
          </ActiveLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
