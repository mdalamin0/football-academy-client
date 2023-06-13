const AcademyAbout = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center my-12">About Our Academy--</h3>
      <div className="md:flex my-20 items-center">
      <div className="md:w-1/2 p-8 space-y-6">
        <h3 className="text-4xl font-bold leading-tight">WELCOME TO BEST <br /> FOOTBALL ACADEMY</h3>
        <p>EE Playmaker by England Football is our free online entry-level football course perfect for anyone interested in taking a more active role in grassroots football. There are five modules in total and you don’t need any previous football experience or qualifications before signing up. In fact, all you need is an FA Number (FAN) and a laptop, tablet or mobile device. Then you’re good to go.</p>
        <button className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-md text-white font-bold">Learn More</button>
      </div>
      <div className="md:w-1/2 p-8 md:p-0">
        <img className="w-full rounded-md "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrHTe-PeMRluhKF-Z8s7mDgHbWLJJiQv_7A&usqp=CAU"
          alt=""
        />
      </div>
    </div>
    
    </div>
  );
};

export default AcademyAbout;
