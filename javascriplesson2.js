for (let i = 1; i < 100; i++)
    if (i % 3 === 0) {
        console.log("Fizz " + i)
    }
    else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz " + i)
    }
    else if (i % 5 === 0) {
        console.log("Buzz " + i)
    }

    else {
        console.log(i)
    }


//for question 2
for (let i = 99; i > 1; i--)
    if (i > 1) {
        console.log(i + " bottles of juice on the wall! Take one down, pass it around...")
    }
    else {
        console.log(i + " bottle of juice on the wall! Take one down, pass it around...")
    }