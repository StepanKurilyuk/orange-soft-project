import React from 'react';
import './NavigationBar.css'
import avatar from '../images/avatar.png';

const tabs = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'News',
        href: 'news'
    }
];

let isUserLogged = false;

export default function NavigationBar({selectedTabName}) {
    return (
        <ul className='nav-ul'>
            <div className="leftBlock">
                {tabs.map((tab) =>
                    <li className='nav-li' key={tab.name}>
                        <a href={tab.href} className={selectedTabName === tab.name ? 'active nav-a' : 'nav-a'}>{tab.name}</a>
                    </li>
                )}
            </div>

            <div className="rightBlock">
                <li className='nav-li' key="profile" style={{float:"right", display:"flex"}}>
                    <a className='nav-a' href={isUserLogged ? 'profile' : 'login'}>
                        {isUserLogged ? (
                            <>
                                <img src={avatar} alt="Avatar" className="avatar"/>
                                <span>Profile</span>
                            </> )
                        : <span>Login</span>}
                    </a>
                </li>
            </div>
        </ul>
    )
}