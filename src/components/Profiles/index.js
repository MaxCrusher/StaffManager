import React, { Component } from 'react';
import ProfilesHeader from './ProfilesHeader';
import Table from './Table';

class Profiles extends Component {
  render = () => (
    <main className="boss-page-main">
      <ProfilesHeader />
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <Table />
        </div>
      </div>
    </main>
  );
}
export default Profiles;
