import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Calculator from './pages/calculator';
import Form from './pages/form';
import Test from './pages/test';
import './tailwind.output.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/calculator" exact component={Calculator} />
      <Route path="/form" exact component={Form} />
      <Route path="/test/:id" exact component={Test} />
    </Switch>
  </Router>
);

export default App;