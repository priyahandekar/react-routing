import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LeftPanel extends Component {
  static propTypes = {
    profileData: PropTypes.object,
  }

  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.profileData ? this.props.profileData.avatar_url : ''}
            className="full-width border-curved5"
          />
        </div>
        <div className="font26 font-bold padding-top-16">
          {this.props.profileData ? this.props.profileData.name : ''}
        </div>
        <div className="gray padding-bottom-16">
          {this.props.profileData ? this.props.profileData.login : ''}
        </div>
        <div className="light-gray font14">
          {this.props.profileData ? this.props.profileData.bio : ''}
        </div>
        <button
          className="edit-bio-button-style border-curved full-width padding-top-bottom-10 margin-top-bottom-10"
        >
          Edit bio
        </button>
        <div className="font12 light-gray padding-top-16">
          Block or report user
        </div>
        <hr />
        <div className="display-flex-only">
          <div className="margin-right-7">
            <div>
              <i class="fa fa-users" aria-hidden="true" />
            </div>
            <div>
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div>
              <i className="fa fa-envelope-o" aria-hidden="true" />
            </div>
          </div>
          <div>
            <div>
              {this.props.profileData ? this.props.profileData.company : ''}
            </div>
            <div>
              {this.props.profileData ? this.props.profileData.location : ''}
            </div>
            <div>
              <a className="u-email" href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
