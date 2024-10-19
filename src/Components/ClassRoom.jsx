let img = "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp";

const ClassRoom = () => {
    return (
        <div className="p-5">
            <div className='text-4xl m-5 p-5'>Looking for a classroom-based program?</div>
            <div className='mx-auto flex items-center justify-between w-full max-w-[1000px] h-[200px] rounded-xl shadow-xl p-4 bg-slate-400'>
                <div className='flex flex-col gap-4 px-5'>
                    <div className='text-2xl font-semibold flex flex-col gap-2'>
                        <span>Present in 53 cities with</span>
                        <span>250+ classrooms</span>
                    </div>
                    <div className='bg-slate-500 text-slate-200 font-bold rounded-xl w-fit px-6 py-3 cursor-pointer transition hover:bg-blue-500'>
                        Find a Centre
                    </div>
                </div>
                <div>
                    <img width={"300px"} src={img} alt="Classroom" className="rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default ClassRoom;
