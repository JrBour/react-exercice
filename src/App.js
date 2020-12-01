import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Calculator from './pages/calculator';
import Form from './pages/form';
import './tailwind.output.css'

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/form" exact component={Form} />
      </Switch>
    </Router>
  </div>
);

export default App;