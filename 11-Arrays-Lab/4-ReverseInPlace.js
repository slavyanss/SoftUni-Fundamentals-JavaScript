// 11. Arrays - Lab
// 04. Reverse In Place

// length
// push()
// includes()
// toString()
// join()

function reverseInPlace(arr){

    for(let i = 0; i < arr.length / 2; i++){

        let dyrjachka = arr[i]; // a
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = dyrjachka;

    }

    console.log(arr.join(" "));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])