let img = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729086658/download_app_dark_hae6bf.webp";

const Ad = () => {
  return (
    <div className="flex justify-center items-center rounded-3xl bg-slate-400 h-[500px] w-[80%] mx-auto p-2 m-10 ">
      <img src={img} className=" w-full m-10 h-full object-cover rounded-3xl" alt="Advertisement" /> 
    </div>
  );
}

export default Ad;
