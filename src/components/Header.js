const Header = () => {
  return (
    <div
      className="bg-slate-600 w-full p-[10px] flex justify-between items-center"
      style={{ backgroundColor: "#F99B7D" }}
    >
      <div id="logo" className="relative w-48 ">
        <img
          className="w-12 h-12 "
          src="https://cdn-icons-png.flaticon.com/256/2739/2739635.png"
        />
        <h2 className="text-gray-50 text-2xl font-medium tracking-wide absolute top-2 left-2">
          Mart
          <span className="" style={{ color: "#B20600" }}>
            ians
          </span>
        </h2>
      </div>
      <div id="nav_items" className="w-96">
        <ul className="flex justify-between items-center text-white">
          <li className="flex items-center gap-1">
            <img
              className="w-5 h-5"
              src="https://cdn-icons-png.flaticon.com/256/1865/1865269.png"
            />
            <h4 className="text-lg">Location</h4>
          </li>
          <li>
            <div id="search" className="bg-white h-6  w-36 rounded-xl relative">
              <img
                className="w-4 h-4 absolute top-1 right-2"
                src="https://cdn-icons-png.flaticon.com/256/954/954591.png"
              />{" "}
            </div>
          </li>
          <li>
            <img
              className="w-8 h-7"
              src="https://cdn-icons-png.flaticon.com/256/2331/2331970.png"
            />
          </li>
          <li className="text-lg">sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
