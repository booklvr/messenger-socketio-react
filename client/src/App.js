import { GlobalStyle } from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chatroom from './pages/Chatroom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:roomId' component={Chatroom} />
      </Switch>
    </Router>
  )
}

export default App
