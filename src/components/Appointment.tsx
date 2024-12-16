const Appointment = () => {
  return (
    <div className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-semibold">Book An Appointment</h1>
          <p className="text-lg pt-6 pb-12">
            SmileUp is a modern dental clinic dedicated to providing exceptional
            care in a relaxing environment.
          </p>
          <div className="space-y-6">
            <input
              placeholder="Name"
              type="text"
              className="bg-[#F5F5F5] p-4 w-full rounded-md"
            />
            <input
              placeholder="Email"
              type="email"
              className="bg-[#F5F5F5] p-4 w-full rounded-md"
            />
            <input
              placeholder="Message"
              type="text"
              className="bg-[#F5F5F5] p-4 w-full rounded-md"
            />
            <button className="bg-[#48CFCB] text-white w-full px-8 py-4 rounded-md text-xl font-medium">
              Appointment
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-[20px] w-full h-auto"
            src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dental Clinic"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
