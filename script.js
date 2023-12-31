function expenseTracker(expense,location,amount) {
    return `
    <tr>
    <td class="expense">${expense}</td>
    <td class="location">${location}</td>
    <td class="amount">${amount}</td>
    <td class="remove">&#128465</td>
    </tr> `
}


function addExpense() {
    const expense = $('#expense')
    const location = $('#location')
    const amount = $('#amount')

    const output = $('#output')

    const sum = $("#sum");

    // check if empty
    if (expense.val().trim() === "" || location.val().trim() === "" || amount.val().trim() === "") return;



    // assiging the variables to the function 
    const items = $(expenseTracker(expense.val(), location.val(), amount.val()));

    // to delete
    items.find(".remove").click(function() {
        // items.remove()
        const amountToRemove = parseFloat($(this).siblings(".amount").text());
        items.remove();
        reduceSum(amountToRemove);
    })


    // to add the items to the table
    output.append(items)

    // reseting the input fields
    $('#expense').val('');
    $('#location').val('');
    $('#amount').val('');


    // displaying the sum
    calculateSum()

}

function calculateSum() {
    let total = 0;

    
    $(".amount").each(function () {
        total += parseFloat($(this).text());
    });

    $("#sum").text(`Sum: ${total.toFixed(2)} $`);

  }

  function reduceSum(reductionAmount) {
    let currentSum = parseFloat($("#sum").text().replace("Sum: ", "").replace(" $", ""));
    const newSum = currentSum - reductionAmount;
    $("#sum").text(`Sum: ${newSum.toFixed(2)} $`);
}

$(document).ready(function () {
    const add = $("#submit");
    // add item
    add.click(addExpense);

    $("#amount").keyup(function (event) {
        if (event.keyCode === 13) {
            addExpense();
        }
    });
});

