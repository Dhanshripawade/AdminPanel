import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaAndroid, FaApple, FaWindows, FaBug } from 'react-icons/fa';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area
} from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';


const data = [
  { name: 'Jan', teamA: 20, teamB: 40, teamC: 25 },
  { name: 'Feb', teamA: 10, teamB: 60, teamC: 30 },
  { name: 'Mar', teamA: 30, teamB: 20, teamC: 35 },
  { name: 'Apr', teamA: 15, teamB: 55, teamC: 40 },
  { name: 'May', teamA: 25, teamB: 25, teamC: 45 },
  { name: 'Jun', teamA: 35, teamB: 65, teamC: 50 },
  { name: 'Jul', teamA: 20, teamB: 20, teamC: 55 },
  { name: 'Aug', teamA: 40, teamB: 50, teamC: 30 },
  { name: 'Sep', teamA: 25, teamB: 40, teamC: 20 },
  { name: 'Oct', teamA: 30, teamB: 35, teamC: 25 },
];


const data1 = [
  { name: 'America', value: 27.7 },
  { name: 'Asia', value: 34.7 },
  { name: 'Europe', value: 9.2 },
  { name: 'Africa', value: 28.4 },
];

const COLORS = ['#3366FF', '#00BFFF', '#FFB400', '#FF4C4C'];

function Home() {
  return (
    <Container fluid className="px-3 px-md-4">
      <h4 className="mt-3">Hi, Welcome Back</h4>
      <Row className="mt-4 gy-3">
        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 text-center p-3 rounded-3 h-100" style={{ backgroundColor: "rgb(209,233,252)" }}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-primary-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaAndroid size={24} className="text-primary" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">714k</Card.Title>
              <Card.Text className="text-muted">Weekly Sales</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 text-center p-3 rounded-3 h-100" style={{ backgroundColor: "rgb(208,242,254)" }}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-info-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaApple size={24} className="text-primary" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">1.35m</Card.Title>
              <Card.Text className="text-muted">New Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 text-center p-3 rounded-3 h-100" style={{ backgroundColor: "rgb(255,247,204)" }}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaWindows size={24} className="text-warning" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">1.72m</Card.Title>
              <Card.Text className="text-muted">Item Orders</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 text-center p-3 rounded-3 h-100" style={{ backgroundColor: "rgb(255,231,217)" }}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-danger-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaBug size={24} className="text-danger" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">234</Card.Title>
              <Card.Text className="text-muted">Bug Reports</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     
      <Row className="gx-4 gy-4 mt-3">
        <Col xs={12} lg={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h5 className="fw-semibold mb-3">Website Visits</h5>
              {/* <Graph /> */}
              <Container className="my-4">
    <Row className="">
      <Col md={10}>
       
          <p className="text-muted">(+43%) than last year</p>
          <ResponsiveContainer width="100%" height={180}>
            <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="teamB" fill="rgba(255,193,7,0.1)" stroke="none" />
              <Bar dataKey="teamA" barSize={20} fill="#0d6efd" /> {/* Bootstrap primary color */}
              <Line type="monotone" dataKey="teamB" stroke="#ffc107" strokeWidth={2} /> 
              <Line type="monotone" dataKey="teamC" stroke="#0d6efd" strokeWidth={2} /> {/* Bootstrap primary color */}
            </ComposedChart>
          </ResponsiveContainer>
        
      </Col>
    </Row>
  </Container>
              <small className="text-muted d-block mt-2">(+43%) than last year</small>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}>
          <Card className="border-0 shadow-sm h-100">
           
            <div style={{ padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Current Visits</h4>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data1}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            align="center"
            wrapperStyle={{ marginTop: '20px' }}
            formatter={(value) => <span style={{ color: '#555', fontSize: '14px' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;


 // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const handleSubmit = () => {
  //   if (title && description) {
  // console.log("Title",title ,   "description",    description)
     
  //     dispatch(postposts({ title, body: description }));
  //     setTitle("");
  //     setDescription("");
  //     handleClose();
  //   }
  // };