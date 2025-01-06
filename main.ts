sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    carnival.customGameOverExpanded("Player " + mp.getPlayerProperty(mp.getPlayerBySprite(sprite), mp.PlayerProperty.Number) + " Wins!", effects.confetti, music.powerUp, carnival.ScoreTypes.LTime)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).x += 1.5
})
function set_up_for_players (num: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    for (let index = 0; index <= num - 1; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(20, 130 / (num + 1) + 20 * index)
    }
}
let list: Image[] = []
list = [
assets.image`p1`,
assets.image`p2`,
assets.image`p4`,
assets.image`p3`
]
scene.setBackgroundImage(assets.image`bg`)
set_up_for_players(2)
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.setPosition(150, 50)
game.wrap(function () {
    carnival.addLabelTo("Horse Race", carnival.Areas.Bottom)
    game.showLongText("P1, press the A button to Start", DialogLayout.Bottom)
    music.bigCrash.playUntilDone()
})
