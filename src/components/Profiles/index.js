import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import ProfilesHeader from './ProfilesHeader';
import Table from './Table';
import './index.css';

class Profiles extends Component {
  state = {
    numPage: 0,
  };

  handlePageClick = data => {
    this.setState({ numPage: data.selected * 10 });
  };

  render = () => {
    return (
      <main className="boss-page-main">
        <ProfilesHeader />
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <Table url={this.props.match.url} numPage={this.state.numPage} />
            <div className="boss-page-main__count boss-page-main__count_space_large">
              <span className="boss-page-main__count-text">Showing</span>
              <span className="boss-page-main__count-text boss-page-main__count-text_marked">4</span>
              <span className="boss-page-main__count-text">of</span>
              <span className="boss-page-main__count-text boss-page-main__count-text_marked">132</span>
            </div>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakLinkClassName={'boss-paginator__action boss-paginator__action_role_delimiter'}
              pageCount={10}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={this.handlePageClick}
              containerClassName={'boss-paginator boss-paginator_position_last'}
              activeLinkClassName={'boss-paginator__action_state_active'}
              pageLinkClassName={'boss-paginator__action'}
              previousLinkClassName={'boss-paginator__action boss-paginator__action_role_prev'}
              nextLinkClassName={'boss-paginator__action boss-paginator__action_role_next'}
              subContainerClassName={'pages pagination'}
            />
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
