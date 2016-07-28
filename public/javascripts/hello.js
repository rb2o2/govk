if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}
var blackstone = "<div><img src=\"/assets/images/black.png\"></div>"
var whitestone = "<div><img src=\"/assets/images/white.png\"></div>"
function inMoves(moves,x,y) {
    var reslt = false
    for (var i in moves) {
        if (moves[i][0] == x && moves[i][1]==y) {
            reslt = true
        }
    }
    return reslt
}
window.onload = function () {
    var moves = []
    var move = function (x,y) {
    console.log(moves,x,y)
        if (!inMoves(moves,x,y)) {
            moves.push([x,y])
            var left = (x - 1)*23 -23
            var top = (y - 1)*23 -23
            if (blackmove) {
                $(blackstone).css({
                    hieght: "23px",
                    width:"23px",
                    position:"absolute",
                    margin:"0",
                    left: ""+left+"px",
                    top:""+top+"px"
                    }).appendTo("#game");
            } else {
            $(whitestone).css({
                hieght: "23px",
                width:"23px",
                margin:"0",
                position:"absolute",
                left: ""+left+"px",
                top:""+top+"px"
                }).appendTo("#game");
            }
            blackmove = !blackmove
        }
    }
    var blackmove = true
    var makeMove = function (clickevt) {
    console.log(clickevt)
        if (clickevt.target == clickevt.currentTarget) {
        var x = Math.round((clickevt.offsetX +10)/23+1)
        var y = Math.round((clickevt.offsetY +10)/23+1)
        console.log(x,y)
        move(x,y)
        }
    }
    $('#game').click(makeMove);
}
