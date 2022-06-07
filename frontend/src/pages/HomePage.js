import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";
import notesAPI from "../api/notesAPI";

function HomePage(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, [props.username]);

  const loadNotes = async () => {
    const data = await notesAPI.getAllNotes();
    setNotes(data ? data : []);
  };

  const removeNote = (deletedNoteId) => {
    const newNotes = notes.filter((note, index) => {
      return note.id !== deletedNoteId;
    });
    setNotes(newNotes);
  };

  const renderNotes = () => {
    return notes.map((note, index) => {
      return <Notes key={index} note={note} removeNote={removeNote} />;
    });
  };

  return (
    <div>
      <h1>Your Notes for user: {props.username}</h1>
      {renderNotes()}
      <br />
      <Link to="/create-note">Create New Note</Link>
    </div>
  );
}

export default HomePage;
