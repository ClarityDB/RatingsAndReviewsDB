import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const IndividualReview = ({
  rating, name, date, title, body,
}) => {
  const timestamp = moment(date).format('MMMM D YYYY');
  // console.log('current form of date', timestamp);
  return (
    <div className="container border-bottom border-dark m-2 no-gutters">
      <div className="row justify-content-between no-gutters">
        <div className="col no-gutters">
          <p id="rating" className="h6 text-left">
            Star Rating
            {' '}
            {rating}
          </p>
        </div>
        <div className="col no-gutters">
          <p id="name date" className="h6 text-muted text-right">
            {name}
            {', '}
            {timestamp}
          </p>
        </div>
      </div>
      <h5 id="title" className="row">{title}</h5>
      <p id="body" className="row h6 font-weight-light">{body}</p>
      <div>Placement for Helpful Component</div>
    </div>
  );
};

IndividualReview.propTypes = {
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default IndividualReview;
