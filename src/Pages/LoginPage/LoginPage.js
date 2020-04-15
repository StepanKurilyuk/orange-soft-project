import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar'
import './LoginPage.css';
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
    }

    // setting new state userName or passaword
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    // handle Sing In button click, validating user Email, after email validation check user in users List;
    handleSubmit(event) {
        let isEmailValid = this.validateUserEmail(this.state.userEmail);

        if (isEmailValid) {
            this.login(this.state);
        }

        event.preventDefault();
    }

    validateUserEmail(userEmail) {
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        let result = regExp.test(userEmail);
        
        this.setState({emailHasError: !result})
    }
    
    login(state) {
        console.log('login');
    }

    render() {
        console.log(this.state.emailHasError)
        let emailInputClass = this.state.emailHasError ? 'input input-error' : 'input';
        
        console.log({emailInputClass});

        return (
            <>
                <NavigationBar/>

                <div className='login-background'>
                    <div className='login-form'>
                        <div className='login-form-title'>
                            <span>
                                Sign In
                            </span>
                        </div>

                        <div className='login-form-body'>
                            <div className='group'>
                                    <div className='input-container'>
                                    <img className='icon' src={userIcon} alt='User'/>
                                    <input placeholder='User Email' name='userEmail' onChange={this.handleChange} autoComplete='off' id='email' type='text' className={emailInputClass}/>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='input-container'>
                                    <img className='icon' src={passIcon} alt='Password'/>
                                    <input placeholder='Password' name='password' onChange={this.handleChange} autoComplete='off' id='pass' type='password' data-type="password" className='input'/>
                                </div>
                            </div>

                            <button type="submit" onClick={this.handleSubmit} class="button">Sign In</button>

                            <a className='forgot-password'>Forgot password?</a>

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

export default LoginPage;