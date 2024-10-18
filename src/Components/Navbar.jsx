import { useState } from 'react';
import { PiPhoneCallBold } from 'react-icons/pi';
import logo from '../assets/allen.png';
import { MdKeyboardArrowRight, MdMenu, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [subdropdown, setSubDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleMouseEnter(menu) {
    setDropdown(menu);
  }

  function handleMouseLeave() {
    setDropdown(null);
    setSubDropdown(null);
  }

  function subHandleMouseEnter(subMenu) {
    setSubDropdown(subMenu);
  }

  function subHandleMouseLeave() {
    setSubDropdown(null);
  }

  return (
    <div className="cursor-pointer">
      <div className="flex justify-between px-6 py-7 mt-2 items-center relative">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate('/')}
            src={logo}
            width="100px"
            alt="logo"
            className="cursor-pointer"
          />
        </div>

        {/* Mobile view: Show Contact Us and Menu button */}
        <div className="lg:hidden flex items-center">
          <div className="flex items-center mr-4">
            <PiPhoneCallBold className="text-lg mr-1" />
            <span>Contact Us</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-3xl focus:outline-none"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop view: Main nav items */}
        <div className="hidden lg:flex justify-evenly gap-6 font-semibold">
  {/* Exams */}
  <div
    onMouseEnter={() => handleMouseEnter('Exams')}
    onMouseLeave={handleMouseLeave}
    className="relative"
  >
    Exams
    {dropdown === 'Exams' && (
      <div className="absolute mt-2 p-3 space-y-2 bg-white rounded-lg">
        
        {/* NEET Section */}
        <div
          className="flex justify-between items-center p-2 rounded-md"
          onMouseEnter={() => subHandleMouseEnter('NEET')}
          onMouseLeave={subHandleMouseLeave}
        >
          <div>
            NEET
            {subdropdown === 'NEET' && (
              <div className="absolute left-full top-0 w-[180px] py-3 bg-white rounded-lg space-y-3">
                <div
                  className="p-2 rounded-md"
                  onClick={() => navigate('neet/online-coaching-class-11')}
                >
                  Class 11th
                </div>
                <div className="p-2 rounded-md">Class 12th</div>
                <div className="p-2 rounded-md">Class 12th plus</div>
              </div>
            )}
          </div>
        </div>

        {/* JEE Section */}
        <div
          className="flex justify-between items-center p-2 rounded-md"
          onMouseEnter={() => subHandleMouseEnter('JEE')}
          onMouseLeave={subHandleMouseLeave}
        >
          <div>
            JEE
            {subdropdown === 'JEE' && (
              <div className="absolute left-full top-0 w-[180px] py-3 bg-white rounded-lg space-y-3">
                <div
                  className="p-2 rounded-md"
                  onClick={() => navigate('jee/online-coaching-class-11')}
                >
                  Class 11th
                </div>
                <div className="p-2 rounded-md">Class 12th</div>
                <div className="p-2 rounded-md">Class 12th plus</div>
              </div>
            )}
          </div>
        </div>

        {/* Class 6-10 Section */}
        <div
          className="flex justify-between items-center p-2 rounded-md"
          onMouseEnter={() => subHandleMouseEnter('class610')}
          onMouseLeave={subHandleMouseLeave}
        >
          <div>
            Class 6-10
            {subdropdown === 'class610' && (
              <div className="absolute left-full top-0 w-[180px] py-3 bg-white rounded-lg space-y-3">
                <div className="p-2 rounded-md">Class 6th</div>
                <div className="p-2 rounded-md">Class 7th</div>
                <div className="p-2 rounded-md">Class 8th</div>
                <div className="p-2 rounded-md">Class 9th</div>
                <div className="p-2 rounded-md">Class 10th</div>
              </div>
            )}
          </div>
        </div>

      </div>
    )}
  </div>


          {/* Programs */}
          <div
            onMouseEnter={() => handleMouseEnter('Programs')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            Programs
            {dropdown === 'Programs' && (
              <div className="absolute mt-2 p-3 space-y-2 bg-white rounded-lg">
                <div
                  className="p-2 rounded-md"
                  onClick={() => navigate('/ultimate-program-live-courses')}
                >
                  Online Programs
                </div>
                <div className="p-2 rounded-md">Classroom Programs</div>
                <div className="p-2 rounded-md">Distance Learning</div>
              </div>
            )}
          </div>

          {/* Scholarships */}
          <div
            onMouseEnter={() => handleMouseEnter('Scholarships')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            Scholarships
            {dropdown === 'Scholarships' && (
              <div className="absolute mt-2 p-3 space-y-2 bg-white rounded-lg">
                <div
                  className="p-1 rounded-md"
                  onClick={() => navigate('adsat-register')}
                >
                  ADSAT
                </div>
                <div className="p-1 rounded-md">TALLENTEX</div>
              </div>
            )}
          </div>

          {/* Test Series */}
          <div
            onMouseEnter={() => handleMouseEnter('TestSeries')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            Test Series
            <span className="relative bottom-3 right-2 bg-[#febf1c] text-black rounded-lg m-1 px-2 text-sm font-semibold">
              New
            </span>
            {dropdown === 'TestSeries' && (
              <div className="absolute mt-2 p-3 space-y-2 bg-white rounded-lg">
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>NEET</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>JEE (MAIN + ADVANCE)</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>JEE Main</div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            )}
          </div>

          {/* Study Materials */}
          <div
            onMouseEnter={() => handleMouseEnter('StudyMaterials')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            Study Materials
            {dropdown === 'StudyMaterials' && (
              <div className="absolute mt-2 p-3 space-y-2 bg-white rounded-lg">
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>JEE MAIN</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>JEE Advanced</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>NEET</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>NCERT Solutions</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>CBSE</div>
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex justify-between items-center p-2 rounded-md">
                  <div>Olympiad</div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop view: Contact Us and Login */}
        <div className="hidden lg:flex justify-evenly gap-6">
          <div className="px-5 py-2 text-black bg-white border rounded-full flex gap-2 items-center">
            <PiPhoneCallBold size={'20px'} className="icon-red" style={{ backgroundColor: 'white' }} />
            Talk to us
          </div>
          <div className="px-4 py-2 border rounded-full">Login</div>
        </div>
      </div>

      {/* Mobile Menu: Display menu when open */}
      {menuOpen && (
  <div className="lg:hidden mt-2 space-y-2 bg-white p-4 rounded-lg shadow-lg">
    {/* Exams */}
    <div className="p-2 rounded-md" onClick={() => setDropdown(dropdown === 'Exams' ? null : 'Exams')}>
      Exams
      {dropdown === 'Exams' && (
        <div className="pl-4 mt-2 space-y-1">
          <div onClick={() => navigate('/neet/online-coaching-class-11')}>NEET</div>
          <div onClick={() => navigate('/jee/online-coaching-class-11')}>JEE</div>
          <div onClick={() => navigate('/class-6-10/online-coaching')}>Class 6-10</div>
        </div>
      )}
    </div>

    {/* Programs */}
    <div className="p-2 rounded-md" onClick={() => setDropdown(dropdown === 'Programs' ? null : 'Programs')}>
      Programs
      {dropdown === 'Programs' && (
        <div className="pl-4 mt-2 space-y-1">
          <div>Online Programs</div>
          <div>Classroom Programs</div>
          <div>Distance Learning</div>
        </div>
      )}
    </div>

    {/* Scholarships */}
    <div className="p-2 rounded-md" onClick={() => setDropdown(dropdown === 'Scholarships' ? null : 'Scholarships')}>
      Scholarships
      {dropdown === 'Scholarships' && (
        <div className="pl-4 mt-2 space-y-1">
          <div>ADSAT</div>
          <div>TALLENTEX</div>
        </div>
      )}
    </div>

    {/* Test Series */}
    <div className="p-2 rounded-md" onClick={() => setDropdown(dropdown === 'TestSeries' ? null : 'TestSeries')}>
      Test Series
      <span className="bg-[#febf1c] text-black rounded-lg m-1 px-2 text-sm font-semibold">New</span>
      {dropdown === 'TestSeries' && (
        <div className="pl-4 mt-2 space-y-1">
          <div>NEET</div>
          <div>JEE (MAIN + ADVANCE)</div>
          <div>JEE Main</div>
        </div>
      )}
    </div>

    {/* Study Materials */}
    <div className="p-2 rounded-md" onClick={() => setDropdown(dropdown === 'StudyMaterials' ? null : 'StudyMaterials')}>
      Study Materials
      {dropdown === 'StudyMaterials' && (
        <div className="pl-4 mt-2 space-y-1">
          <div>JEE MAIN</div>
          <div>JEE Advanced</div>
          <div>NEET</div>
          <div>NCERT Solutions</div>
          <div>CBSE</div>
          <div>Olympiad</div>
        </div>
      )}
    </div>
  </div>
)}


    </div>
  );
}

export default Navbar;
