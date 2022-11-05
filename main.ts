input.onPinPressed(TouchPin.P0, function () {
    personaje.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    personaje.move(1)
})
let personaje: game.LedSprite = null
game.setScore(0)
personaje = game.createSprite(2, 4)
let enemigo = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    enemigo.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    if (enemigo.isTouching(personaje)) {
        game.gameOver()
    }
    if (enemigo.get(LedSpriteProperty.Y) == 4) {
        enemigo.delete()
        game.addScore(1)
        enemigo = game.createSprite(randint(0, 4), 0)
    }
})
