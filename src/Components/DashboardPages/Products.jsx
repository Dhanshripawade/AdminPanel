import React from 'react'

import { Card, Button, Row, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';


function Products () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    useEffect(() => {
      axios.get("https://dummyjson.com/products")
        .then((response) => {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, []);
  
    return (
        <div >
       
          <div className="container mt-4">
            <h3>Products</h3>
            <Row xs={1} md={2} lg={4} className="g-4">
              {loading ? <p>Loading...</p> : products.map((product, idx) => (
                <Col key={idx}>
                  <Card className="shadow-sm border-0" style={{ width: "270px", height: "380px" }}>
                    <Card.Img variant="top" src={product.thumbnail} className="rounded-top" />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text><strong>${product.price}</strong></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      
    );
  };
  
  export default Products;