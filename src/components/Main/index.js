import React, { Component } from 'react';
import MainHeader from './MainHeader';
import Table from './Table';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numProfile: 0,
    };
  }

  editNumProfile = length => this.setState({ numProfile: length });

  render = () => (
    <div>
      <MainHeader numProfile={this.state.numProfile} />
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <Table editNumProfile={this.editNumProfile} />
        </div>
      </div>
    </div>
  );
}
export default Main;
