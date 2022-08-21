import React from "react";
import "../App.css";
import {Helmet} from 'react-helmet';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Home = () => {
  const navigate = useNavigate();
  return (
      <div >
          <Helmet>
                <style>{'body { background-color: #b3cccc; }'}</style>
            </Helmet>
          <div >
              <h3 style={{textAlign:"center"}}>Keep Coding,Keep Smiling</h3>
          </div>
<div style={{ display:"flex",
    alignItems: 'center',
    justifyContent: 'center',textAlign:"center",}}>
         {/* <h3>Keep Coding , Keep Smiling</h3> */}
      <Card style={{marginTop:"50px",background:"black",border:"2px solid green",padding:"5px",borderRadius:"3px"}}>
        <Card.Img
          variant="top"
          src={
            "https://www.bing.com/th?id=OIP.tCNLok2-tunrB9Ujy3DELgHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          }
          style={{height:"400px",width:"600px"}}
        />
        <Card.Body>
          <Card.Title>Choose Either Of Those</Card.Title>
          <Button
          style={{borderRadius:"10px",width:"200px",height:"50px",marginRight:"30px",background:"green"}}
          variant={"outline-info"}
            onClick={() => {
              navigate("login");
            }}
          >
            Login
          </Button>
          <Button
          style={{borderRadius:"10px",width:"200px",height:"50px",marginRight:"30px",background:"green"}}
            onClick={() => {
              navigate("Register");
            }}
          >
            Register
          </Button>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
      </div>
    
  );
};

export default Home;
