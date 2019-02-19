import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfilesHeader from './ProfilesHeader';
import Table from './Table';

class Profiles extends Component {
  render = () => {
    console.log(this.props);
    return (
      <main className="boss-page-main">
        <ProfilesHeader />
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <Table url={this.props.match.url} />
          </div>
        </div>
      </main>
    );
  };
}
export default Profiles;
Profiles.propTypes = {
  match: PropTypes.object.isRequired,
};