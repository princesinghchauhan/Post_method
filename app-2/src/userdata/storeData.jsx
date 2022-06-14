import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function StoreData() {
    let [fname, setFname] = useState('');
    let [lname, setLname] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setMobile] = useState('');
    let [password, setPassword] = useState('');
    let [address, setAddress] = useState('');

    function submitData() {
        // alert("You clicked")
        let userdata = {
            firstName: fname,
            lastName: lname,
            email: email,
            mobile_no: mobile,
            password: password,
            address: address
            
            
        };
        let reqData = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        }
        fetch("http://3.111.186.195:3000/register", reqData)
            .then((response) => console.log( `Data Submitted ${response.status}`))
        //.then(data => setPostId(data.id));
        // console.log(userdata);
    }
    return (
        <>
            <Container fluid="md" style={{ backgroundColor: "#d9d9d9", color: "black" }}>
                <h1>Register New User</h1>
                <Row>
                    <Col>
                        <label>First Name</label>
                        <input className="form-control" type="text" placeholder="eg: Prince" value={fname} onChange={(e) => setFname(e.target.value)} />
                        <label>Last Name</label>
                        <input className="form-control" type="text" placeholder="eg: Singh" value={lname} onChange={(e) => setLname(e.target.value)} />
                        <label>Email</label>
                        <input className="form-control" type="email" placeholder="eg: xyz@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Mobile</label>
                        <input className="form-control" type="number" placeholder="eg: 6243542264" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label>Address</label>
                        <input className="form-control" type="text" placeholder="Delhi" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <button onClick={submitData} className="btn btn-success" >Save </button>
                    </Col>
                    <Col>
                    <button className="btn btn-danger">Cancel</button>
                    </Col>

                    {/* <div className="d-grid gap-2">
                        <Button onClick= {submitData} variant="success" size="md">
                            SAVE
                        </Button>
                        <Button variant="danger" size="md">
                            CANCEL
                        </Button>
                    </div>
                </Row> */}
</Row>
            </Container>

        </>
    )
}

export default StoreData;