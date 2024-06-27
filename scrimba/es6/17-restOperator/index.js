function add(nums) {

    console.log(nums); // 4
    console.log(arguments) // {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}
      
}

add(4, 5, 7, 8, 12)

function add(...nums) {
    console.log(nums)
}

add(4, 5, 7, 8, 12)