// 1. Užduotis 
    function minToSeconds(minutes) {
        const seconds = minutes * 60
        return `${seconds} seconds`
    }
    const result = minToSeconds(3)
    console.log(result)
    

// 2. Užduotis 
    function daysAlive(years) {
        const days = years * 365
        return `${days}`
    }
    const result1 = daysAlive(20)
    console.log(result1)


// 3. Užduotis
    let number = (a, b) => a ** b
    console.log(number(5, 2))


// 4. Užduotis 
    let width = (a, b) => ((a * b) / 2)
    console.log(width(10, 10 ))


// 5. Užduotis 
    function lastLetter(myString){
        const lastLetter1 = myString.charAt(myString.length - 1)
        return`${lastLetter1}`
    }
    const result2 = lastLetter("Deividas")
    console.log(result2)


// 6. Užduotis 
    function reverseLetter(name){
        const toLowerCase1 = name.split('').reverse().join('').toLowerCase()
        return `${toLowerCase1}`
    }
    const result3 = reverseLetter("DEIVIDAS")
    console.log(result3)


// 7. Užduotis
    function largestNegativeNumber(arr) {
        let largestNegative = null
    
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && (largestNegative === null || arr[i] > largestNegative)) {
            largestNegative = arr[i]
        }
        }
    
        return largestNegative
    }
    const numbers = [-1 -100, -5, 10, 0, 11]
    const result4 = largestNegativeNumber(numbers)
    console.log(result4)
  


// 8. Užduotis 
    function generateRandomArray(count) {
        return Array.from({ length: count }, () => Math.floor(Math.random() * 10) + 1)
    }
    const resultArray = generateRandomArray(3)
    console.log(resultArray)
  


// 9. Užduotis
    let biggerThen = (a, b) => ((a + b) < 100)
    console.log(biggerThen(10, 50 ))


// 10. Užduotis
    function sortByAgeThenName(arr) {
        arr.sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age
        } else {
            return a.name.localeCompare(b.name)
        }
        })
    
        return arr
    }

    const people = [
        { name: "Alfredas", age: 25 },
        { name: "Jonas", age: 25 },
        { name: "Kasparas", age: 20 }
    ]
    const sortedPeople = sortByAgeThenName(people)
    console.log(sortedPeople)
  


// 11. Užduotis
    function isWeekend(date) {
        const weekends =[
            '2022-09-24',
            '2022-09-22'
        ]
        const data = date.toISOString().split('T')[0]
        return weekends.includes(data)
    }
    const day1 = new Date('2022-09-24');
    const day2 = new Date('2022-09-23');
    console.log(isWeekend(day1))
    console.log(isWeekend(day2))
    

  
// 12. Užduotis
    function smallestMissingNumber(arr, smallestMissing = 1) {
        return arr.includes(smallestMissing) ? smallestMissing = smallestMissingNumber(arr, smallestMissing + 1) : smallestMissing
    }
    const numbers3 = [1, 2, 4, 5]
    const result7 = smallestMissingNumber(numbers3)
    console.log(result7)
    