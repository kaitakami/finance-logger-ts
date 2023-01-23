import Invoice from "./classes/Invoice.js"
import Payment from "./classes/Payments.js"
import ListTemplate from "./classes/ListTemplate.js"
import { HasFormatter } from "./interfaces"

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.getElementById('type') as HTMLInputElement
const tofrom = document.getElementById('tofrom') as HTMLInputElement
const details = document.getElementById('details') as HTMLInputElement
const amount = document.getElementById('amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')


})
