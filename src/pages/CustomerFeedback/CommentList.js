import React from 'react';

function CommentList({ dataList = [] }) {
  return (
    <div className="comment-list-container">
      <h3>Other users comments</h3>
      <div className="comment-list">
        {dataList.map((item, index) => (
          <div key={item.id} className="item">
            <div className="name">
              <span>{item.name}</span>
            </div>
            <div className="comment">{item.comment}</div>
            {index !== dataList.length - 1 && <hr className="devider" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentList;
