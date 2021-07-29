import { GlobalStyle } from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chatroom from './pages/Chatroom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/:roomId' component={Chatroom}></Route>
      </Switch>
    </Router>
  )
}

export default App
