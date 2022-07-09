
function titleCase(str) {
    let arr = str.split(" ");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // use slice(1) to print the rest of word after index(0)
        let x = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        result.push(x);
    }
    // use join to join the array after toUpperCase(); 
    console.log(result.join(" "));
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");