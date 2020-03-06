<!DOCTYPE html>
<html lang="en">
    <?php include_once "header.html"; ?>
<body>
    <div id="deck" class="deck">
        <img src="img/deck/56.png" alt="Deck background">
    </div>
    <div id="tableShown" class="tableShown"></div>
    <div id="pot" class="pot">The Pot: <p data-pot>0</p> </div>
    <div id="userHand" class="userHand" data-user-me></div>
    
    <div id="ui" class="ui">
        <button id="btnCheck" class="button">Check</button>
        <button id="btnFold" class="button">Fold</button>
        <button id="btnRaise" class="button">Raise</button>
    </div>
</body>
</html>