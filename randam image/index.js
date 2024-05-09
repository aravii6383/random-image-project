const btnEl =document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji=[];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=dd63319daf81ae8ba57dcf61a36b9d67a3d2d56c")

    data = await response.json()

    for (let i=0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}
getEmoji();

console.log(emoji);
btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor( Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
});