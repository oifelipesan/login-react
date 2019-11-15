import React, { Component } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import { Container, Form, Button, Text } from "../../styles"

class SignIn extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Login</h1>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button>Enter</Button>

          <Text>
            <p>
              Don't have account? <Link to="/register">Sign up</Link>
            </p>
            <p>
              Forgot your password? <Link to="/forgot">Recover password</Link>
            </p>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default SignIn
