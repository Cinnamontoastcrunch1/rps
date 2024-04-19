
function rockfunction(){
    document.getElementsByClassName("img1")[0].src="images/rock.JFIF"

    var randomNum = Math.floor((Math.random() * 3)+1);

    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
    }
}
function paperfunction(){
    document.getElementsByClassName("img1")[0].src="images/paper.JFIF"
    var randomNum = Math.floor((Math.random() * 3)+1);

    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
    }
}
function scissorsfunction(){
    document.getElementsByClassName("img1")[0].src="images/scissors.JFIF"
    var randomNum = Math.floor((Math.random() * 3)+1);

    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
    }
}