import { useEffect, useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

import classes from './CommentsList.module.css';

const CommentList = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    setIsLoading(true);
    const jsonRes = await fetch(`/api/comments/${eventId}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const payload = await jsonRes.json();
    setComments(payload.comments);
    setIsLoading(false);
  }
  return (
    <ul className={classes.comments}>
      {isLoading && <p>Loading....</p>}
      {
        comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default CommentList;