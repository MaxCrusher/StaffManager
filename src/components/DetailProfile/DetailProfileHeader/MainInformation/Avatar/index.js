import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render = () => (
    <div className="boss-user-summary__side">
      <div className="boss-user-summary__avatar">
        <div className="boss-user-summary__avatar-inner">
          <img src={this.props.img.logo} alt="Trulla Collier" className="boss-user-summary__pic" />
        </div>
        <a href="#" className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">
          Edit
        </a>
      </div>
    </div>
  );
}
export default Avatar;
Avatar.propTypes = {
  img: PropTypes.string.isRequired,
};
