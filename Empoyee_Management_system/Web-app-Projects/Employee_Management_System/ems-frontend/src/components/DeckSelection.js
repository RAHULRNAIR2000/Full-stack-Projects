import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../DeckSelection.css";
import microsoftTeamsImage from '../images/MicrosoftTeams-image-transformed.jpeg';
import template2 from '../images/template2.png';
import { useNavigate } from "react-router-dom";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";



const DeckSelection = () => {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    function welcomeEmployee(id) {
        navigator(`/part1/${id}`);
      }


  return (
    <div className="template-chooser-container">
      <h1>Choose Your Template</h1>
      <div className="template-images-container">
     
          {/* <img src={microsoftTeamsImage}  alt="Template 1" width="300" height="200" onClick={() => welcomeEmployee(employee.id)} /> */}
        
   
          <img src={template2} alt="Template 2" width="300" height="200" />
        
      
          <img src="https://w3layouts.com/wp-content/uploads/2023/12/Shipper-a-transportation-category-website-template-350x219.jpg" alt="Template 3" width="300" height="200" />
        
      </div>
    </div>
  );
};

export default DeckSelection;
