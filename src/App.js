import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Films from "./components/Films"
import AboutFilm from "./components/AboutFilm"
import styles from './components/base.scss'
import BuyTicket from "./components/BuyTicket";



function App() {
    return (
        <Router>
            <div className={styles.base} style={{padding: '20px 40px'}}>
                <Header/>
                <Switch>
                    <Route path='/' exact={true}>
                        <Home/>
                        <Films/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route  path={'/films/about/:id'}>
                        <AboutFilm/>
                    </Route>
                    <Route  path={'/films/:id'}>
                        <BuyTicket/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

