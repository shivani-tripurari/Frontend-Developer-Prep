function outer(){
    let username = "Shivani";
    function inner(){
        let username = "Shilulu";
        const website = "YT";
        console.log(username);
    }
    console.log(username);
    inner();
}
outer();

//console.log(inner());
console.log(outer());