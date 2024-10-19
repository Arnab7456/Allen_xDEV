const AboutUs = ["About us", "Blog", "News", "MyExam EduBlogs", "Privacy policy", "Public notice", "Careers"]
const help_Support = [
    "Refund policy",
    "Transfer policy",
    "Terms & Conditions",
    "Contact us"
];
const popular_Goals = [
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
const exam_Information = [
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
            {AboutUs.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold">Help & Support</div>
          <div>
            {help_Support.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold">Popular Goals</div>
          <div>
            {popular_Goals.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

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

        <div className="flex flex-col gap-2">
          <div className="font-semibold">Exam Information</div>
          <div>
            {exam_Information.map((item, index) => (
              <div key={index}>
                <li className="list-none mb-2 text-[#bbc2d1]">{item}</li>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-start items-start m-1 p-5">
      ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
