function getMax(arr){
    //kollar vilket objekt i arrayen som har störst population
    //Och returnera indexet för det objektet
    let highest = arr[0].population;
    let index = 0;
    
    arr.forEach((element, i) => {
        if(element.population > highest){
            highest = element.population;
            index = i;
        }
    });
    return index;
}

const numbers = [{
    population: 32
},
{
    population: 235
},
{
    population: 234
},
{
    population: 43
},
{
    population: 2
}];

console.log(getMax(numbers))// 1

console.log( numbers[getMax(numbers)]);