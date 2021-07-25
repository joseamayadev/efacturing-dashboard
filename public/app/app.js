import { btnSend as enviar } from '../app/modules/interactions.js';
import { elemento } from '../app/modules/dataManipulation.js';

// Elementos de selector
const head = document.querySelector('.head');
const subhead = document.querySelector('.subhead');
const contenedorTransactions = document.querySelector('.contenedorTransactions');


elemento();
enviar()
    .then(data => {
        var claves = data.transactions[0];
        var headClaves = Object.keys(claves);
        headClaves.forEach(element => {
            head.innerHTML += `
                <p> ${element} </p>            
            `;
        });
        return data;


    })
    .then(content => {
        var contenido = content.transactions;
        for (const key in contenido) {
            const element = contenido[key];
            var subhead = document.createElement('div');
            subhead.classList.add('subhead');
            subhead.classList.add('table');
            for (const key in element) {
                contenedorTransactions.appendChild(subhead);
                const data = element[key];
                subhead.innerHTML += `
                    <p class=${key}> ${data} </p>
                `
            };
        }
        return content;
    })
    .then(data => {
        var query = document.querySelectorAll('.subhead');
        query.forEach(element => {
            element.innerHTML += `<button class="btnStatus" data-show="true"> </button>`

        });
    })