import React from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Alert } from './components/Alert'
import { AlertState } from './context/alert/AlertState'
import { githubState } from './context/github/githubState'

function App() {
  return (
    <githubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Hello' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </githubState>
  );
}

export default App;
