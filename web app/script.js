let balance = 0;

function addTransaction() {
    const text = document.getElementById('text').value;
    const amount = +document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const mobile = document.getElementById('mobile').value;

    if (text.trim() === '' || isNaN(amount) || date.trim() === '' || mobile.trim() === '') {
        alert('Please enter a valid description, amount, date, and mobile number.');
    } else {
        const transactionList = document.getElementById('transaction-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            ${text} - ${date} <span>${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(2)}</span>
            <button class="delete-btn" onclick="deleteTransaction(this)">Delete</button>
            <br>
            Mobile: ${mobile}
        `;
        transactionList.appendChild(listItem);

        balance += amount;
        document.getElementById('balance').innerText = balance.toFixed(2);

        document.getElementById('text').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';
        document.getElementById('mobile').value = '';
    }
}

function deleteTransaction(element)
 {
    const transactionAmount = parseFloat(element.previousSibling.textContent.match(/-?\d+\.\d+/)[0]);
    balance -= transactionAmount;
    document.getElementById('balance').innerText = balance.toFixed(2);
    element.parentNode.remove();
}