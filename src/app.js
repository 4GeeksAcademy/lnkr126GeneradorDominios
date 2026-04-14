/**
 * Domain Name Generator
 * Esta maravilla de script genera combinaciones de dominios al pulsar el botón.
 */

// Los Array
let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'small', 'little'];
let noun = ['jogger', 'racoon', 'fast', 'strong'];
let extensions = ['.com', '.net', '.us', '.io'];

function generarDominios() {
    const listElement = document.getElementById("domain-results");
    
    listElement.innerHTML = '';
    
    console.log("--- Listado de Dominios Generados ---");

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < extensions.length; l++) {
                    
                    let domainName = pronoun[i] + adj[j] + noun[k] + extensions[l];
                    
                    console.log(domainName);

                    let domainDiv = document.createElement("div");
                    domainDiv.className = "p-2 border-b border-slate-200 last:border-0 hover:bg-indigo-50 text-indigo-900";
                    domainDiv.innerText = domainName;
                    listElement.appendChild(domainDiv);
                }
            }
        }
    }
}


window.onload = function() {
    const boton = document.getElementById("btn-generar");
    
    boton.addEventListener("click", generarDominios);
};