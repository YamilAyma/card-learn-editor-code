/*
        Function to display results in a single paragraph for each card
        - data : Data to display
        - resultID : Result Box ID
        - append: Writing mode for display, default: append
*/

// View for result box
function result(data,resultID, append=true){
    const result = document.querySelector('#' + resultID)
    if (append){
        result.innerHTML = result.innerHTML + data
    }else{
        result.innerHTML = data                
    }}

// Init - Loading code for a card to insert the default code into the editor - Copy and change ID respectively
document.querySelector("#card__code__1t").value = document.querySelector("#initial__code__window").innerHTML

        

// Life of a card-learn: Copy this code and change the ID respectively, this is useful for styling
setInterval(() => {
    let codeOutput = document.getElementById('card__code__1c')
    codeOutput.textContent = document.getElementById('card__code__1t').value; 
    Prism.highlightElement(codeOutput);
}, 100)


