let barbie = sprites.create(img`
. . . . . 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 2 . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . 2 f f . 2 f . . 2 . . 
. . 2 . . f f 2 . f 2 . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . f . . . . . . f . 2 . . 
. . 2 . f 2 . . . . . f . 2 . . 
. . 2 . . f f f f f f 2 2 2 . . 
. . 2 2 2 . . . . . . . 2 . . . 
. . . . 2 2 . . . . . . 2 2 . . 
. . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
for (let index = 0; index < 9; index++) {
    barbie.y += -4
    pause(100)
    barbie.x += 4
}
let frank = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 . 5 5 . . 2 2 . . . . . . 
. . 2 . 5 . . . . 2 2 . . . . . 
. . 2 . 5 5 . . . . 2 . . . . . 
. . 2 5 . 5 5 . . . . 2 . . . . 
. . 2 . . 5 5 . . 5 5 2 . . . . 
. . 2 . 5 5 5 . . . . . 2 . . . 
. . 2 . 5 . . . . . . . 2 . . . 
. . 2 . . 5 5 . . 5 . . 2 . . . 
. . 2 . . . . . 5 5 5 5 2 . . . 
. . 2 2 . . . . . . . 2 . . . . 
. . . 2 2 2 . . . . 2 2 . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 9; index++) {
    frank.y += 4
    pause(100)
    frank.x += -4
}
