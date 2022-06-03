import { useNavigate } from "react-router-dom";
import notesAPI from "../api/notesAPI";

function CreateNotePage(props) {
  const navigate = useNavigate();
  const handleCreateNote = async (evt) => {
    evt.preventDefault();

    const noteData = {
      title: evt.target.elements["title"].value,
      description: evt.target.elements["description"].value,
    };

    const data = await notesAPI.createNote(noteData);
    if (data) {
      navigate(`/notes/${data.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateNote} method="POST">
        <label>Title: </label>
        <input type="text" name="title" placeholder="Enter Title" />
        <br />
        <label>Decription: </label>
        <input type="text" name="description" placeholder="Enter Description" />
        <br />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default CreateNotePage;
