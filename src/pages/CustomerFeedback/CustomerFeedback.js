import React, { useState } from 'react';

import Form from './Form';
import CommentList from './CommentList';
import initialChartData from '../../dummyStateData/chartData';
import initialCommentListData from '../../dummyStateData/commentListData';

function CustomerFeedback() {
  const [chartData, setChartData] = useState(initialChartData);
  const [commentListData, setCommentListData] = useState(
    initialCommentListData
  );

  const updateComments = formData => {
    const tmpCommentListData = [...commentListData];
    tmpCommentListData.unshift({
      id: Date.now(),
      name: formData.customerName,
      comment: formData.customerComment
    });
    setCommentListData(tmpCommentListData);
  };

  const updateRatingChart = formData => {
    if (!formData.customerRating) return;
    const tmpChartData = [...chartData];
    let updatedRate = tmpChartData.find(
      rate => rate.name == formData.customerRating
    );
    ++updatedRate['number of users'];
    setChartData(tmpChartData);
  };

  const handleFormSubmit = formData => {
    updateComments(formData);
    updateRatingChart(formData);
  };

  return (
    <div className="feedback-page">
      <h1 className="header">Leave your feedback</h1>
      <div className="feedback-body">
        <Form onSubmit={handleFormSubmit} chartData={chartData} />

        <CommentList dataList={commentListData} />
      </div>
    </div>
  );
}

export default CustomerFeedback;
