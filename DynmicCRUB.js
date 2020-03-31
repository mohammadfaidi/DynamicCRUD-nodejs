const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function create() {
    //console.log("hello one")
    readline.question("Select a name for file please *_*:", function (file) {
        //console.log(`Hey there ${file}!`);
        fs.writeFile(`C:/Users/Dell/Desktop/ ${file}!.txt`, ' ', (err) => {
            if (err) throw err;
            console.log(err)
        });
        console.log('oh you my man  we did it  *_*');
        readline.close();
    });
}
function write() {
    readline.question("Man focus with me !! tell me the name of file before *_* !!!: ", function (file) {
        readline.question(" *_* So we are friend now, you can feel free to write any message sweety:  ", function (Data) {
            fs.writeFile(`C:/Users/Dell/Desktop/ ${file}!.txt`, `${Data}`, function (err) {
                if (err) throw err;
                console.log(err)
            });
            console.log('oh great  *_* *_* *_*');
            readline.close();

        });
    });
}
function read() {
    readline.question("Man focus with me !! tell me the name of file before *_* !!!: ", function (file) {
        fs.readFile(`C:/Users/Dell/Desktop/ ${file}!.txt`, 'utf8', function (err, contents) {
            console.log("Be patient noob :"+contents);
        });
        console.log('as the requested my friend!!!   *_* *_* *_*');
        readline.close();
    });
}
function remove() {
    //console.log("Hello four")
    readline.question("Don't leave me alone please but tell me name of file  :( !!!: ", function (file) {
        const path = `C:/Users/Dell/Desktop/ ${file}!.txt`
        try {
            fs.unlinkSync(path)
        } catch(err) {
            console.error(err)
        }
        console.log('I will mise you sweety !!!   so sadly');
        readline.close();
    });

}
var num;
function loop() {
//console.log(`choose an option:`)
    console.log(`[1] Create a File`)
    console.log('[2] Write aFile')
    console.log('[3] Read aFile')
    console.log('[4] remove aFile')
    console.log('\n')
//here we choose option
    readline.question('Choose an option myfriend :* :-) *_* :', function (no) {
        var num = parseInt(`${no}`, 10);
        console.log(`${no}`);
        switch (num) {
            case 1:
                create();
                break;
            case 2:
                 write();
                break;
            case 3:
                read();
                break;
            case 4:
                remove();
                loop();
                break;
            default:
                console.log("You Particular input out of the range")
                break;

        }

    });
}

loop();
