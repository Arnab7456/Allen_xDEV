import { TiArrowRight } from "react-icons/ti";

const Programs = () => {
    let pic1 = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp"; 
    let pic2 = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp";
    let pic3 = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081870/200_grade_6_10_lakdfs.webp";

    return (
        <div className="flex flex-col items-center py-10">
            <h1 className='font-bold  font-serif text-4xl mb-6'>Discover the perfect online program</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-10'>
                <div className='shadow-lg  bg-slate-300 rounded-lg flex flex-col items-center p-4 cursor-pointer'>
                    <img className='w-60 h-auto mb-4' src={pic1} alt="JEE" />
                    <h2 className='text-2xl font-bold '>JEE</h2>
                    <button className='flex font-bold items-center gap-2  bg-slate-50 p-1.5 rounded-lg text-blue-700 mt-2'>View<TiArrowRight size={"20px"} /></button>
                </div>
                <div className='shadow-lg rounded-lg bg-slate-300  flex flex-col items-center p-4 cursor-pointer'>
                    <img className='w-60 h-auto mb-4' src={pic2} alt="NEET" />
                    <h2 className='text-2xl font-bold'>NEET</h2>
                    <button className='flex font-bold items-center gap-2  bg-slate-50 p-1.5 rounded-lg text-blue-700 mt-2'>View<TiArrowRight size={"20px"} /></button>
                </div>
                <div className='shadow-lg rounded-lg bg-slate-300   flex flex-col items-center p-4 cursor-pointer'>
                    <img className='w-60 h-auto mb-4' src={pic3} alt="Grade 6-10" />
                    <h2 className='text-2xl font-bold'>Grade 6-10</h2>
                    <button className='flex font-bold items-center gap-2  bg-slate-50 p-1.5 rounded-lg text-blue-700 mt-2'>View<TiArrowRight size={"20px"} /></button>
                </div>
            </div>
        </div>
    );
}

export default Programs;
