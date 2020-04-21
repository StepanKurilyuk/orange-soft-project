import React from 'react';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import './HomePage.css';
import gitHubLogo from '../../images/github-icon.svg';

export default function HomePage() {
    return (
        <>
            <NavigationBar selectedTabName='Home'/>
            <div className='home-page-container' >
                <h1>
                    Test React Project
                </h1>

                <div className='home-page-connections'>
                    <img src={ gitHubLogo } onClick={() => handleGitHubRedirect()} alt='git'/>
                </div>

                <div className='home-page-todos'>
                    <h2>
                        TODOS
                    </h2>
                    <ul>
                        <li>
                            Styles Reafactoring
                        </li>

                        <li>
                            Add Pagintation with dots for news page
                        </li>

                        <li>
                            Add Spinner
                        </li>

                        <li>
                            Fix pagination style on mobile devices
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function handleGitHubRedirect() {
    window.location = 'https://github.com/Rumml/orange-soft-project';
}