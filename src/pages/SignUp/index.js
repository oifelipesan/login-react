import React, { Component } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import { Container, Form, Button, Text } from "../../styles"

class SignUp extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Register</h1>

          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button>Sign Up</Button>

          <Text>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default SignUp
