const chatBox= document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const predefinedQA={"hi":"hello", "how are you?":"good thankyou"};

function handlemessage()
{
    const message = userInput.value.trim();
    displaymsg(message);

    const ans= predefinedQA[message];

    if(ans){
        displaymsg(ans);
    }
    else{
        displaymsg("Sorry, I didn't understand that.");
    }
    userInput.value='';

}

function displaymsg(msg){
    const msgdiv= document.createElement('div');
    msgdiv.textContent=msg;
    chatBox.appendChild(msgdiv);
    chatBox.scrollTop=chatBox.scrollHeight;
}