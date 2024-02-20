import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "../App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./App2.module.css";
import Tooltip from "@material-ui/core/Tooltip";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// import { Button } from "bootstrap";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function welcomeEmployee1(id) {
    navigator(`/part1/${id}`);
  }
  function welcomeEmployee2(id) {
    navigator(`/part2/${id}`);
  }
  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  return (
    <div className="body12">
      <nav className="navbar">
        <a className="navbar-brand easeIn" href="#">
          <div className="icon-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuYQ5iU97JGmisYhnzD5Z_uKT8taGRd9umhfOwHQxmdd-n1_J3lKSLEJ1v-cpv5CfSm0&usqp=CAU"
              alt=""
            />
          </div>
          <span className="name">Tarento</span>
        </a>

        <div className="navbar-footer">
          <img
            className="image-documents easeIn"
            src="https://ozcanzaferayan.github.io/financial-crm/img/documents.svg"
            alt="documents"
          />
          <div className="container">
            <a href="#" download className="easeIn" onClick={addNewEmployee}>
              Add new employee
            </a>
          </div>
        </div>
      </nav>
      <main>
        <header>
          <section role="search">
            <form action="#" method="get">
              <div className="form-inline">
                <img className="icon search" alt="" />
                <input type="search" placeholder="Search" />
              </div>
            </form>
          </section>

          {/* <section role="application">
        <button className="change-view">
          <img className="icon layout" alt="" />
          Change view
        </button>
        <button className="notification">
          <img className="icon notification" alt="" />
        </button>
        <button className="menu">
          <img className="icon menu" alt="" />
        </button>
      </section> */}
        </header>
        <h1 className="font-weight-bold easeIn">Employee Management</h1>

        <div className="cards fadeIn">
          {employees.map((employee) => (
            <section role="credit-card" className="card">
              {/* <div className="row">
           
              <div key={employee.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{`Employee ID: ${employee.id}`}</p>
                    <p className="card-text">{`Email: ${employee.email}`}</p>

                
                  </div>
                </div>
              </div>
            
          </div> */}

              <div className="top">
                <img
                  src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                  alt=""
                />
                {/* <img
            src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
            className="apple_pay"
            alt=""
          /> */}
              </div>
              <div className="ccNumber">
                <span>{`${employee.firstName} ${employee.lastName}`}</span>
              </div>
              <div className="ccBottom">
                <div className="ccValidThru">
                  <label>{`${employee.id}`}</label>
                  <span>{`${employee.ibuName}`}</span>
                </div>
                <div className="ccCardHolder">
                  <span className="box">
                    <div className="button-wrapper">
                      <Tooltip title="update Employee">
                        <button
                          className="effect_1"
                          onClick={() => updateEmployee(employee.id)}
                        >
                          <i className="fa fa-pencil-square"></i>
                        </button>
                      </Tooltip>
                    </div>

                    <div className="button-wrapper">
                      <Tooltip title="Delete">
                        <button
                          className="effect_1"
                          onClick={() => removeEmployee(employee.id)}
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </Tooltip>
                    </div>
                    <div className="button-wrapper">
                      {/* <Tooltip title="welcome deck">
                        <button
                          className="effect_1"
                          onClick={() => welcomeEmployee1(employee.id)}
                        >
                          <i className="fa fa-id-card-o"></i>
                        </button>
                      </Tooltip> */}

                      <div className="dropdown">
                        <button
                          className="dropbtn"
                          onClick={() => welcomeEmployee1(employee.id)}
                        >
                          <i className="fa fa-id-card-o"></i>
                        </button>
                        <div className="dropdown-content">
                          <button onClick={() => welcomeEmployee1(employee.id)}>
                            Template 1
                          </button>
                          <button onClick={() => welcomeEmployee2(employee.id)}>
                            Template 2
                          </button>
                        </div>
                      </div>

                      {/* <button
                        className="effect_1"
                        // variant="contained"
                        // color="primary"
                        onClick={handleClick}
                      >
                        <i className="fa fa-id-card-o"></i>
                      </button>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={() => {
                            welcomeEmployee1(employee.id);
                            console.log(employee.id);
                          }}
                        >
                          Template 1
                        </MenuItem>
                        <MenuItem onClick={() => welcomeEmployee2(employee.id)}>
                          Template 2
                        </MenuItem>
                      </Menu> */}
                    </div>
                    <div></div>
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListEmployeeComponent;
