const userData = new Promise((resolve, reject) => {
    const error = true;

    if(error) {
        reject('500 level Error')
    }else {
        resolve ( {
            firstName: 'Dylan',
            age: 32,
            email: 'abs@gmail.com'
        })
    }
})

userData.then((data) => console.log(data)).catch((error) => console.log(error))