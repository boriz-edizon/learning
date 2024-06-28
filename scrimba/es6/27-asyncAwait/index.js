const photos = []

// function photoUpload() {
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("")
//         }, 3000)

//         let result = uploadStatus;
//         console.log(result);         // promise
//         console.log(photos.length)   // 0
//     })
// }


async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("")
        }, 3000)

        let result = uploadStatus;
        console.log(result);         
        console.log(photos.length)
    })
}