// Immediately Invoked function Expression (IIFE)

(function chai()
{
    console.log("DB Connected");
})() ;
// chai()

// ( function chai2(){
//     console.log(`DB Connected twoooo`);
// } )() ;

// ( () => {
//     console.log(`DB Connected twoooo`);
// } )() ;

( (name) => {
    console.log(`DB Connected twoooo : ${name}`);
} )("Priiii") ;