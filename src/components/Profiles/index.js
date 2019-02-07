import React, { Component } from 'react';
import ProfilesHeader from './ProfilesHeader';
import Table from './Table';

class Profiles extends Component {
  render = () => (
    <div>
      <ProfilesHeader />
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <Table editNumProfile={this.editNumProfile} />
        </div>
      </div>
    </div>
  );
}
export default Profiles;
