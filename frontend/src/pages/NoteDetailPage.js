import { useEffect, useState } from "react";
import notesAPI from "../api/notesAPI";
import { useParams } from "react-router-dom";
import Note from "../components/Note";

function NoteDetailPage(props) {
  const [note, setNote] = useState(null);
  const params = useParams();

  useEffect(() => {
    loadNote();
  }, [params.id]);

  const loadNote = async () => {
    let data = await notesAPI.getNoteById(params.id);
    setNote(data);
  };

  const renderNote = () => {
    if (!note) {
      return null;
    }
    return <Note note={note} />;
  };

  return (
    <div>
      <h1>Note Details</h1>
      {renderNote()}
    </div>
  );
}

export default NoteDetailPage;
