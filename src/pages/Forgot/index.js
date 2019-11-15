import React, { Component } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import { Container, Form, Button, Text } from "../../styles"

class Forgot extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Forgot Password</h1>

          <Input type="email" placeholder="Email" />

          <Button>Reset Password</Button>

          <Text>
            <p>
              By clicking "Reset Password" we will send a password reset link.
              Back to <Link to="/">Login</Link>
            </p>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default Forgot
