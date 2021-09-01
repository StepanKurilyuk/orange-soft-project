import React from 'react';
import './NavigationBar.css'
import avatar from '../../images/avatar.png';
import { userActions } from '../../actions/userActions';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLogged : localStorage.getItem('user') ? true : false,
            selectedTabName: props.selectedTabName,
            tabs : [
                {
                    name: 'Home',
                    href: '/'
                },
                {
                    name: 'News',
                    href: 'news'
                },
                {
                    name: 'External App',
                    href: 'external'
                }
            ]
        };
    
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleLogout (event) {
        event.preventDefault();
        this.props.logout();
        this.setState({isUserLogged: false});
    }

    render() {
        return (
            <ul className='nav-ul'>
                {this.state.tabs.map((tab) =>
                    <li className='nav-li' key={tab.name}>
                        <a href={tab.href} className={this.state.selectedTabName === tab.name ? 'active nav-a' : 'nav-a'}>{tab.name}</a>
                    </li>
                )}

                <li className='nav-li dropdown' key="profile" style={{float:"right", display:"flex"}}>
                    <a className='nav-a dropbtn' href={this.state.isUserLogged ? 'profile' : 'login'}>
                        {this.state.isUserLogged ? (
                            <>
                                <img src={avatar} alt="Avatar" className="avatar"/>
                                <span>Profile</span>

                                <div className="dropdown-content">
                                    <span onClick={this.handleLogout}>Logout</span>
                                </div>
                            </>)
                        : <span>Login</span>}
                    </a>
                </li>
            </ul>
        )
    }
}

function mapState(state) {
    const { isUserLogged } = state.authentication;
    return { isUserLogged };
}

const actionCreators = {
    logout: userActions.logout,
};

const connectedNavigationBar = connect(mapState, actionCreators)(NavigationBar);

export { connectedNavigationBar as NavigationBar };
