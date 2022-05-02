

let addbtn =document.getElementById('addbtn')
addbtn.addEventListener('click',(e)=>{
    
    let textarea =  document.getElementById('textarea')
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(textarea.value);
    localStorage.setItem('notes',JSON.stringify(notesObj))
    textarea.value = "";
    showNotes();
})

const showNotes = ()=>{
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach((element,index)=> {
        html += `
        <div class="NoteCard card m-3 " style="width: 18rem;">
            <div class="card-body text-center">
            <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id=${index} onclick=DeleteNote(this.id) class="btn btn-primary">Delete Note</button>
            </div>
        </div> `
    });
    let notesElm = document.getElementById('notes');
    if(notes.length !=0){
        notesElm.innerHTML = html;
    }
}

showNotes();


const DeleteNote = (index)=>{
    //   console.log(index)
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj))
    showNotes();
}

let search = document.getElementById('search')
search.addEventListener('input',()=>{
    let val = search.value.toLoweCase();
    let notecard = document.getElementsByClassName('NoteCard')
    Array.from(notecard).forEach(element=>{
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(val)){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
})
