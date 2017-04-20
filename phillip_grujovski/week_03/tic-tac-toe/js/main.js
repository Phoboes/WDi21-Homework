
$(document).ready(function() {
    //------- CORE FUNCTIONALITY -----------
    var Player = {  
        playerFactory: function(name) {
            var player = {};
            player.name = name;
            player.moves = [];
            player.winCount = 0;
            return player;
        }
    };

    var Human = {
        humanFactory: function(name) {
            var human = Player.playerFactory(name); // Base call
            return human;
        }
    };

    var Ai = {
        aiFactory: function(name) {
            var ai = Player.playerFactory(name); // Base call
            return ai;
        },

        easyLevel: function() {
            // TODO: Implement easy AI functionality
            return;
        },
        
        hardLevel: function() {
            // TODO: Implement hard AI functionality
            return;
        }
    };

    var Main = { 
        $gameSquare: $(".game-square"),
        $headingTwo: $("h2"),
        winnings: [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ],
        player1: new Human.humanFactory("Player1"),
        player2: new Human.humanFactory("Player2"),
        ai: new Ai.aiFactory("Computer"),
        turn: true,
        isAi: false,

        proccessTurn: function() { 
            if(Main.turn) {
                $(this).css({
                    backgroundImage: "url('./assets/pacman.png')"
                });
                Main.turn = false;
                var p1Value = parseInt($(this).attr("data-value"));
                Main.addMove(Main.player1, p1Value);
                if(Main.isAi) {
                    Main.turn = true;
                    var aiValue = Ai.easyLevel();
                    Main.addMove(Main.Ai, aiValue);
                }
            } else {
                $(this).css({
                    backgroundImage: "url('./assets/ghost.png')"
                });
                Main.turn = true;
                var p2Value = parseInt($(this).attr("data-value"));
                Main.addMove(Main.player2, p2Value);
            }
        },

        addMove: function(player, value) {
            player.moves.push(value);
            Main.checkWinCondition(player);
        },

        checkWinCondition: function(player) {
            for(var i = 0; i < this.winnings.length; i++) {
                var winCheck = player.moves.filter(function(value) {
                    return Main.winnings[i].indexOf(value) > -1;
                }).length == Main.winnings[i].length;
                if(winCheck) { 
                    player.winCount++;
                    Main.$gameSquare.off();
                    Main.outputWinner(player);
                }
            }
        },

        outputWinner: function(player) {
            this.$headingTwo.text(player.name + " is the winner!");
            var p1WinCounter = $("#p1-score");
            var p2WinCounter = $("#p2-score");
            p1WinCounter.text(Main.player1.winCount);
            p2WinCounter.text(Main.player2.winCount);
        },

        resetBoard: function() {
            Main.player1.moves = [];
            Main.player2.moves = [];
            Main.$gameSquare.css({backgroundImage: "none"});
            Main.$gameSquare.off();
            Main.turn = true;
            Main.$gameSquare.one("click", Main.proccessTurn);
            Main.$headingTwo.text("Who will win?");
        },

        resetWinCount: function() {
            var p1WinCounter = $("#p1-score");
            var p2WinCounter = $("#p2-score");
            Main.player1.winCount = 0;
            Main.player2.winCount = 0;
            p1WinCounter.text("0");
            p2WinCounter.text("0");
        }
    };
    
    //------UI CONTROLS-------
    Main.$gameSquare.one("click", Main.proccessTurn);

    var $resetBtn = $("#reset-game");
    $resetBtn.on("click", Main.resetBoard);

    var $resetWinCount = $("#reset-count");
    $resetWinCount.on("click", Main.resetWinCount);

    var $humanBtn = $(".human-btn");
    $humanBtn.on("click", function() {
        var p2 = $(".player2-name");
        p2.text(Main.player2.name);
        Main.isAi = false;
    });

    var $aiBtn = $(".ai-btn");
    $aiBtn.on("click", function() {
        var p2 = $(".player2-name");
        p2.text(Main.ai.name);
        Main.isAi = true;
    });
}); 
