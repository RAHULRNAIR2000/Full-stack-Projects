
import "../App3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import DownloadPost from "./DownloadPost";
import axios from "axios";






 



  const Part2 = () =>{

  const [src, setSrc] = useState("");
    const [employees, setEmployees] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [hometown,setHometown] =useState("");
    const [education,setEducation] =useState("");
    const [experience,setExperience] =useState("");
    const [hobby,setHobby] =useState("");
    const [contactNumber,setcontactNumber] =useState("");
    const [altProfession,setaltProfession] =useState("");
    const [quote,setQuote] =useState("");
    const [coreSkills,setcoreSkills] =useState("");
    const [ibuName,setIbuName] =useState("");
    const [managerName,setManagerName] =useState("");
  
    const {id} = useParams();
    const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
  
    const navigator = useNavigate();
  
    useEffect(() =>{
  
      if(id){
       getEmployee(id).then((response) => {
           setFirstName(response.data.firstName);
           setLastName(response.data.lastName);
           setEmail(response.data.email);
           setHometown(response.data.hometown);
           setEducation(response.data.education);
           setExperience(response.data.experience);
           setHobby(response.data.hobby);
           setcontactNumber(response.data.contactNumber);
           setaltProfession(response.data.altProfession);
           setQuote(response.data.quote);
           setcoreSkills(response.data.coreSkills);
           setIbuName(response.data.ibuName);
           setManagerName(response.data.managerName);
  
       }).catch(error => {
           console.error(error);
       })
      }  
        axios
      .get(
        `http://localhost:8080/download/${id}`,
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        let imageUrl = URL.createObjectURL(response.data);
        setSrc(imageUrl);
        console.log(response.data);
      })
      .catch((error) => {
        setSrc("");
        console.error(error);
      });
},[id]
)
  
  const handleDownloadClick = () => {
        DownloadPost({employeeName:firstName});
      }
     


  return (
    <div className="body1">
      <div className="main">
        <div className="main-menu">
          <h1>
            Assimilate<br></br>into tarento
            
          </h1>
          
          <img
            className="logo"
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
            alt=""
          />
         
        </div>

        <section className="content">
          <div className="left-content">
            <div className="activities">
              <h1>Welcome Buddy</h1>
              <div className="activity-container">
                <div className="image-container img-one">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d2c8173280025.5c0764494ebce.jpg"
                    alt="tennis"
                  />
                  <div className="overlay">
                    <h4>Hometown</h4>
                    <h3>{hometown}</h3>
                  </div>
                </div>

                <div className="image-container img-two">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-friendship-day-background-with-friends-running-outdoors_23-2149430470.jpg"
                    alt="hiking"
                  />
                  <div className="overlay">
                    <h4>In my free time,i enjoy</h4>
                    <h3> {hobby}</h3>
                  </div>
                </div>

                <div className="image-container img-three">
                  <div className="user-info">
                  <img
            src={src}
            alt={id}
            className="user-image123"
          />
                    <h4 className="ps-3">{firstName} {lastName}</h4>
                  </div>
                  <div className="overlay">
                    {/* <h4>Data engineer</h4> */}
                    <h3>{ibuName}</h3>
                  </div>
                </div>

                <div className="image-container img-four">
                  <img
                    src="https://blog.influenceandco.com/hubfs/GUEST-BLOG-How-to-Create-Engaging-Content-Experiences.png"
                    alt="cycling"
                  />
                  <div className="overlay">
                    <h4>experiance</h4>
                    <h5>{experience}</h5>
                  </div>
                </div>

                <div className="image-container img-five">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/272/094/small/happy-women-student-gratuated-from-education-background-concept-free-vector.jpg"
                    alt="yoga"
                  />
                  <div className="overlay">
                    <h4>education</h4>
                    <h3>{education}</h3>
                  </div>
                </div>

                <div className="image-container img-six">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center ps-5"><h4>{coreSkills}</h4></div>
                  </div>
                  <div className="overlay">
                    <h3>Core skills</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-bottom">
              <div className="weekly-schedule">
                <h1>Contact</h1>
                <div className="calendar">
                  <div className="day-and-activity activity-one">
                    <div className="day">
                      <h1>Email</h1>
                      <p> </p>
                    </div>
                    <div className="activity">
                      <h2>{email}</h2>
                    </div>
                  </div>

                  <div class="day-and-activity activity-two">
                    <div class="day">
                      <h1>phone</h1>
                      <p> </p>
                    </div>
                    <div class="activity">
                      <h2>{contactNumber}</h2>
                    </div>
                  </div>
                  <div class="day-and-activity activity-three">
                    <div class="day ps-5 pe-5">
                      {/* <h1>Address</h1> */}&nbsp;
                      <p> </p>&nbsp;
                    </div>
                    <div class="activity">
                    
                      <div class="participants"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="personal-bests">
                <h1>The quote that fuels me</h1>
                <div className="personal-bests-container">
                  <div className="best-item box-one">
                    <p>
                    {quote}
                    </p>
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                      alt=""
                    />
                  </div>

                  {/* <div className="best-item box-two">
                    
                    <p>If i was not in my current profession<br></br>i would have been</p> */}
                  {/* <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a" alt="" /> */}
                  {/* </div> */}
                  {/* <div className="best-item box-three">
                    <p>Longest Roller-Skating: 2 hours</p>
                    <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c" alt="" />
                  </div> */}
                </div>
                <h1>
                  If i was not in my current profession<br></br>i would have
                  been
                </h1>
                <div className="personal-bests-container">
                  <div className="best-item box-one">
                    <p>{altProfession}</p>
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="right-content">
            <div className="user-info">
              <div className="icon-container">
                <i className="fa fa-bell nav-icon"></i>
                <i className="fa fa-message nav-icon"></i>
              </div>
              <h4>Kelsey Miller</h4>
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/40b7cce2-c289-4954-9be0-938479832a9c" alt="user" />
            </div> */}

          {/* <div className="active-calories">
              <h1 style={{ alignSelf: 'flex-start' }}>Active Calories</h1>
              <div className="active-calories-container">
                <div className="box" style={{ '--i': '85%' }}>
                  <div className="circle">
                    <h2>85<small>%</small></h2>
                  </div>
                </div>
                <div className="calories-content">
                  <p><span>Today:</span> 400</p>
                  <p><span>This Week:</span> 3500</p>
                  <p><span>This Month:</span> 14000</p>
                </div>
              </div>
            </div> */}
          {/* 
            <div className="mobile-personal-bests">
              <h1>Personal Bests</h1>
              <div className="personal-bests-container"> */}
          {/* ... (Repeat the structure for each mobile personal best item) */}
          {/* </div>
            </div> */}

          {/* <div className="friends-activity">
              <h1>Friends Activity</h1>
              <div className="card-container"> */}
          {/* ... (Repeat the structure for each friend's activity card) */}
          {/* </div>
            </div>
          </div> */}
        </section>
      
      </div>
     

    </div>
  );
}

export default Part2;
