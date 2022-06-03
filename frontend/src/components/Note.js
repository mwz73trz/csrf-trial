function Note(props) {
  return (
    <div>
      <h3>Title: {props.note.title}</h3>
      <h4>Description: {props.note.description}</h4>
    </div>
  );
}

export default Note;
