import React, {Component} from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NewsPage from './Pages/NewsPage/NewsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper background">
                <BrowserRouter>
                    <Switch>
                        <Route path='/news' component={NewsPage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/' component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state;
}

const mapDispatchToProps = dispatch => ({
    // getProfileFetch: () => dispatch(getProfileFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
