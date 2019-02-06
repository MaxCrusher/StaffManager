import React, { Component } from 'react';
import MainHeader from './MainHeader';
import Table from './Table';

class Main extends Component {
  render = () => (
    <div>
      <MainHeader />
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <Table editNumProfile={this.editNumProfile} />
        </div>
      </div>
    </div>
  );
}
export default Main;
