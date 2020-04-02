const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const mycreate =() =>{
    //console.log("hello one")
    readline.question("Select a name for file please *_*:", function (file) {
        //console.log(`Hey there ${file}!`);
        fs.writeFile(`C:/Users/moham/Desktop/ ${file}!.txt`, ' ', (err) => {
            if (err) throw err;
            console.log("Done")

        });
        console.log('oh you my man  we did it  *_*');
        readline.close();
    });
}



 const write = () => {
    readline.question("Man focus with me !! tell me the name of file before *_* !!!: ", function (file) {
        readline.question(" *_* So we are friend now, you can feel free to write any message sweety: ", function (Data) {
            fs.appendFile(`C:/Users/moham/Desktop/ ${file}!.txt`, `${Data}`+"\n", function (err) {
                if (err) throw err;
                console.log("Done");

            });
            console.log('oh great  *_* *_* *_*');
            readline.close();

        });
    });
}

const read =() => {
    readline.question("Man focus with me !! tell me the name of file before *_* !!!: ", function (file) {
        fs.readFile(`C:/Users/moham/Desktop/ ${file}!.txt`, 'utf8', function (err, contents) {
            console.log("Here we go :"+contents);
        });
        console.log('as the requested my friend!!!   *_* *_* *_*');
        readline.close();
    });

}


const remove =()=> {
    //console.log("Hello four")
    readline.question("Don't leave me alone please but tell me name of file  :( !!!: ", function (file) {
        const path = `C:/Users/moham/Desktop/ ${file}!.txt`
        try {
            fs.unlinkSync(path)
        } catch(err) {
            console.error("Done")
        }
        console.log('I will mise you sweety !!!   so sadly');
        readline.close();
    });

}


const doFile = () => {

//console.log(`choose an option:`)
    console.log(`[1] Create a File`)
    console.log('[2] Write aFile')
    console.log('[3] Read aFile')
    console.log('[4] remove aFile')
    console.log('\n')
//here we choose option
    readline.question('Choose an option  :* :-) *_* :', function (no) {
        var num = parseInt(`${no}`, 10);
        console.log(`${no}`);
        switch (num) {
            case 1:
                mycreate();
                break;
            case 2:
                write();
                break;
            case 3:
                read();
                break;
            case 4:
                remove();
                break;
            default:
                console.log("You Particular input out of the range")
                break;

        }

    });
}

doFile();

