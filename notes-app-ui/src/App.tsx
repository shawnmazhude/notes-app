import { useState } from "react";
import "./App.css"

type Note = {
  id: number;
  title: string;
  content: string;
}

const App = () =>{
  const [notes, setNotes] = useState<
  Note[]
  >([
    {
      id: 1,
      title: "Note 1",
      content: "Buy groceries 1",
    },
    {
      id: 2,
      title: "Note 2",
      content: "Buy groceries 2",
    },
    {
      id: 3,
      title: "Note 3",
      content: "Buy groceries 3",
    },
    {
      id: 4,
      title: "Note 4",
      content: "Buy groceries 4",
    }
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (
    event: React.FormEvent) => {
      event.preventDefault();
      console.log("title: ", title);
      console.log("content: ", content);
    
  
    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return(<div className="app-container">
    <form 
    className="note-form"
    onSubmit={(event) => handleSubmit(event)}
    >
      <input 
      value={title} 
      onChange={(event) =>
        setTitle(event.target.value)
      } 
      placeholder="title" required/>
      <textarea 
      value={content}
      onChange={(event) =>
      setContent(event.target.value)
    }
      placeholder="content" rows={10} required></textarea>
      <button type="submit">Add Note</button>
    </form>
    <div className="note-grid">
      {notes.map(note => (
        <div className="note-item">
        <div className="notes-header">
          <button>x</button>
        </div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
          ))}
    </div>
  </div>);
};

export default App;