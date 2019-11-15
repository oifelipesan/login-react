import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Forgot from "./pages/Forgot"
import ResetPassword from "./pages/ResetPassword"

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/reset" component={ResetPassword} />
      </Switch>
    </Suspense>
  </Router>
)

export default App
