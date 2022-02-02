// First, tell us your name
let yourName = "Marisol Rodriguez"

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let sumTotal = gb + cc + sugar

// selecting elements for cookie quantity in order summary table
const gbQuantity = document.querySelector('#qty-gb')
const ccQuantity = document.querySelector('#qty-cc')
const sugarQuantity = document.querySelector('#qty-sugar')
const totalCookieCount = document.querySelector('#qty-total')

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    console.log(gb);
    gbQuantity.textContent = gb
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

// TODO: Hook up event listeners for the rest of the buttons
// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the elements cc buttons
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting elements sugar cookie buttons
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(){
    if(gb < 0){
        gb = 0
    } else if (gb > 0){
        gb--
    }
    gbQuantity.textContent = gb
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

// Event listener for clicks on the chocolate chip cookies
ccPlusBtn.addEventListener('click', function(){
    cc++
    console.log(cc)
    ccQuantity.textContent = cc
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

ccMinusBtn.addEventListener('click', function(){
    if(cc < 0){
        cc = 0
    } else if (cc > 0){
        cc--
    }
    console.log(cc)
    ccQuantity.textContent = cc
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

// Event listener for clicks on the sugar cookies
sugarPlusBtn.addEventListener('click', function(){
    sugar++
    console.log(sugar)
    sugarQuantity.textContent = sugar
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

sugarMinusBtn.addEventListener('click', function(){
    if(sugar < 0){
        sugar = 0
    } else if (sugar > 0){
        sugar--
    }
    console.log(sugar)
    sugarQuantity.textContent = sugar
    let sumTotal = gb + cc + sugar
    totalCookieCount.textContent = sumTotal
})

