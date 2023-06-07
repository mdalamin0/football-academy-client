import { Navbar } from 'flowbite-react';



const NavBar = () => {

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
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p>
                            About
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
                
            </Navbar>
    );
};

export default NavBar;