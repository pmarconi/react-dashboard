import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from './../store/actions/authentication';
import styled from 'styled-components';
import logo from '../assets/wayne-logo.png';

const LoginContainer = styled.div`
  background-color: slategrey;
  background-image: radial-gradient(#2d3743, #3b8278);
  flex: 1;
  display: flex;
  height: 100vh;
  align-items: center;
`;

const Login = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => props.login(data);

  React.useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <LoginContainer>
      <Container
        style={{
          backgroundColor: 'white',
          width: 420,
          height: 400,
          padding: 30,
        }}
      >
        <Row>
          <img style={{ width: 200, margin: '0 auto' }} src={logo} />
        </Row>
        <hr />
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setValue('email', e.target.value)}
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setValue('password', e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </LoginContainer>
  );
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(login(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
