import { useEffect, useState } from "react";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="mt-16">
            <div className="p-4 md:p-0 md:w-1/2 mx-auto text-center space-y-4">
                <h3 className="text-3xl font-bold text-center">Popular classes of our academy</h3>
                <p className="text-slate-500">EE Playmaker by England Football is our free online entry-level football course perfect for anyone interested in taking a more active role in grassroots football.
                    There are five modules in total and you don’t need any previous football experience or qualifications before signing up. In fact, all you need is an FA Number (FAN) and a laptop, tablet or mobile device. Then you’re good to go.</p>
            </div>
            <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {
                    classes.map(c => <div key={c._id}>

                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-60" src={c.image} alt="" />
                            <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class Name: {c.class_name}</h5>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Instructor Name: {c.instructor_name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Available Seat: {c.available_seats}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${c.price}</p>
                                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a> */}
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;