function expenseTracker(text) {
    return
    `
    <td>${expense}</td>
    <td>${location}</td>
    <td>${amount}</td>
    `
}


function addExpense() {
    const expense = $('#expense').val()
    const location = $('#location').val()
    const amount = $('#amount').val()
    const output = $('$output')

    const expense_item = $(expenseTracker(expense))
    const location_item = $(expenseTracker(location))
    const amount_item = $(expenseTracker(amount))


    if (expense.val().trim() ==="" || amount.val().trim() ==="" || amount.val().trim()==="") return ; 

    output.append(expenseTracker)
    expense.val("")
    location.val("")
    amount.val("")

}

$(document).ready(function () {
    const add = $("#submit");
    // add item
    add.click(addExpense);
  
    $("#amount").keyup(function (event) {
      if (event.keyCode === 13) {
        addExpense()
      }
    }
    )
})
