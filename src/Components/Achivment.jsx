const Achievement = () => {
    return (
      <div className="flex flex-col justify-center items-center m-10 p-10">
        <h1 className="font-serif font-bold text-4xl text-slate-800 mb-8">
          Our Remarkable Results in 2024
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">ALLEN Online Program JEE(ADV). 2024 Results </div>
              <p className="text-gray-700 text-base">
              14 students have made it to the top 500 AIR.
              </p>
            </div>
          </div>
          
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">ALLEN Online Program NEET (UG) 2024 Results</div>
              <p className="text-gray-700 text-base">
              24 students have scored 700+.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Achievement;
  