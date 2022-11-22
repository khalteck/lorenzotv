const Form = () => {
  return (
    <div className="w-full">
      <form>
        <div className="flex gap-5">
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          />
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          />
        </div>
        <div className="flex gap-5 mt-8">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          />
          <input
            type="number"
            id="Phone"
            placeholder="Phone number"
            className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          />
        </div>
        <textarea
          id="message"
          placeholder="Enter your message here"
          className="w-full h-[150px] pt-5 px-5 mt-8 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
          required
        ></textarea>
        <button className="w-full py-5 mt-8 bg-red-600 rounded-lg hover:translate-y-[6px] transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
