import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [clickState,setClickState] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleInputClick(){
    setClickState(true);
  }
  return (
    <div>
      <form className="create-note">
        {clickState && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder= "Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleInputClick}
          value={note.content}
          placeholder= "Take a note..."
          rows={clickState ? 3 :1}
        />
        <Zoom in={clickState}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
