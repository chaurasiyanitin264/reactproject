import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Layout = () => {
    return (
        <>
            <Navbar bg="success" variant="dark" expand="lg" className="custom-navbar">
                <Container>
                    <img 
                        style={{ height: "30px", backgroundColor: "aqua" }} 
                        src="https://www.shutterstock.com/image-vector/id-card-icon-user-identity-260nw-516445126.jpg" 
                        alt="Logo" 
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: "10px" }}>
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="insert">Insert</Nav.Link>
                            <Nav.Link href="display">Display</Nav.Link>
                            <Nav.Link href="search">Search</Nav.Link>
                            <Nav.Link href="searchname">Search Name</Nav.Link>
                            <Nav.Link href="update">Update</Nav.Link>
                            <Nav.Link href="edit">Edit Data</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <center>
                <hr size="1" color="green" />
                <Outlet />
                <hr size="1" color="green" />
                <div style={{backgroundColor:'#14A44D', margin:'10px',padding:'20px',height:'100%'}}>
                <p>© 2024 Your Company Name. All rights reserved.</p>
                </div>
            </center>
        </>
    );
}

export default Layout;
