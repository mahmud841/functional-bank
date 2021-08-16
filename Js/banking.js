/* function doubleIt (num) {
    const result = num  * 2;
    return result ;
}
const first = doubleIt(5);
const second = doubleItZ(7);
 */


function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear withdraw input field 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;


}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updatebalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
     /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// console.log('banking js added');

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    /*   
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
     */

    // console.log(depositAmount);

    // get and update deposit Total  
    /*
       const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotal = parseFloat(depositTotalText);
      depositTotal.innerText = previousDepositTotal + depositAmount;
      console.log(depositTotalText);
       */
   
    // Update balance 
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal + depositAmount; */
     const depositAmount = getInputValue('deposit-input');
     if (depositAmount > 0) {
         updateTotalField('deposit-total', depositAmount);
         updatebalance(depositAmount, true);
     }
    
});

// Handle withdraw Button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('clicked');
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     console.log(withdrawAmountText);
     const withdrawAmount = parseFloat(withdrawAmountText); */



    // update withdraw total 
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
      */


    // Update balance after withdraw 

    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentbalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentbalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updatebalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentbalance){
        console.log('You can not withdraw more than what you have in your account');
    }
});