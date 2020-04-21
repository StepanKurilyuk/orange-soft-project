import React from 'react';
import { connect } from 'react-redux';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import userAvatar from '../../images/avatar.png';
import './ProfilePage.css';

import { userActions } from '../../actions/userActions'
import * as logos from '../../images/index'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isDataLoaded: false
        }

        this.handleSocialNetworkClick = this.handleSocialNetworkClick.bind(this);
    }

    componentDidMount() {
        const { getUserData } = this.props;
        getUserData();
    }

    getSocialLogoByName(name) {
        const logosMap = {
            vk: logos.vkLogo,
            facebook: logos.faceBookLogo,
            linkedIn: logos.linkedInLogo
        };

        return logosMap[name];
    }

    handleSocialNetworkClick(link) {
        window.location = link;
    }

    render() {
        const { data, isDataLoaded } = this.props;

        return (
            <>
                <NavigationBar/>

                <div className='profile-page-container'>
                    <div className='profile-page-top-background'>
                        <div className='profile-page-user-avatar'>
                            <img src={userAvatar} alt='userAvatar'/>
                        </div>

                        <div className='profile-page-user'>
                            <h1>
                                {isDataLoaded && `${data.userData.firstName} ${data.userData.lastName}`}
                            </h1>
                            <h3>
                                {isDataLoaded && data.userData.jobTitle}
                            </h3>
                        </div>

                        <div className='profile-page-social-networks'>
                            {isDataLoaded && data.userData.socialNetworks.map((network) => {
                                let networkLogo = this.getSocialLogoByName(network.name);

                                return (<img className='social-network-logo' key={network.name} onClick={() => this.handleSocialNetworkClick(network.link)} src={networkLogo} alt={network.name}/>)
                            })}
                        </div>
                    </div>

                    <div className='profile-page-other-information'>
                        <div className='profile-info'>
                            <div className='profile-info-title'>
                                Activity
                            </div>

                            <div className='profile-info-body profile-activity'>
                                <div className='profile-activity-block'>
                                    <h2>Followers</h2>
                                    <h3>{isDataLoaded && data.userData.followers}</h3>
                                </div>
                                <div className='profile-activity-block'>
                                    <h2>Following</h2>
                                    <h3>{isDataLoaded && data.userData.following}</h3>
                                </div>
                                <div className='profile-activity-block'>
                                    <h2>Activity</h2>
                                    <h3>{isDataLoaded && data.userData.activity}</h3>
                                </div>
                            </div>
                        </div>

                        <div className='profile-info'>
                            <div className='profile-info-title'>
                                Personal Info
                            </div>

                            <div className='profile-info-body personal-information'>
                                <div className='info-element'>
                                    <span>
                                        <img src={logos.mapIcon} alt='map icon'/>
                                        &nbsp;Location:&ensp;
                                    </span>

                                    <small>
                                        <cite>
                                            {isDataLoaded && data.userData.location}
                                        </cite>
                                    </small>
                                </div>

                                <div className='info-element'>
                                    <span>
                                        <img src={logos.phoneIcon} alt='phone icon'/>
                                        &nbsp;Mobile&nbsp;Phone:&ensp;
                                        <a href={isDataLoaded && `tel:${data.userData.contact.mobilePhone}`}>
                                            {isDataLoaded && `${data.userData.contact.mobilePhone}`}
                                        </a>
                                    </span>
                                </div>

                                <div className='info-element'>
                                    <span>
                                        <img src={logos.emailIcon} alt='email icon'/>
                                        &nbsp;Email:&ensp;
                                    </span>

                                    <small>
                                        <cite>
                                        <a href={isDataLoaded && `mailto:${data.userData.contact.email}`}>
                                            {isDataLoaded && `${data.userData.contact.email}`}
                                        </a>
                                        </cite>
                                    </small>
                                </div>

                                <div className='info-element'>
                                    <span>
                                        <img src={logos.emailIcon} alt='birthday icon'/>
                                        &nbsp;Birthday:&ensp;
                                    </span>

                                    <small>
                                        <cite>
                                            {isDataLoaded && `${data.userData.birthday}`}
                                        </cite>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapState(state) {
    const { data, isDataLoaded } = state.userProfileReducer;
    return { data, isDataLoaded };
}

const actionCreators = {
    getUserData: userActions.getUserData,
};

const connectedProfilePage = connect(mapState, actionCreators)(ProfilePage);
export { connectedProfilePage as ProfilePage };