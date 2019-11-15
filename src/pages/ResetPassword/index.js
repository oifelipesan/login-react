import React, { Component } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import { Container, Form, Button, Text } from "../../styles"

class ResetPassword extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Reset Password</h1>

          <Input type="password" placeholder="New password" />

          <Button>Reset Password</Button>

          <Text>
            Make sure your password is strong and easy to remember. Back to{" "}
            <Link to="/">Login</Link>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default ResetPassword
