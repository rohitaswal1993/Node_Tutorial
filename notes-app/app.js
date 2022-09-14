const chalk = require('chalk')
const notes = require('./notes.js')
const yargs=require('yargs')

//yargs.version('2.1.0')

// //const command = process.argv[2]
// const msg=getNotes();
// console.log(msg);
// const greenMsg=chalk.blue.inverse.bold('Success');

// console.log(greenMsg);
//console.log(process.argv)

// console.log(process.argv[2])
// const command= process.argv[2];
// if(command==='add'){
//     console.log('Adding Note');
// }else if(commmand==='remove'){
//     console.log('Removing Note');
// }
// // if (command === 'add') {
// //     console.log('Adding note!')
// // } else if (command === 'remove') {
// //     console.log('Removing note!')
// // }
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body of the note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        // console.log('Adding a new Note',argv.title),
        // console.log('Adding body value',argv.body)
    }

})
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        console.log('Removing a new note')
    }
})
yargs.command({
    command:'list',
    describe:'Adding to the list',
    handler(){
        notes.listNotes()
        console.log('Adding to the list')
    }
})
yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
              describe:  "Reading Note",
              demandOption:true,
              type:'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title)
        console.log('Reading a note')
    }
})
//console.log(yargs.argv)
yargs.parse();