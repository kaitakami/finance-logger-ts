import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payments.js";
import ListTemplate from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
