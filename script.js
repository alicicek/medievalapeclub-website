let discord = document.getElementById("discord")
let opensea = document.getElementById("opensea")

let DiscordSocialInfo = document.getElementById("discord-social-info")
let DiscordSocialText = document.getElementById("discord-social-text")

let OpenseaSocialInfo = document.getElementById("opensea-social-info")
let OpenseaSociaText = document.getElementById("opensea-social-text")

let timer

discord.addEventListener("mouseover", DiscordOver, false);
discord.addEventListener("mouseout", DiscordOut, false);
opensea.addEventListener("mouseover", OpenseaOver, false);
opensea.addEventListener("mouseout", OpenseaOut, false);

function DiscordOver(){
    DiscordSocialInfo.style.width = "70px"
    timer = setTimeout(function() {
        DiscordSocialText.style.display = "inline"
      }, 200);

}

function DiscordOut(){
    clearTimeout(timer);
    timer = setTimeout(function() {
        DiscordSocialText.style.display = "none"
        DiscordSocialInfo.style.width = "1rem"
      }, 200);

}

function OpenseaOver(){
    OpenseaSocialInfo.style.width = "70px"
    timer = setTimeout(function() {
        OpenseaSociaText.style.display = "inline"
      }, 200);

}

function OpenseaOut(){
    clearTimeout(timer);
    OpenseaSociaText.style.display = "none"
    OpenseaSocialInfo.style.width = "1rem"

}

