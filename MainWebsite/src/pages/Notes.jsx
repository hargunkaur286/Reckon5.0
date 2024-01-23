import React, { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '', id: null });

  const handleNoteChange = (e) => {
    setCurrentNote({
      ...currentNote,
      [e.target.name]: e.target.value,
    });
  };

  const saveNote = () => {
    const newNote = { ...currentNote, id: Date.now() };
    const updatedNotes = currentNote.id ? notes.map(n => n.id === currentNote.id ? currentNote : n) : [...notes, newNote];
    setNotes(updatedNotes);
    setCurrentNote({ title: '', content: '', id: null }); // Clear the currentNote after saving
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-200 to-orange-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Welcome to your Notes App!</h1>
      <p className="mb-8 text-gray-500">~ To keep in mind ~</p>
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-lg">
        <input 
          className="w-full px-4 py-2 mb-4 border rounded placeholder-gray-400 text-gray-600 focus:border-blue-500 focus:outline-none" 
          name="title" 
          value={currentNote.title} 
          onChange={handleNoteChange} 
          placeholder="give your note a title" 
        />
        <textarea 
          className="w-full px-4 py-2 mb-4 border rounded placeholder-gray-400 text-gray-600 focus:border-blue-500 focus:outline-none" 
          name="content" 
          value={currentNote.content} 
          onChange={handleNoteChange} 
          placeholder="write your note here" 
          rows="4"
        />
        <button 
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
          onClick={saveNote}
        >
          Add Note ✍️
        </button>
      </div>
      <div className="mt-8 w-full max-w-lg">
        {notes.map(note => (
          <div key={note.id} className="bg-white rounded-lg shadow p-4 my-2 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{note.title}</h3>
              <p className="text-gray-600">{note.content}</p>
            </div>
            <div>
              <button 
                className="text-white bg-red-500 hover:bg-red-600 font-semibold px-3 py-1 rounded mr-2"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
              <button 
                className="text-white bg-green-500 hover:bg-green-600 font-semibold px-3 py-1 rounded"
                onClick={() => setCurrentNote(note)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
