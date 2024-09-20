import React, { useState, useEffect } from 'react';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const characterLimit = 200;

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleAddNote = () => {
    if (noteInput.trim() && noteInput.length <= characterLimit) {
      const newNotes = [...notes, noteInput];
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setNoteInput('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Notes App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Write your note here..."
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
          rows="3"
          maxLength={characterLimit}
        />
        <p className="text-sm text-gray-500">{characterLimit - noteInput.length} characters left</p>
        <button
          onClick={handleAddNote}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-2"
        >
          Add Note
        </button>
      </div>
      <div>
        {filteredNotes.map((note, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p className="text-lg text-gray-700">{note}</p>
            <button
              onClick={() => handleDeleteNote(index)}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300 mt-2"
            >
              Delete Note
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
