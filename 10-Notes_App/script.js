// DOM Elements
const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

// Load Notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
        createNoteElement(note, index);
    });
}

// Save Notes to localStorage
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Add a New Note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Note cannot be empty!");
        return;
    }
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    saveNotes(notes);
    createNoteElement(noteText, notes.length - 1);
    noteInput.value = "";
}

// Create a Note Element
function createNoteElement(note, index) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const noteText = document.createElement("p");
    noteText.textContent = note;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteNote(index);

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(deleteButton);
    notesContainer.appendChild(noteDiv);
}

// Delete a Note
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    saveNotes(notes);
    loadNotes();
}

// Event Listeners
addNoteButton.addEventListener("click", addNote);
window.addEventListener("load", loadNotes);
