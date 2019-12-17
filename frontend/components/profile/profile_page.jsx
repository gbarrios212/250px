import React from 'react';
import ProfilePhotosContainer from './profile_photos_container';
import UserInfo from './user_info';
import CoverPhoto from './cover_photo';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from 'react-router-dom';
import FollowsContainer from '../follows/follows_container';

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos()
        .then(() => this.props.fetchAllUsers())
        .then(() => this.props.fetchUser(this.props.match.params.userId));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            // this.props.fetchAllUsers();
            this.props.fetchPhotos();
             ;
            this.props.fetchUser(this.props.match.params.userId);
        }
      }

    render() {



      if (!this.props.profileUser) {
        return "loading";
      }

        let bio;
        bio = this.props.profileUser.bio ? <p className="bio">{this.props.profileUser.bio}</p> : <div></div>

        let city;
        city = this.props.profileUser.city ? <p className="city">{this.props.profileUser.city}</p> : <div></div>

        let state;
        state = this.props.profileUser.state ? <p className="state">{this.props.profileUser.state}</p> : <div></div>

        let country;
        country = this.props.profileUser.country ? <p className="country">{this.props.profileUser.country}</p> : <div></div>

        let cameras;
        cameras = this.props.profileUser.cameras ? <p className="cameras">{this.props.profileUser.cameras}</p> : <div></div>

        let lenses;
        lenses = this.props.profileUser.lenses ? <p className="lenses">{this.props.profileUser.lenses}</p> : <div></div>

        let email;
        email = this.props.profileUser.email ? <p className="email">{this.props.profileUser.email}</p> : <div></div>

        let firstName;
        firstName = this.props.profileUser.first_name ? <p className="firstName">{this.props.profileUser.first_name}</p> : <div></div>

        let lastName;
        lastName = this.props.profileUser.last_name ? <p className="lastName">{this.props.profileUser.last_name}</p> : <div></div>

        let birthday;
        birthday = this.props.profileUser.birthday ? <p className="birthday">{this.props.profileUser.birthday}</p> : <div></div>

        let gender;
        gender = this.props.profileUser.gender ? <p className="gender">{this.props.profileUser.gender}</p> : <div></div>




        let follow;
        follow = this.props.currentUser && this.props.currentUser.id != this.props.match.params.userId ? 
            <FollowsContainer key={this.props.profileUser.id} otherUser={this.props.profileUser} /> : <div></div>;
            
        let settings; 
        settings = this.props.currentUser.id == this.props.match.params.userId ? 
            <Link to="/settings">
                <button className="more-button"></button>
            </Link> : <div className="more-button-hidden"></div>;

        if (!this.props.profileUser){
            return (
                <div>Loading...</div>
            )
        }
         ;
        return (
          <>
            <div className="profile-header">
              <div className="cover-photo-container">
                <img className="cover-photo" alt="" />
              </div>
              <div className="avatar-container">
                <div className="user-avatar">
                  <div className="user-avatar-container">
                    <img
                      className="avatar"
                      src={this.props.profileUser.profilePictureUrl}
                      alt=""
                    />
                    {/* <i className="fas fa-user-circle profile-avatar"></i> */}
                  </div>
                </div>
              </div>
              <div className="profile-buttons">
                <div className="buttons-wrapper">{settings}</div>
              </div>
              <div className="user-details">
                <h1>
                  {/* {this.props.profileUser.username} */}
                  {this.props.profileUser.username}
                </h1>
                {bio}
                <ul className="stat-details">
                  <li className="details-list-photo">
                    {this.props.profileUser.photo_ids.length}
                  </li>
                  <li className="details-list-followers">
                    {this.props.profileUser.follower_ids.length} Followers
                  </li>
                  <li className="details-list-following">
                    {this.props.profileUser.following_ids.length} Following
                  </li>
                  <li>{follow}</li>
                </ul>
              </div>
            </div>
            {/* <div className="tabs-container">
                <ul className="tabs">
                <li>
                    <Link to={`/users/${this.props.profileUser.id}`}>PHOTOS</Link>
                </li>
                    
                    <li>ABOUT</li>
                </ul>
            </div> */}
            <Tabs
              className="react-tabs"
              selectedTabClassName="tab-single-selected"
            >
              <TabList>
                <Tab className="tab-single">PHOTOS</Tab>
                <Tab className="tab-single">ABOUT</Tab>
              </TabList>

              {/* <TabPanel>{publishedArt}</TabPanel>
              <TabPanel>{publishedArticles}</TabPanel>
              <TabPanel>{recentlyLikedTab}</TabPanel> */}
              <TabPanel>
                <ProfilePhotosContainer photos={this.props.photos} id={this.props.profileUser.id}/>
              </TabPanel>
              <TabPanel>
                <div className="about-tab">
                  {city}
                  {state}
                  {country}
                  {cameras}
                  {lenses}
                  {email}
                  {firstName}
                  {lastName}
                  {birthday}
                  {gender}
                </div>
              </TabPanel>
            </Tabs>
          </>
        );
    }
}

export default ProfilePage; 