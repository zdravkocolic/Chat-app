import React, { Component } from "react";
import "./userProfile.css";
import firebase from "firebase";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" />
          </div>
          <h4>Fernando Faucho</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card" onClick={this.toggleInfo}>
          <div className="card__header">
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
        </div>
          <div className="card__content">
            informacije
          </div>
        </div>
      </div>
    );
  }
}