class Player {
    constructor(){}

    //read the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",function(data) {
            playerCount = data.val()
        })
    }

    //writing the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    //writing the player name value to the database
    updateInfo(name){
        database.ref("player"+playerCount).update({
            name: name
        })
    }

}