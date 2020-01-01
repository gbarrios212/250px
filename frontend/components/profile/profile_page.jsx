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
            this.props.fetchPhotos();
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
        city = this.props.profileUser.city ? <p id="city">{this.props.profileUser.city}</p> : <div></div>

        let state;
        state = this.props.profileUser.state ? <p id="state">{this.props.profileUser.state}</p> : <div></div>

        let country;
        country = this.props.profileUser.country ? <p id="country">{this.props.profileUser.country}</p> : <div></div>

        let cameras;
        cameras = this.props.profileUser.cameras ? <p id="cameras">{this.props.profileUser.cameras}</p> : <div></div>

        let lenses;
        lenses = this.props.profileUser.lenses ? <p id="lenses">{this.props.profileUser.lenses}</p> : <div></div>

        let email;
        email = this.props.profileUser.email ? <p id="email">{this.props.profileUser.email}</p> : <div></div>

        let firstName;
        firstName = this.props.profileUser.first_name ? <p id="firstName">{this.props.profileUser.first_name}</p> : <div></div>

        let lastName;
        lastName = this.props.profileUser.last_name ? <p id="lastName">{this.props.profileUser.last_name}</p> : <div></div>

        let birthday;
        birthday = this.props.profileUser.birthday ? <p id="birthday">{this.props.profileUser.birthday}</p> : <div></div>

        let gender;
        gender = this.props.profileUser.gender ? <p id="gender">{this.props.profileUser.gender}</p> : <div></div>




        let follow = <div></div>;
        if (this.props.currentUser) {
          follow = this.props.currentUser && this.props.currentUser.id != this.props.match.params.userId ? 
          <FollowsContainer key={this.props.profileUser.id} otherUser={this.props.profileUser} /> : <div></div>;
        }
            
        let settings = <div></div>;
        if (this.props.currentUser) {
          settings = this.props.currentUser.id == this.props.match.params.userId ? 
          <Link to="/settings">
                <button className="more-button"></button>
            </Link> : <div className="more-button-hidden"></div>;
        }

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
                  </div>
                </div>
              </div>
              <div className="profile-buttons">
                <div className="buttons-wrapper">{settings}</div>
              </div>
              <div className="user-details">
                <h1>{this.props.profileUser.username}</h1>
                {bio}
                <ul className="stat-details">
                  <li className="details-list-photo">
                    {this.props.profileUser.photo_ids.length}
                  </li>
                  <li
                    className="details-list-followers"
                    onClick={() => this.props.openModal({modal: "followers", followers: this.props.followers})}
                  >
                    {this.props.profileUser.follower_ids.length} Followers
                  </li>
                  <li className="details-list-following"
                    onClick={() => this.props.openModal({modal: "followings", followings: this.props.followings})}
                  >
                    {this.props.profileUser.following_ids.length} Following
                  </li>
                  <li>{follow}</li>
                </ul>
              </div>
            </div>
            <Tabs
              className="react-tabs"
              selectedTabClassName="tab-single-selected"
            >
              <TabList>
                <Tab className="tab-single">PHOTOS</Tab>
                <Tab className="tab-single">ABOUT</Tab>
              </TabList>
              <TabPanel>
                <ProfilePhotosContainer
                  photos={this.props.photos}
                  id={this.props.profileUser.id}
                />
              </TabPanel>
              <TabPanel>
                <div className="about-tab">
                  <section className="about-info">
                    <div>
                      Name: {firstName} {lastName}
                    </div>
                    <div>City: {city}</div>
                    <div>State: {state}</div>
                    <div>Country: {country}</div>
                    <div>Birthday: {birthday}</div>
                    <div>Gender: {gender}</div>
                    <div>Cameras: {cameras}</div>
                    <div>Lenses: {lenses}</div>
                    <div>Email: {email}</div>
                  </section>
                </div>
              </TabPanel>
            </Tabs>
          </>
        );
    }
}

export default ProfilePage; 