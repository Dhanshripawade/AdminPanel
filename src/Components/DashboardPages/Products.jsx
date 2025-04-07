import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Pagination } from "react-bootstrap";
import { getproducts } from "../../stores/Products/productThunk";

function Products() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  // Pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; 

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container mt-4">
        <h3>Products</h3>

        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}

        <Row xs={1} md={2} lg={4} className="g-4">
          {status === "succeeded" &&
            currentProducts.map((product, idx) => (
              <Col key={idx}>
                <Card className="shadow-sm border-0 mt-5" style={{ width: "270px", height: "400px" }}>
                  <Card.Img variant="top" src={product.thumbnail} className="rounded-top" />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text><strong>${product.price}</strong></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-end mt-5">
          <Pagination>
            <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages).keys()].map((num) => (
              <Pagination.Item
                key={num + 1}
                active={num + 1 === currentPage}
                onClick={() => paginate(num + 1)}
              >
                {num + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Products;
