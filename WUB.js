// Question
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND



function songDecoder(song){
    return song.replace(/(WUB)+/g, " ").trim();
   }

songDecoder(WUB)