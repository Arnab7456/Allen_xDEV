let img = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729086658/download_app_dark_hae6bf.webp";

const Ad = () => {
  return (
    <div className="text-4xl p-10 text-slate-800">
      <div className="m-10">Download our Official App .....</div>
      <div className="rounded-3xl bg-slate-400 h-[500px] w-[80%] mx-auto p-10"> 
        <img src={img} className="w-full h-full object-cover rounded-3xl" alt="Advertisement" />
      </div>
    </div>
  );
}

export default Ad;
