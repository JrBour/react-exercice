import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Calculator from './pages/calculator';
import Home from './pages/home'
import Form from './pages/form';
import Popup from './pages/popup';
import './tailwind.output.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/form" component={Form} />
      <Route path="/popup" component={Popup} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;