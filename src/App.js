import React, {Component} from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';
import { history } from './Services/reactHistory';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePage, LoginPage, NewsPage, ProfilePage } from './Pages/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        toast.configure()
    }

    render() {
        return (
            <div className="wrapper background">
                <Router history={history}>
                    <Switch>
                        <PrivateRoute path="/profile" component={ProfilePage} redirectIf={!localStorage.getItem('user')} redirectTo='/login'/>
                        <PrivateRoute path="/login" component={LoginPage} redirectIf={localStorage.getItem('user')} redirectTo='/'/>
                        <Route path='/news' component={NewsPage}/>
                        <Route path='/' component={HomePage}/>
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
