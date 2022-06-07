import { Link } from "react-router-dom";
import notesAPI from "../api/notesAPI";

function Notes(props) {
  const handleDeleteNote = async () => {
    const data = await notesAPI.deleteNote(props.note.id);
    if (data) {
      props.removeNote(props.note.id);
    }
  };
  return (
    <div>
      <Link to={`notes/${props.note.id}`}>{props.note.title}</Link>
      <br />
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  );
}

export default Notes;
