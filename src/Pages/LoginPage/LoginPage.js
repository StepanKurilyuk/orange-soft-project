import React from 'react';
import { NavigationBar } from '../../Components/NavigationBar/NavigationBar';
import './LoginPage.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions'

import passIcon from '../../images/pass-icon.png';
import userIcon from '../../images/user-icon.svg';
import vkLogo from '../../images/vk-logo.svg';
import facebookLogo from '../../images/facebook-logo.svg';
import googleLogo from '../../images/google-logo.svg';
import linkedInLogo from '../../images/linked-in-logo.svg';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            password: '',
            emailHasError: false,
            loginDenied: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // setting new state userName or password
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    // handle Sing In button click, validating user Email, after email validation check user in users List;
    handleSubmit(event) {
        event.preventDefault();

        const { userEmail, password } = this.state;

        if (userEmail && password) {
            this.props.login(userEmail, password);
        }
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    }

    render() {
        let emailInputClass = this.state.emailHasError ? 'input input-error' : 'input';

        const {userEmail, password} = this.state;

        return (
            <>
                <NavigationBar/>

                <div className='login-background'>
                    <div className='login-form' onKeyDown={this.handleKeyDown}>
                        <div className='login-form-title'>
                            <span>
                                Sign In
                            </span>
                        </div>

                        <div className='login-form-body'>
                            <div className='group'>
                                    <div className='input-container'>
                                    <img className='icon' src={userIcon} alt='User'/>
                                    <input placeholder='User Email' value={userEmail} name='userEmail' onChange={this.handleChange} autoComplete='off' id='email' type='text' className={emailInputClass}/>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='input-container'>
                                    <img className='icon' src={passIcon} alt='Password'/>
                                    <input placeholder='Password' value={password} name='password' onChange={this.handleChange} autoComplete='off' id='pass' type='password' data-type="password" className='input'/>
                                </div>
                            </div>

                            <button type="submit" onClick={this.handleSubmit} className="button">Sign In</button>

                            <span className='forgot-password'>Forgot password?</span>

                            <div className='social-login'>
                                <span className='social-login-label'>
                                    Login with
                                </span>

                                <img className='social-login-icon' src={vkLogo}       alt='vk'/>
                                <img className='social-login-icon' src={facebookLogo} alt='facebook'/>
                                <img className='social-login-icon' src={googleLogo}   alt='google'/>
                                <img className='social-login-icon' src={linkedInLogo} alt='google'/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };