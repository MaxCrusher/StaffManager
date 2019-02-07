import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const URL = '/detail/';
class ItemRowImage extends Component {
  render = () => (
    <div className="boss-table__image">
      <Link to={URL + this.props.id}>
        <a href="#" className="boss-table__link">
          <div className="boss-avatar boss-avatar_type_combined">
            <img src={this.props.content} alt="" className="boss-avatar__image" />
          </div>
        </a>
      </Link>
    </div>
  );
}
export default ItemRowImage;
ItemRowImage.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
