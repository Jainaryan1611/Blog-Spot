import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <section className="offset"></section> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id"> {/* when route parameter is variable eg. /blogs/123 ,/blogs/987 ,/blogs/567. */}
              <BlogDetails />
            </Route>
           
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
