namespace SpriteKind {
    export const dogbone = SpriteKind.create()
    export const Cat = SpriteKind.create()
    export const taco = SpriteKind.create()
    export const info = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Nova.vy == 0) {
        Nova.vy = -115
    }
})
function StartLevel () {
    if (Curerent_levl == 0) {
        tiles.setTilemap(tilemap`level0`)
    } else if (Curerent_levl == 1) {
        tiles.setTilemap(tilemap`level8`)
    } else if (Curerent_levl == 2) {
    	
    } else if (Curerent_levl == 3) {
    	
    } else if (Curerent_levl == 4) {
    	
    } else if (Curerent_levl == 5) {
    	
    } else {
        game.over(true, effects.blizzard)
    }
    tiles.placeOnRandomTile(Nova, assets.tile`tile7`)
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(Nova)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Nova.vy == 0) {
        Nova.vy = -115
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    Curerent_levl += 1
    StartLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    Nova.setPosition(9, 5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    Curerent_levl += 1
    StartLevel()
})
let Curerent_levl = 0
let Nova: Sprite = null
game.setDialogTextColor(2)
game.showLongText("here's how to control the game. the A button makes you jump, the B button restarts the game, and when you move the joystick left you go left when you move the joystick right you go right and when you move the joystick up you jump.", DialogLayout.Full)
scene.setBackgroundColor(6)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111666666666661111111166666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111116666666611111111111666666666666666666666666666666
    6666666666661116666666666666111166666666666666666666666666666666666666666666666666666666666666666611111111111111116661111111111111116666666661111111666666666666
    6666666666111111116666666661111111166666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111166666611111111666666666666
    6666666666111111111666666611111111111666666666666666666666666666666666666666666666666666666666661111111111111111111111111111111111111111166111111111166666666666
    6666666611111111111166666111111111111116666666666666666666666666666666666666666666666666666666661111111111111111111111111111111111111111111111111111166666666666
    6666666611111111111116666111111111111111666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111111111111111166666666666
    6666666111111111111111661111111111111111666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111111111111111116666666666
    6666666111111111111111611111111111111111166666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111111111111111116666666666
    6666666111111111111111611111111111111111111666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111111111666666666
    6666666111111111111111111111111111111111111661111116666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111111111666666666
    6666666111111111111111111111111111111111111111111111666666666666666666666666666666666666666666611111116666666666666666661111111111111111111111111111111666666666
    6666666111111111111111111111111111111111111111111111166666666666666666666666666666666666666666111666666666666666666666666666661111111111111111111111111166666666
    6666666111111111111111111111111111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111166666666
    6666666111111111111111111111111111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111166666666
    6666666111111111111111111111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111116666666666
    6666666611111166111111111111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666116666666666666666666666666661111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666611111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd66666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddd6666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666dd66666666666666666666666666666666666666666666666666666666666666666dddddddddd66666666666666666666666666666666666
    66666666666666666666666666666666666666666666666ddd6666666666666666666666666666666666666666666666666666666666666666dddddddddddddd66666666666666666666666666666666
    6666666666666666666666666666666666666666666dddddddd6666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddd66666666666666666666666666666
    6666666666666666666666666666666666666666ddddddddddddd666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddd666666666666666666666666666
    66666666666666666666666666666666666666dddddddddddddddd6666666666666666666666666666666666666666666666666666666dddddddddddddddddddddddddd6666666666666666666666666
    6666666666666666666666666666666666666ddddddddddddddddddd6666666666666666666666666666666666666666666666666666ddddddddddddddddddddddddddddd66666666666666666666666
    66666666666666666666666666666666666dddddddddddddddddddddd66666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddd666666666666666666666
    666666666666666666666666666666666ddddddddddddddddddddddddd666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddd66666666666666666666
    66666666666666666666666666666666ddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddd6666666666666666666
    666666666666666666666666666666ddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddd666666666666666666
    6666666666666666666666666666dddddddddddddddddddddddddddddddddd66666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddddd66666666666666666
    66666666666666666666666666dddddddddddddddddddddddddddddddddddddd66666666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddd666666666666666
    666666666666666666666666dddddddddddddddddddddddddddddddddddddddddd66666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddd66666666666666
    6666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddd6666666666666
    66666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddd666666666666
    66666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddd666666666666
    666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666
    6666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666
    66666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666
    666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666
    6666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666
    66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666
    666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666
    6ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
Nova = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . 1 . . . . . 
    1 1 . . . . . . . 1 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 . . . . . 1 1 . . . . . 
    . . . 1 . . . . . 1 . . . . . . 
    . . . 1 . . . . . 1 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Nova, 100, 0)
StartLevel()
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    let text: Sprite = null
    value = sprites.create(img`
        f 5 5 5 5 5 5 f f 5 5 5 5 5 5 f 
        5 f 5 5 5 5 5 f f 5 5 5 5 5 f 5 
        5 5 f 5 5 5 5 f f 5 5 5 5 f 5 5 
        5 5 5 f 5 5 5 f f 5 5 5 f 5 5 5 
        5 5 5 5 f 5 5 f f 5 5 f 5 5 5 5 
        5 5 5 5 5 f 5 f f 5 f 5 5 5 5 5 
        5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
        5 5 5 5 5 f 5 f f 5 f 5 5 5 5 5 
        5 5 5 5 f 5 5 f f 5 5 f 5 5 5 5 
        5 5 5 f 5 5 5 f f 5 5 5 f 5 5 5 
        5 5 f 5 5 5 5 f f 5 5 5 5 f 5 5 
        5 f 5 5 5 5 5 f f 5 5 5 5 5 f 5 
        f 5 5 5 5 5 5 f f 5 5 5 5 5 5 f 
        `, SpriteKind.info)
    tiles.placeOnTile(text, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
Curerent_levl = 0
game.onUpdate(function () {
    Nova.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . 1 . . . . . 
        1 1 . . . . . . . 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 f 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . . . . . 1 1 . . . . . 
        . . . 1 . . . . . 1 . . . . . . 
        . . . 1 . . . . . 1 . . . . . . 
        `)
    if (true) {
        Nova.ay = 200
    } else {
        Nova.ay = 200
    }
    if (Nova.vx < 0 || Nova.isHittingTile(CollisionDirection.Left)) {
        Nova.image.flipX()
        Nova.setImage(Nova.image)
    }
})
