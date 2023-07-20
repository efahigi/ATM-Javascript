let ballerBalance = 100;
//-----------------
let btnOne = document.querySelector("#a1");
let btnTwo = document.querySelector("#a2");
let btnThree = document.querySelector("#a3");
let btnFour = document.querySelector("#a4");
let btnFive = document.querySelector("#a5");
let btnSix = document.querySelector("#a6");
// ------------------------------------

let optiona = document.querySelector("#selectora");
let optionb = document.querySelector("#selectorb");
let optionc = document.querySelector("#selectorc");
let optiond = document.querySelector("#selectord");
let optione = document.querySelector("#selectore");
let optionf = document.querySelector("#selectorf");
// -----------------------------{screen-setting}
let miniscreen = document.querySelector(".displayScreen");
let answerscreen = document.createElement("div");
answerscreen.setAttribute("class", "nput");
let useraccount;
let accountBalance;

const uploadMiniscreen = (number) => {
  miniscreen.append(number);
};
const initProcess = () => {
  startDisplay();
  displayMainMenu();
};

const startDisplay = () => {
  let pinNum = prompt("Please Enter Pin");
  let pinConfirm = prompt("Please ReEnter Pin");
  if (pinNum === pinConfirm) {
    alert("PIN CONFIRMED, Welcome User!", useraccount);
    alert(" Please Select One Of the Following Options");
  } else {
    alert("Invalid PIN.. we assume you are a criminal");
  }
};
const displayMainMenu = () => {
  optiona.innerHTML = "Check BAL";
  optionb.innerHTML = "Transfer";
  optionc.innerHTML = "Withdrawl";
  optiond.innerHTML = "Deposit";
};

  const clearMiniscreen  = () => {
    miniscreen.innerHTML = "";
  };
  const selectionAnswer = (context) => {
    miniscreen.innerHTML = context;
    miniscreen.replaceWith(miniscreen);
  };
  const check_balance = () => {
    // miniscreen.append(number);
  selectionAnswer(`Current Balance: ${ballerBalance}  USD`);
};
// function cancel

const deposit = () => {

  let cash = prompt(" Enter Amount you would like to deposit.");

  selectionAnswer(
 
    `Current Balance: ${parseInt(ballerBalance) + parseInt(cash)} USD`
  );
};
const withdraw = () => { 
  
  let cash = prompt(" Enter Amount you would like to withdraw.");
  selectionAnswer(
    `Current Balance: ${parseInt(ballerBalance) - parseInt(cash)} USD`
  );
};




