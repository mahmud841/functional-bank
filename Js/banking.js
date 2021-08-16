// console.log('banking js added');

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get current ndeposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal+ depositAmount;
    console.log(depositTotalText);

    // Update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // clear input field
    depositInput.value = '';

})

// Handle withdraw Button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    console.log(withdrawAmountText);
    const withdrawAmount = parseFloat(withdrawAmountText);


    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // Update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field 
    withdrawInput.value = '';
})