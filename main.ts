function villain () {
    barbie = sprites.create(img`
. . . . . . . . . . b f b . . . 
. . . . . . . . . b f b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b f f f f f b . . . 
. . . . b b f d 1 f f d 4 c . . 
. . . . b f f 1 2 f d d 4 4 4 b 
. . . . b f f d f b 4 4 4 4 b . 
. . . b d f f f f 4 4 4 4 b . . 
. . b d d f f f f f f f f b . . 
. b d d d d f f f f f f f f b . 
b d d d b b b f f f f f f f b . 
c d d b f f d c f f f f f f b . 
c b b d f d c d f f f f f f b . 
. b f f b c d d f f f f f d b . 
b b c c c d d d d f f f b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
    barbie.setPosition(56, 64)
}
function backround () {
    scene.setBackgroundColor(2)
}
function hero () {
    frank = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 2 2 2 2 d c c . . . 
. . . c 2 d 2 2 2 2 2 1 c . c c 
. . c 2 2 2 1 2 2 2 2 d 1 c 2 c 
. c 2 2 2 2 1 2 2 2 2 2 1 c 2 c 
f 2 2 2 2 2 1 2 2 2 2 2 1 2 2 f 
f 2 2 2 f 2 1 c c 2 2 2 1 f 2 f 
f 2 2 2 2 2 1 2 2 f 2 2 d f 2 f 
. f 2 2 2 2 1 c 2 f 2 d f f f f 
. . f f 2 d 2 2 f f 2 c f c . . 
. . . . f f 2 2 2 2 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.Player)
    frank.setPosition(70, 43)
    controller.moveSprite(frank)
}
function destroy () {
    barbie.destroy(effects.confetti, 500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    destroy()
})
let frank: Sprite = null
let barbie: Sprite = null
hero()
villain()
backround()
