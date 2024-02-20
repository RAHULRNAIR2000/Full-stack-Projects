import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import DownloadPost from "./DownloadPost";
import home from "../images/firstmage.png";
import second from "../images/secondimage.png";
import third from "../images/thirdimage.png";
import fourth from "../images/fourthimage.png";
import fifth from "../images/fifthimage.png";
import sixth from "../images/sixthimage.png";
import seventh from "../images/seventhimage.png";
import eigth from "../images/eighthimage.png";
import nineth from "../images/ninethimage.png";
import tenth from "../images/tenthimage.png";
import axios from "axios";



const Part1 = () => {

 
  const [src, setSrc] = useState("");
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
      console.log(id)
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
    <div className="container-fluid" id="post-template">
      <div className="row1">
        <div className="Hometown" id="smallcontainers">
          <img
            src={home}
            alt="hometownimage"
            className="hometown-image"
          />
          Hometown
        </div>
        <div className="education" id="smallcontainers">
          Education
          <img
            src={second}
            alt="educationimage"
            className="education-image"
          />
        </div>
        <div className="experiance" id="smallcontainers">
          Experience
          <img
            src={third}
            alt="experianceimage"
            className="experiance-image"
          />
        </div>
        <div className="enjoy" id="smallcontainers">
          In my free time,i enjoy
          <img
            src={fourth}
            alt="enjoyimage"
            className="enjoyment-image"
          />
        </div>
         
      </div>
      <div className="row2">
        <div className="additional1" id="answers">
          {hometown}
        </div>
        <div className="additional2" id="answers">
          {education}
        </div>
        <div className="additional3" id="answers">
          {experience}
        </div>
        <div className="additional4" id="answers">
          {hobby}
        </div>
      </div>
      <div className="container1 row3">
        <div className="first-div">
        <img
            src={fifth}
            alt="profile"
            className="profile-image"
          />
            <img
            src={src}
            alt={id}
            className="user-image"
          />
          <div className="me-1"><h3>{firstName} {lastName}</h3></div>
          <div className="vertical1"></div>
          <div className="vertical2"></div>
          <div><h4>Manager:{managerName}</h4>
          <div><h4>IBU :{ibuName}</h4></div>
          <div><h4>core skills: {coreSkills}</h4></div>
          </div>
          
        </div>
        <div className="second-div">
        <img
            src={seventh}
            alt="contact"
            className="contact-image"
          />
          <div id="smallcontainers2">i can be reached at</div>
          <div id="smallcontainers3">
            <p>
              {email}<br></br>{contactNumber}
            </p>
          </div>
        </div>
      </div>

      <div className="container1  row4">
        <div className="first-div1">The quote that fuels me
        <img
            src={eigth}
            alt="contact"
            className="quote-image"
          />
        </div>
        <div className="second-div2" id="smallcontainers1">
          If i wasn't in my current profession,<br></br>i would have been
        </div>
      </div>
      <div className="container1 row5">
        <div className="first-div11">
          {quote}
          <img
            src={nineth}
            alt="contact"
            className="hobby-image"
          />
          <img
            src={tenth}
            alt="logo"
            className="logo-image"
          />
          
        </div>
        <div className="second-div22">{altProfession}</div>

      </div>
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='bg-primary rounded text-white' onClick={handleDownloadClick}><i className="fa fa-download"></i></button>

      </div>

    </div>
  );
}

export default Part1;
