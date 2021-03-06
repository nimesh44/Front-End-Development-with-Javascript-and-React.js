let months = ['Jan','Feb','April','May','Jun','July','Aug','Sep','Oct','Sep','Nov','Dec']

let key ="my_notes"
// let myNotes = []
// To checks if notes already exists in storage
// If notes already exist then fetch the notes
// If notes are not exist create empty array
// using ternary operator
let myNotes = localStorage.getItem(key)?
    JSON.parse(
        localStorage.getItem(key)):[]



//  when browser loads HTML completely
// Do following
window.onload = function(){
    onGetSavedNotes(myNotes)
}

// To add notes to local storage
function onAddNotes(){
    // To get data from HTML we use dome
    let myNote =
    document.getElementById('notes').value
    // To set text area null
    document.getElementById('notes').value =''
    // To store multiple values in notes
    let note = {}
    note.value = myNote
    note.date = new Date()
    // Gives unique timeframe for millisecond
    note.id = new Date().getTime()
    // console.log(myNote)
    myNotes.push(note)
    // When sending data to a web server, the data has to be a string.
    // Convert a JavaScript object into a string with JSON.stringify().
    // JSON : Array of objects
    // To store data to local storage
    localStorage.setItem(key,JSON.stringify(myNotes))
    // // To store data to session
    // sessionStorage.setItem(key,myNotes)

    // To get saved notes
    onGetSavedNotes(myNotes)
}


// To get saved notes from local storage
function onGetSavedNotes(myNotes){
    // To get data from local storage using key
    // let notes = localStorage.getItem(key)

    // //Alternative way of getting notes
    let notes = myNotes
    // //This notes is already parsed because we fetched it already
    noteHTML = ''
    notes.forEach(function(val,index){
        // checking if array is empty,or if contains multiple value,avoid this condition
        if (val){
        // console.log(index)
        // console.log(val)
        noteHTML = noteHTML +
                `<div>
                <img  onclick="deleteNotes(${index})" id="delete-note" src="delete.png">
                <small>${getReadableDate(val.date)}</small>
                <p>${val.value}</p>
                </div>`
        }
    })

    // When receiving data from a web server, the data is always a string.
    // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    // To write notes text to id
    document.getElementById('myNotes').innerHTML = noteHTML
    // console.log(typeof(notes))
    // console.log(notes)

}

// get readable date
function getReadableDate(date){
    let dateReadable = new Date(date)
    // let fullDate = dateReadable.toDateString()
    let fullDate = dateReadable.getDate() +' '+ months[dateReadable.getMonth()]+ ' '+
            dateReadable.getFullYear()+' '+ dateReadable.getHours()+':'+dateReadable.getMinutes()
  return fullDate
}

// delete notes
function deleteNotes(index){
    // console.log(index)
    // To delete note from the given index
    myNotes.splice(index,1)
    localStorage.setItem(key,JSON.stringify(myNotes))
    console.log('Deleted')
    onGetSavedNotes(myNotes)
}

// search notes
function onSearchItems(){
    let searchKey = document.getElementById('searchText').value
    // indexOf() returns index of the parameter in the string, and 
    // returns -1 if parameter doesn't present in the given string
    let newArray = myNotes.filter(note=> note.value.toLowerCase().indexOf(searchKey.toLowerCase())!= -1)
    onGetSavedNotes(newArray)


}

// clear note search
function clearSearch(){
    onGetSavedNotes(myNotes)

}



// // Testing
// function deleteNotes(index){
// ary = ['npn','neupane','all']
// ary.splice(index,1)
// console.log(ary)
// }

// deleteNotes(0)


