import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import ShowNews from './components/ShowNews';
import AddNews from './components/AddNews'
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addnews" component={AddNews} />
          <Route exact path="/shownews" component={ShowNews} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
