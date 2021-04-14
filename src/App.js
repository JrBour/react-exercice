import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Calculator from './pages/Calculator';
import Home from './pages/Home'
import Form from './pages/Form';
import Popup from './pages/Popup';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Post from './pages/Post';

import CreateArticle from './pages/CreateArticle';
import './tailwind.output.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/form" component={Form} />
      <Route path="/popup" component={Popup} />
      <Route path="/create-article" component={CreateArticle} />
      <Route path="/articles/:id" component={Article} />
      <Route path="/articles" component={Articles} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;