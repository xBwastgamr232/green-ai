function sendprompt(){
    var prompt = document.getElementById("input").value;
    document.getElementById("chat").innerHTML = prompt;
    document.getElementById("AI").innerHTML = "This would be the AI's responce";
}