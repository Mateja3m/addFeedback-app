import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="red" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
