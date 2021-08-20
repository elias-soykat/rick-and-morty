import "./NavBar.css";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "antd/dist/antd.css";
import { Input } from "antd";
import {
  SearchOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function NavBar({ data }) {
  const freshData = data?.characters.results;
  const [searchData, setSearchData] = useState([]);

  const searchInfoHandler = (e) => {
    const searchWord = e.target.value;
    const newFilter = freshData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchData(newFilter);
  };

  return (
    <div>
      <Navbar bg="dark" className="py-3" expand="lg">
        <Container className="nav-container">
          <div style={{ width: "50%" }}>
            <Navbar.Brand href="/" className="">
              <img src={logo} width="30%" alt="" />
            </Navbar.Brand>
          </div>
          <div className="w-25 searchInputBox">
            <Input
              onChange={searchInfoHandler}
              placeholder="Search Character"
              prefix={<SearchOutlined />}
            />
            {searchData.length >= 20 ||
              (searchData.length !== 0 && (
                <div className="searchBar pt-2">
                  {searchData.map((characterName) => (
                    <p key={characterName.name}>
                      <a
                        target="_blank"
                        href="https://rickandmortyapi.com/"
                        rel="noreferrer"
                        className="text-dark"
                      >
                        {characterName.name}
                      </a>
                    </p>
                  ))}
                </div>
              ))}
          </div>

          <Navbar.Toggle
            className="bg-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-end">
              <Nav.Link target="_blank" href="https://github.com/elias-soykat">
                <GithubOutlined className="bg-light text-dark rounded-circle p-2 me-2" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.facebook.com/elias.soykat7/"
              >
                <FacebookOutlined className="bg-light text-dark rounded-circle p-2 me-2" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/elias-soykat/"
              >
                <LinkedinOutlined className="bg-light text-dark rounded-circle p-2 me-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
