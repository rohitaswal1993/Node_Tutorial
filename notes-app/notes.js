const fs=require('fs')
const chalk=require('chalk')
const { title } = require('process')
const getNotes = () =>{
    return 'Your notes...'
}
const addNote=(title,body)=>{
    console.log("notes before anything is :",title,body)
    const notes =loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    const duplicateNote=notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
    }
    else{
        console.log("Note Title Taken")
    }
    console.log("notes is ",notes);
    
    
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added"))
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        console.log("laoding notes",dataJSON)
        return JSON.parse(dataJSON) 
    }
    catch(e){
        return []
    } 
}
// const removeNote= function(title){
//     console.log("title to be removed is ",title)
//     const notes=loadNotes()
//     const notesToKeep=notes.filter(function(note){
//         return note.title!==title
//     })
//     if(notes.length>notesToKeep.length){
//         console.log(chalk.green.inverse('Note removed!'))
//         saveNotes(notesToKeep)
//     }else{
//         console.log(chalk.red.inverse('No note found!'))
//     }
    
// }
const removeNote= (title)=>{
    console.log("title to be removed is ",title)
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title!==title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
}
const listNotes=()=>{
    const notes = loadNotes() 
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    });
}
const readNote=(title)=>{
    const notes=loadNotes()
    const notesToRead=notes.find((note)=>note.title===title)
    if(notesToRead){
        console.log(chalk.innotesToRead.title,notesToRead.body)
    }else{
        console.log(chalk.red.inverse("No note found"))
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
