import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card,Row, Col, Button, InputGroup, FormControl, Dropdown, Pagination,} from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
import { getposts, postposts, deleteposts, updateposts,} from "../../stores/blog/blogThunk";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Blog() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.blog);

  //POST METHOD
  const [formData, setFormData] = useState({
    title: "",
    userId: "",
  });

  //UPDATE METHOD
  const [editPost, setEditPost] = useState(false);
  const [editId, setEditId] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setFormData({ title: "", userId: "" });
    setEditPost(false);
    setEditId(null);
  };

  const handleShow = (post = null) => {
    if (post) {
      setFormData({ title: post.title, userId: post.userId });
      setEditPost(true);
      setEditId(post.id);
    } else {
      setFormData({ title: "", userId: "" });
      setEditPost(false);
      setEditId(null);
    }
    setShow(true);
  };

  //GET METHOD
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editPost) {
      await dispatch(updateposts({ id: editId, updatedData: formData }));
    } else {
      await dispatch(postposts(formData));
    }
    handleClose();
  };

  //DELETE METHOD
  const handleDelete = (id) => {
    dispatch(deleteposts(id));
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blog...</h2>
        <Button variant="dark" onClick={() => handleShow()}>+ New post</Button>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <div style={{ borderRadius: "12px", padding: "20px" }}>
            <Modal.Header closeButton>
              <Modal.Title>{editPost ? "Edit Post" : "New Post"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>User ID</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.userId}
                    onChange={(e) =>
                      setFormData({ ...formData, userId: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                {editPost ? "Update Post" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>

      <div className="d-flex justify-content-between mb-4 mt-5">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <FaCommentDots />
          </InputGroup.Text>
          <FormControl placeholder="Search post..." />
        </InputGroup>
        <Dropdown>
          <Dropdown.Toggle variant="light">Latest</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Popular</Dropdown.Item>
            <Dropdown.Item>Trending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {status === "loading" && <p>Loading posts...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {currentPosts.map((post, idx) => (
          <Col key={idx}>
            <Card className="border-0 shadow-sm h-100 rounded-4 text-white overflow-hidden mt-5">
              <div style={{ position: "relative" }}>
                <Card.Img
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                  className="rounded-4"
                  style={{ height: "250px" }}
                />
                <Card.Body
                  style={{ position: "absolute", bottom: "0",left: "0",width: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    padding: "20px",
                  }}
                >
                  <Card.Title className="h6 fw-bold">{post.title}</Card.Title>
                  <div className="d-flex justify-content-center gap-2">
                    <Button 
                      variant="success"
                      size="sm"
                      className="px-3"
                      onClick={() => handleShow(post)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="px-3"

                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </div>
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
  );
}

export default Blog;
