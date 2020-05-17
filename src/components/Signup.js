import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";

const signup = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
}

class Signup extends Component {

  handleClick() {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  handleSubmit() {
    signup.name = this.refs.signupName.value;
    signup.email = this.refs.signupEmail.value;
    signup.password = this.refs.signupPassword.value;
    if(signup.name != '' && signup.password != '') {
      api.submitUser(signup);
      this.refs.signupName.value = '';
      this.refs.signupEmail.value = '';
      this.refs.signupPassword.value = '';
    } else {
      alert("Insert the name and Password fields");
    }
  };

  render() {
    return (
      <div>
        <div>
          <p className="tip"></p>
        </div>
        <div className="cont">
          <form>
            <div className="form sign-in">
              <h2>Welcome back,</h2>
              <label>
                <span>Email</span>
                <input type="email" ref = "signinEmail"/>
              </label>
              <label>
                <span>Password</span>
                <input type="password" ref = "signinPassword" />
              </label>
              <p className="forgot-pass">Forgot password?</p>
              <button type="button" className="submit">
                Sign In
              </button>
              <button type="button" className="fb-btn">
                Connect with <span>facebook</span>
              </button>
            </div>
            <div className="sub-cont">
              <div className="img">
                <div className="img__text m--up">
                  <h2>New here?</h2>
                  <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                <div className="img__text m--in">
                  <h2>One of us?</h2>
                  <p>If you already has an account, just sign in. We've missed you!</p>
                </div>
                <div className="img__btn" onClick={this.handleClick}>
                  <span className="m--up">Sign Up</span>
                  <span className="m--in">Sign In</span>
                </div>
              </div>
              <div className="form sign-up">
                <h2>Time to feel like home,</h2>
                <label>
                  <span>Name</span>
                  <input type="text" ref = "signupName"/>
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" ref = "signupEmail"/>
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" ref = "signupPassword"/>
                </label>
                <button type="button" className="submit" onClick={this.handleSubmit.bind(this)}>
                  Sign Up
                </button>
                <button type="button" className="fb-btn">
                  Join with <span>facebook</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.object
};

export default Signup;