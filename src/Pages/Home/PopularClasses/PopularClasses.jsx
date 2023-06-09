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
            <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    classes.map(c => <div key={c._id}>

                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-60" src={c.image} alt="" />
                            <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class Name: {c.class_name}</h5>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Instructor Name: {c.instructor_name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Available Seat: {c.available_seats}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${c.price}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Enroll: {c.total_enrole}</p>
                              
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;