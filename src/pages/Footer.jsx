const about = ["About us", "Blog", "News", "MyExam EduBlogs", "Privacy policy", "Public notice", "Careers"]
const helpAndSupport = [
    "Refund policy",
    "Transfer policy",
    "Terms & Conditions",
    "Contact us"
];
const popularGoals = [
    "NEET UG",
    "JEE Advanced",
    "6th to 10th"
];
const courses = [
    "Ultimate Program",
    "Distance Learning",
    "Online Test Series"
];
const centers = [
    "Kota",
    "Bangalore",
    "Indore",
    "Delhi",
    "More centres"
];
const examInformation = [
    "JEE Main",
    "JEE Advanced",
    "NEET UG",
    "Class 10",
    "Class 12",
    "Olympiad Exam",
    "NEET Online Test Series",
    "JEE Online Test Series",
    "JEE Main Online Test Series"
];
function Footer() {
  return (
    <div className="bg-[#0f1825] text-white">
      <div className="flex flex-col md:flex-row gap-7 px-7 py-6 justify-center m-4">
        
        {/* About Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">About</div>
          <div>
            {about.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        {/* Help & Support Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Help & Support</div>
          <div>
            {helpAndSupport.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Goals Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Popular Goals</div>
          <div>
            {popularGoals.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Courses</div>
          <div>
            {courses.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        {/* Centers Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Centers</div>
          <div>
            {centers.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Information Section */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Exam Information</div>
          <div>
            {examInformation.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
