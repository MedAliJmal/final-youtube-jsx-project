import React from "react";
import {
  AiOutlineBell,
  AiOutlineVideoCameraAdd,
  AiOutlineDollarCircle,
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlineLike,
  AiOutlineSearch,
} from "react-icons/ai";
import { GrApps } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { SiYoutubestudio } from "react-icons/si";
import {
  MdOutlineSwitchAccount,
  MdOutlineDarkMode,
  MdOutlineKeyboardAlt,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
} from "react-icons/md";
import { GiExitDoor } from "react-icons/gi";
import { IoLanguage, IoEarth } from "react-icons/io5";
import { RiShieldUserLine, RiVideoLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bignav">
      <Container fluid>
        <div className="yt-menu">
          <header>
            <label for="mycheckbox" className="menu-toggler">
              <i className="fas fa-bars"></i>
            </label>
            <input type="checkbox" id="mycheckbox" />
            <p></p>
            <nav className="main-nav">
              <ul>
                <li className="nav-item">
                  <img
                    style={{
                      width: "110px",
                      marginLeft: "50px",
                      marginTop: "15px",
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="Youtube"
                  />
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    <AiOutlineHome />
                    Accueil
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    <MdOutlineExplore />
                    Explorer
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    <MdOutlineSubscriptions />
                    Abonnements
                  </p>
                </li>
                <NavDropdown.Divider />
                <li className="nav-item">
                  <p className="nav-link">
                    <MdOutlineVideoLibrary />
                    Bibliothéque
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    {" "}
                    <MdHistory /> Historique
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    {" "}
                    <RiVideoLine />
                    Vos vidéos
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    {" "}
                    <AiOutlineClockCircle />A regarder plus tard
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">
                    <AiOutlineLike />
                    Video "J'aime"
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">▼ Plus</p>
                </li>
                <NavDropdown.Divider />
                <h5>ABONNEMENTS</h5>
                <li className="nav-item">
                  <p className="nav-link">Channel 1</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Channel 2</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Channel 3</p>
                </li>
              </ul>
            </nav>
          </header>
          <Navbar.Brand href="#">
            <img
              style={{ width: "110px", marginLeft: "100px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="Youtube"
            />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="searchbar">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              {" "}
              <AiOutlineSearch />{" "}
            </Button>
          </Form>
          <div className="triplebutton">
            <Nav.Link href="#action1">
              <AiOutlineVideoCameraAdd
                style={{ width: "25px", height: "25px" }}
                className="tripleicons"
              />
            </Nav.Link>
            <Nav.Link href="#action2">
              <GrApps
                style={{ width: "25px", height: "25px" }}
                className="tripleicons"
              />
            </Nav.Link>
            <Nav.Link href="#action2">
              <AiOutlineBell
                style={{ width: "25px", height: "25px" }}
                className="tripleicons"
              />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <NavDropdown
            title="Profile"
            id="navbarScrollingDropdown"
            className="profile"
          >
            <div id="nav">
              <NavDropdown.Item className="item" href="#action3">
                {" "}
                <CgProfile />
                Votre Chaine
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action4">
                <AiOutlineDollarCircle /> Achat et Abonnements
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action5">
                <SiYoutubestudio />
                Youtube Studio
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action6">
                <MdOutlineSwitchAccount />
                Changer de compte
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action7">
                <GiExitDoor />
                Se déconnecter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="item" href="#action8">
                <MdOutlineDarkMode /> Apparence théme de l'appareil
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action9">
                <IoLanguage /> Langue : français
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action10">
                <IoEarth />
                Pays : Tunisie
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action11">
                <AiOutlineSetting /> Paramétres
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action12">
                <RiShieldUserLine /> Vos données dans youtube
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action13">
                <FiHelpCircle /> Aide
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action14">
                <BiCommentError /> Envoyer des commentaires
              </NavDropdown.Item>
              <NavDropdown.Item className="item" href="#action15">
                <MdOutlineKeyboardAlt /> Raccourcis clavier
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="item" href="#action16">
                Mode restreint : désactivé
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
