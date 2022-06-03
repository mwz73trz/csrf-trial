import { Link } from "react-router-dom";

function Notes(props) {
  return (
    <div>
      <Link to={`notes/${props.note.id}`}>{props.note.title}</Link>
    </div>
  );
}

export default Notes;
