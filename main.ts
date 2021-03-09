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
    tiles.setTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(Nova, assets.tile`tile7`)
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    // Loop through each of the white blocks in the tile map.
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        // Remove the white block on the tile map and replace it with a transparent block.
        tiles.setTileAt(value2, assets.tile`transparency16`)
        // Create a sprite at this location on the map.
        tiles.placeOnTile(createInfoSprite(), value2)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Nova.vy == 0) {
        Nova.vy = -115
    }
})
// Flip the player image so it is facing the correct direction
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(facingLeft)) {
        facingLeft = true
        Nova.image.flipX()
    }
})
// Make an info block sprite
function createInfoSprite () {
    textBlock = sprites.create(assets.image`info block`, SpriteKind.info)
    textBlock.z = 10
    return textBlock
}
// Flip the player image so it is facing the correct direction
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facingLeft) {
        facingLeft = false
        Nova.image.flipX()
    }
})
// If the player falls onto the black bar at the bottom of the tile map then reset their position to the beginning of the map.  This does not reset the level, only the player's position.
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    Nova.setPosition(9, 5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.info, function (sprite, otherSprite) {
    otherSprite.destroy()
    // Display which info block is displayed
    // Display how many info blocks there are
    // Put in a new line
    game.showLongText("" + (infoIndex + 1) + " of " + textList.length + String.fromCharCode(10) + textList[infoIndex], DialogLayout.Full)
    // Increment the counter that tells us which info string to show
    infoIndex += 1
    // If this was the last info block then end the game
    if (infoIndex == textList.length) {
        game.over(true, effects.blizzard)
    }
})
let textBlock: Sprite = null
let facingLeft = false
let Nova: Sprite = null
let infoIndex = 0
let textList: string[] = []
game.setDialogTextColor(2)
// Show instructions on how to play the game.
game.showLongText("here's how to control the game. the A button makes you jump, the B button restarts the game, and when you move the joystick left you go left when you move the joystick right you go right and when you move the joystick up you jump.", DialogLayout.Full)
// Define an array of strings.  There is one value for each fact.  There should be the same number of info blocks on the tile map as there are in this array.
textList = [
"did you know that wolves don't bark and that that is the language of dog! ",
"did you know that when you take you dog for a walk it thinks that your going hunting! ",
"did you know that there are over 40 different species of wolf!",
"did you know that the first full moon in january is called a wolf moon!",
"did you know that wolves have a longer snouts and dogs do! ",
"did you know that wolves have stronger jaws and larger teeth than dogs do!",
"did you know that dogs have a rounder head than wolves do!",
"did you know that dogs have shorter legs than wolves do!",
"did you know that wolf pups open their eyes when they're two weeks old!",
"did you know that wolves and dogs milk have a smell about a hundred times greater than our sense of smell!!",
"did you know that newborn wolf pups need their mom for body heat!",
"did you know that each wolf cuz it's only unique howl!",
"did you know that usually won't hunt outside of their grounds!",
"did you know that pups play with \"toys\" made of dead animal bones or a peace of its fur! ",
"did you know that Elsa wolves walk with their tail and ears held high to show who's boss!",
"did you know that wolves can roam as far as 12 miles in one day!"
]
// Keep track of which info string from textList should be displayed.  Starts counting at zero.
infoIndex = 0
scene.setBackgroundImage(assets.image`background image`)
Nova = sprites.create(assets.image`Nova`, SpriteKind.Player)
facingLeft = false
controller.moveSprite(Nova, 100, 0)
Nova.ay = 200
scene.cameraFollowSprite(Nova)
StartLevel()
