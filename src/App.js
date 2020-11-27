import './App.css';
import 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path = "/login"                          component = { Login }/>
      <Route path = "/register"                       component = { Register } />
      <Route path = "/forgetPassword"                 component = { ForgetPassword } />
      <Route path = "/"                               component = { Home } />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
