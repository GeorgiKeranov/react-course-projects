import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState(() => {
        return JSON.parse(localStorage.getItem('notes')) || []
    })

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    // Save notes to localStorage on every change
    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            title: prompt('Please enter note title', ''),
            body: "# Type your markdown note's title here"
        }

        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(prevNotes => {
            const noteToUpdateIndex = prevNotes.findIndex(note => note.id === currentNoteId);
            const noteToUpdate = prevNotes[noteToUpdateIndex];
            // Remove the note from the notes array
            prevNotes.splice(noteToUpdateIndex, 1);

            // Update the note
            noteToUpdate.body = text;

            // Return new array of notes with the updated one on the top
            return [noteToUpdate, ...prevNotes];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => prevNotes.filter(note => note.id != id));
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
