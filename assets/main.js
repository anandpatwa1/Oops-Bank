// const { list } = require("postcss")

const html = document.getElementById('html')
const dayNight = document.getElementById('dayNight')

dayNight.addEventListener("click", day)
// console.log(dayNight.value);
// console.log(html);
function day(){
    html.setAttribute("data-theme","light")
    dayNight.setAttribute("value","off") 
    // console.log(dayNight.value);
}
// if(dayNight.value=="off"){
//     html.setAttribute("data-theme","dark")
// }
// console.log(dayNight.value);


//__________________________________________________________

const addAccount = document.getElementById('addAccount')
const nameInput = document.getElementById('name')
const accountNoInput = document.getElementById('accountNo')
const opningBelence = document.getElementById('belence')

const depositMoney = document.getElementById('deposit')
const dAccountNo = document.getElementById('dAccountNo')
const depositAmount = document.getElementById('depositAmount')

const withdrawMoney = document.getElementById('withdraw')
const wAccountNo = document.getElementById('wAccountNo')
const withdrawAmount = document.getElementById('withdrawAmount')




// constroctor function
function BankAccount(name, acc, balance=0){
    this.name = name
    this.accountNo = acc
    this.balance = balance
    // this.mobNumber = mob 

    this.deposit = function(num){
        this.balance += num
    }
    this.withdraw = function(num){
        this.balance -= num
    }
    // this.UpdateNumber = function(num){
    //     this.mobNumber = num
    // }


}

// const anandPatwa = new BankAccount("anand",0 ,"8982210103")

// anandPatwa.deposit(input2.value)     
// anandPatwa.withdraw(input3)
// anandPatwa.UpdateNumber(997710103)
// console.log(anandPatwa);




let ul = document.querySelector("#ul")

let account = []

function saveAccount(e){
    e.preventDefault()
    const newAccount = new BankAccount(nameInput.value ,parseInt(accountNoInput.value) ,parseInt(opningBelence.value))
    
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.innerText = `Name:- ${newAccount.name} | Account no:- ${newAccount.accountNo} | Balance ammount:- ${newAccount.balance}`
    account.push(newAccount)
    ul.appendChild(li)
    li.appendChild(a)
    console.log(newAccount);
}

function deposit(e){
    e.preventDefault()
    const findAccount = account.find( item => item.accountNo === +dAccountNo.value)
    let depositAmountValue = parseInt(depositAmount.value)
    findAccount.deposit(depositAmountValue)
    console.log(findAccount);

    const li = document.createElement("li")
    const a = document.createElement("a")
    a.innerText = ` Updeted | Name:- ${findAccount.name} | Account no:- ${findAccount.accountNo} | Balance ammount:- ${findAccount.balance}`
    ul.appendChild(li)
    li.appendChild(a)
}

function withdraw(e) {
    e.preventDefault()
    const findAccount = account.find(item => item.accountNo === +wAccountNo.value)
    let withdrawAmountValue = parseInt(withdrawAmount.value)
    findAccount.withdraw(withdrawAmountValue)

    const li = document.createElement("li")
    const a = document.createElement("a")
    a.innerText = ` Updeted | Name:- ${findAccount.name} | Account no:- ${findAccount.accountNo} | Balance ammount:- ${findAccount.balance}`
    ul.appendChild(li)
    li.appendChild(a)
    console.log(findAccount);
    form.reset()
}

addAccount.addEventListener("submit", saveAccount)
depositMoney.addEventListener("submit", deposit)
withdrawMoney.addEventListener("submit", withdraw)

//_____________________________________________________________________________________

