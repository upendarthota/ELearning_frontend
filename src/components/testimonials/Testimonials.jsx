import React from "react";
import "./testimonials.css";
import profileImage from "/src/assets/uppi.jpg";
import sainikhil from "/src/assets/sainikhil.jpeg";
import johnny from "/src/assets/jhonny.jpeg";
import chandu from "/src/assets/chandu.jpeg";

// D:\VIII SEM Major Project\Mern-Elearning-main\frontend\src\assets\uppi.jpeg

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Upendar Thota",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
    //   image:
    //     "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    image:profileImage,
     },
    {
      id: 2,
      name: "Sai Nikhil Marka",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:sainikhil,
    },
    {
      id: 3,
      name: "Chandu Podila",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image: chandu,
        },
    {
      id: 4,
      name: "Jhonny",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image: johnny,
     },   
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
        <div className="testmonials-cards">
        {testimonialsData.map((e) => (
           <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
       </div>
 
    </section>
  );
};

export default Testimonials;
