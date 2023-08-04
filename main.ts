namespace SpriteKind {
    export const Pet = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Nicole.startEffect(effects.hearts, 500)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile61`, function (sprite, location) {
    game.setGameOverDialogWinText("You Win!!!")
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile50`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Nicole.startEffect(effects.hearts, 500)
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Nicole.isHittingTile(CollisionDirection.Bottom)) {
        Nicole.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile27`, function (sprite, location) {
    game.setGameOverDialogLoseText("Bummer.. try again :(")
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile41`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Nicole.startEffect(effects.hearts, 500)
    music.baDing.play()
})
let Nicole: Sprite = null
scene.setBackgroundImage(img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999991111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999911111111991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999911111111111111911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999911111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999111119999999999999999111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999991111111199999999999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999991111111199999999999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999111111111199111111999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999911111111111111111111111199999111111911111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111119999999111991111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff99999999999999999999999999999999999999999
    9999999991111111111111111111111111111111999999999991111111119999999999999999999999999999999999999999999999999999999999999999999999999999999fff77777777777777777fff99999999999999999999999999999999999999
    99999999111111111111111111111111111111111999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999ff77777777777777777777777ff999999999999999999999999999999999999
    99999999111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff777777777777777777777777777fff999999999999999999999999999999999
    9999999111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f777777777777777777777777777777777f99999999999999999999999999999999
    99999991111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999911199999999999999999999999ff77777777777777777777777777777777777ff999999999999999999999999999999
    9999999111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111119999999999999999999f777777777777777777777777777777777777777f99999999999999999999999999999
    999999911111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111199911111999999999f77777777777777777777777777773777777777777f9999999999999999999999999999
    9999999911111111111111111111111111111111999999999999999999999999999999999999999999999999999999999911111111111111111111119999999ff7777777777777777777777777777353777777777777ff99999999999999999999999999
    999999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999991111111111111111111111999999f77777777777777777777777777777773677777777777777f9999999999999999999999999
    99999999911111199911111111119111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111199f7777777777777777777777777777777767777777777777777f999999999999999999999999
    99999999999999999911111111119911111199999999999999999999999999999999999999999999999999999999999911111111111111111111111111199f7777777777777777777777777777777777777777777777777f999999999999999999999999
    9999999999999999991111111119999111199999999999999999999999999999999999999999999999999999999999911111111111111111111111111119f777777777777773777777777777777777777777777777777777f99999999999999999999999
    999999999999999999911111119999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111999f77777777777777353777777777777777777777777777777777777f9999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199f7777777777777777367777777777777777777777777777777777777f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111191111999f7777777777777777677777777777777777777777777777777777777f999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999991119999999999999999999999999999991111111911111999999999f777777777777777777777777777777777777777777777777777777777f99999999999999999999
    999999999999999999999999999999999999999999999999999999999999999991111199991111999999999999999999999111111991111199999999f77777777777777777777777777777777777777777777777777777777777f9999999999999999999
    999999999999999999999999999999999999999999999999999999999999999991111111911111119999999999999999999911199999999999999999f77777777777777777777777777777777377777777777777777777777777f9999999999999999999
    999999999999999999999999999999999999999999999999999999999999999111111111111111111199999999999999999999999999999999999999f77777777777777777777777777777773537777777777777777777777777f9999999999999999999
    99999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999f7777777777711177777771111117777773677777777777777777777777777f999999999999999999
    99999999999999999999999999999999999999999999999999999999991111111111111111111111111119999999999999999999999999999999999f7777777777711177777111111117777776777777777777777773777777777f999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999999111999999999999999999999f777777777777111777771111111177777777777777777777777353777777777f99999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999999111999999999999999999999f777777777777111777771117777777777777777777777777777736777777777f99999999999999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111111119999999999111999999999999999999999f777777777777111777771117777777777777777777777777777767777777777f99999999999999999
    ffffffffffffff9999999999999999999999999999999999999999999999111111111111111111111199999111199911199999999999999111199f77777777777771117777711177777777777777777777777777777777777777777f9999999999999999
    77777777777777fff99999999999999999999999999999999999999999999911111199111119999999999991111999111999999fffffff1111111f77711117777771117777711177777777777777777777777777777777777777777f999999999999ffff
    77777777777777777ff999999999999999999999999999999999999999999911111999911199999999999991111999111999fff77777771111111177711111117771117777711177777777777777777777777777777777777777777fffffffffffffffff
    7777777777777777777fff999999999999999999999999999999999999999999999999911199999999999991111199111fff7777777771111111117711111111177111777771117777777777777777777777777777777777777777777777777777777777
    7777773777777777777777f999999999999999999999999999999999999999999999999999999999999999911111991117777777777771111711117711111111177111777771117777777777777777777777777777777777777777777777777777777777
    77777353777777777777777ff9999999999999999999999999999999999999999999999999999999999999911111991117711111111771111771117711177111177111777771117777777777777777777777777777777777777777777777777777777777
    7777773677777777777777777f9999999999999999999999999999999999999999999999999999999999999111111f1117711111111771117777777711177711177111777771111111777777777777777777777777777777777777777777777777777777
    77777767777777777777777777f99999999999999999999999999999999999999999999999999999999999911111171117711111111771117777777711177711177111777771111111777777777777777777777777777777777777777777777777777777
    777777777777777777777777777ff999999999999999999999999999999999999999999999999999999999911111171117777111777771117777777711177711177111777771111111777777777777777777777777777777777777777777777777777777
    77777777777777777777773777777f99999999999999999999999999999999999999999999999999999999911111111117777111777771117777777711177711177111777777111777777777777777777777777777777777777777777777777777777777
    777777777777777777777353777777f99999999999999999999999999999999999999999999999999999999111111111177771117777711177777777111777111771117777771117777777777777777777777777777777777777ffffffff777777777777
    7777777777777ffff7777736777777f9999999999999999999999999999999999999999999999999999999911171111117777111777771117777777711177711177111777777111777777777777777777777777777777fffffff33333333ffffff777777
    7777777777fff6666fff77677777777f999999999999999999999999999999999999999999999999999999f11177111117777111777771117777777711177711177111711111111777777777777777777777777777fff333333333333333333333fffff7
    7777777777f666666666ff7777777777f9999999999999999999999999999999999999999999999999999f7111771111177771117777711177777777111777111771111111111117777777777777777777777777ff33333333333333333333333333333f
    777777777ff66666666666f7777777777f999999999999999999999999999999999999999999999999999f7111777111177771117777711177777777111777111771111111111117777777777777777777777fff33333333333333333333333333333333
    77777777ff6666666666666ff77777777f99999999999999999999999999999999999999999999999999f771117771111777711177777111777111771117711117711111117711111111777777777777777ff33333333333333333333333333333333333
    77777777f666666666666666f777777777f999999999999999999999999999999999999999999999999f77711177771117777111777771111771117711111111177111117b77111111117777777777777ff3333333333333333333333333333333333333
    77777777fffff66666666666f7777777777f99999999999999999999999999999999999999999999999f777111777711177771117777711111711177111111117777b7777b77b111111177777777777ff333333333333333333333333333333333333333
    777777ff6666fff666666666f7777777777f999999999999fffffffffffff999999999999999999999f7777111777711177771117777771111111177111111117777b7777b77b1111b777777777777f33333333333393333333333333333333333333333
    77777ff66666666f66666666f7777777777f9999999999ff7777777777777ff9999999999999999999f777711177777b7711111111177771111111777b1111b77777b7777b77b7777b7777777777ff333333333333959333333333333333333333333333
    7777f66666666666f666666f6fff77777777f9999999ff77777777777777777ff99999999999999999f77777b777777b771111111117777b111111777b7777b77777b7777777b7777b777777777f33333333333333396333333333333333333333333333
    777ff666666666666f6666666666fff77777f99999ff777777777777777777777ff99999999999999f777777b777777b771111111117777b7777b7777b7777b7777777777777b7777bb777777ff333333333333333363333333333333333333333333333
    77ff66666666666666666666666666f777777f999f7777777777777777777777777f9999999999999f777777b777777b777b77777b77777b7777b7777b7777b7777777777777777777777777f33333333333333333333333333333333333333333333333
    7ff6666666666666666666666666666f77777f99f777777777777777777777777777f999999999999f77777777777777777b77777b77777b7777b7777777777777777777777777777777777f333333333333333333333333333333333333333333333333
    7f666666666666666666666666666666f7777f9f77777777377777777777777777777f9999999999f777777777777777777b77777b77777b77777777777777777777777777777777777777f3333333333333333333333333333333333333333333333333
    ff666666666666666666666666666666f77777f7777777735377777777777777777777f999999999f77777777777777777777777777777777777777777777777777777777777777777777f33333339333333333333333333333333333333333333333333
    f6666666666666666666666666666666f7777ff77777777736777777777777777777777f99999999f7777777777777777777777777777777777777777777777777777777777777777777f333333395933333333333333333333333333333333333333333
    f66666ffffffff6666666666fff66666f77777777777777767777777777777777777777f99999999f777777777773777777777777777777777777777777777777777777777777777777f3333333339633333333333333333333333333333333333333333
    6666fff666ffffff66666666666f6666f777777777777777777777777777737777777777f9999999f77777777773537777777777777777777777777777777777777777777777777777f33333333336333333333333333333333333333333333333333333
    66fff7f66ff7777ff6666666666ff666f777777777777777777777777777353777777777f9999999f7777777777736777777777777777777777777777377777777777777777777777f333333333333333333333333333333333333333333333333333333
    6ff777f6ff7777ffbff666666666f666f7777777777777777777777777777367777777777f999ff9f777777777776777777777777777777777777777353777777777777777777777f3333333333333333333333393333333333333333333333333333333
    6f7777f6f77777fbbbf666666666f66ff7777777777777777777777777777677777777777f9ff77ff77777777777777777777777777777777777777773677777777777777777777f33333333333333333333333959333333333333333333333333333333
    f777777ff7777fbbbbfff6666666ff6f77777777777777777777377777777777777777777ff77777f7777777777777777777777773777777777777777677777777777777777777f333333333333333333333333396333333333333333333333333333333
    f777777ff777ffbbbbbbff66666ff6fff77777777ff7777777735377777777777777777777f7777777777777777777777777777735377777777777777777777777777777777777f333333333333333333333333363333333333333333333333333333333
    7777777ff77fbbbbbfff7f6666f666666f777ffff66fff77777736777777777777777777777777777777777777777777777777777367777777777777777777777777777777777f3333333333393333333333333333333333333333333333333333333333
    7777777f777fbbbff666ff666f66666666f7f66666666ff777776777777777777777777777777777777777777777777777777777767777777777777777777777777777777777f33333333333959333333333333333333333333333333333333333333333
    77777777777fbff666666f66f6666666666f66666666666f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f33333333333396333333333333333333333333333333333333333333333
    7777777777fbf666666666ff66666666666f666666666666f777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f333333333333363333333333333333333333333333333333333333333333
    7777777777fff66666666666f6666666fffff66666666666f77777777777777777777777777777777fffff77777777777777777777777777777777777777777777777777777f333333933333333333333333333333333333333333333333333333333333
    777777777ff66666666666666666ffff66666f6666666666f7fffff777777777777777777777777fff666fff7777ffffff7777777777777777777777777777777777777777f3333339593333333333333333333333333333333333333333333333333333
    777777777f66666666666666666f6666666666fff6666666ff66666ff777777777777777777777ff6666666f7fff666666ff77777777777777777777777777777777777777f3333333963333333333333333333333333333333333333333333333333333
    7777777ff66666666666666666f66666666666f77f666666f66666666ff77777777777777777ff6666666666ff6666666666ff77777777777777777777777777777777777f33333333633333333333333333333333333333333333333333333333333333
    777777f6666666666666666666666666666666f777f666666f66666666f7777777777777777ff666666666666f666666666666ffff7777777777777777777777777777777f33333333333333333333333333333333333333333333333333333333333333
    7777ff6666666ffffff66666666666666666666ffff66666666666666667777777777777777f6666666666666f6666666666666666f77777777777777777777777777777f333333333333333333333333333333333333333333333333333333333333333
    777f66666666f666666ff666666666666666666f666f666666666666666f777777777777777f66666666666666666666666666666f777777777777777777777777777777f333333333333333333333333333333333333333333333333333333333333333
    777f6666666f6666666666666666666666666666f6666666666fff66666677777777777777f66ffff6666666666666ffff666666f7777777777777777777777777777777f333333333333333333333333333333333333333333333333333333333333333
    7777f666666f6666666666666666666666666666f666666666666ff6666fff77777777777ffff777fffff66666ffff6666f666ff77777777777777777777777777777777f333333333333333333333339333333333333333333333333333333333333333
    77777ffffff66666666666666666fff666666666f6666666666666f6666ff77777777777777777777777ff66ff666666666f6f7777777777777777777777777777777777f333333333333333333333395933333333333333333333333333333333333333
    777777fbbf66666666666fff66ff77ff66666666f66666666666666ff666f7777ffffff7777777777777ff66666666666666f77777777777777777777777777777777777f333333333333333333333339633333333333333333333333333333333333333
    77777fbbbf6666666666f7ffffff7777f66666666f666666666666666f6f7777f666666f77777777777ff666666666666666f77777777777777777777777777777777777f333333333333333333333336333333333333333333333333333333333333333
    77777fbbbf666666666f77fbbbbf77777f6666666ffff666666666666677777ff6666666fffffff777ff6666666666666666f777777777777777777777777777ffffffff3333333333333333333333333333333333333333333333333333333333333333
    77777fbbbf66666666f777fbbbbf7777ff666666ff777f666fff666666f777ffffff6666666666fff7f66666666666666666f7777777777777777777777fffff33333333ffff333333333333333333333333333333333333333333333333333333333333
    7777fbbbbf66666666f777fbbbbf777f66f66666f7777fffff77ff6666f7fff66666ff6666666666fff666666666666666666f777777777777777777fff33333333333333333ff3333333333333333333333333333333333333333333333333333333333
    7777fbbbbbf6666666f7777fbbbf777f66f6666f77777fbbbf7777f666fff66666666666666666666f6666f66666666666666f77777777777777ffff3333333333333333333333ff33333333333333333333333333333333333333333333333333333333
    7777fbbbbbf666666f77777fbbbf777f66ff666f7777fbbbbf7777f6666f666666666666666666666f6666ff6666666666666f777777777777ff3333333333333333333933333333ff333333333333333333333333333333333333333333333333333333
    7777fbbbbf7f66666f77777fbbbbf7f6666f666f7777fbbbbf77777f666f6666666666666666ffffff666fbbffffff6666666f7777777777ff33333333333333333333959333333333f33333333333333333333333333333333333333333333333333333
    7777fbbbbf7f6666f777777fbbbbf7f666ff66f77777fbbbbf77777f666f66666666666666666667f6666fbbbbff77ff66666f777777777f33333333333333333333333963333333333f3333333333333333333333333333333333333333333333333333
    7777fbbbbf77f666f777777fbbbbf7f66f7f66f77777fbbbbf777777f66f6666666666666666666ff6666fbbbbf7777ff6666f77777777f3333333333333333333333336333333333333f333333333333333333333333333333333333333333333333333
    7777fbbbbf777f66f777777fbbbbf7f66f7f6f777777fbbbbbf7777ff6f66666666666666666666666666fbbbf7777777f666f777777ff333333393333333333333333333333333333333f33333333333333333333333333333333333333333333333333
    7777fbbbbf7777f6f777777fbbbbf7f6f77ff77777777fbbbbf777ff6f6666666666666666666666f666fbbbbf77777777f66f77777f333333339593333333333333333333333333333333f3333333333333333333333333333333333333333333333333
    7777fbbbbf77777f7777777fbbbbf77f7777777777777fbbbbf777f6666666666666666666666666f66ffbbbbf777777777f6f7777f33333333339633333333333333333333933333333333f333333333333333333333333333333333333333333333333
    7777fbbbbf77777f7777777fbbbbf7777777777777777fbbbbf777f66666666666fff6666666666f66f77fbbbf777777777f6f777f333333333336333333333333333333339593333333333f333333333333333333333333333333333333333333333333
    7777fbbbbf7777777777777fbbbbf7777777777777777fbbbbf777f666666fffff7fbb6ffff6666f6f777fbbbf7777777777f777f33333333333333333333333333333333339633333333333f33333333333333333333333333333333333333333333333
    7777fbbbbf7777777777777fbbbbf7777777777777777fbbbbbf77f66666ff77777fbbbbf7ff6666ff777fbbbf7777777777777f3333333333333333333333339333333333363333333333333f3333333333333333333333333333333333333333333333
    77777fbbbbf777777777777fbbbbf7777777777777777fbbbbbf77f666fff777777fbbbbf77ff6666f777fbbbf777777777777f333333333333333333333333959333333333333333333333333f333333333333333333333333333333333333333333333
    77777fbbbbf777777377777fbbbbf77777737777777777fbbbbf77f66ff77777777fbbbbf777ff666f777fbbbf777777777777f333333333333333333333333396333333333333333333333333f333333333333333333333333333333333333333333333
    77777fbbbbff77773537777fbbbbf77777353777777777fbbbbbf7f6ff777777777fbbbbf7777f666f777fbbbf77777777777f33333333333333333333333333633333333333333333333333333f33333333333333333333333333333333333333333333
    77777fbbbbbf77777367777fbbbbf77777736777777777fbbbbbf7fff7777777777fbbbbf7777f66ff777fbbbbf777777777f333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333333
    77777fbbbbbbf7777677777fbbbbf777777677777777777fbbbbf77f7777777777fbbbbbf7777f66f7777fbbbbf77777777f33333339333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333333
    77777fbbbbbbf7777777777fbbbbf777777777777777777fbbbbbf777777777777fbbbbbf7777f66f7777fbbbbf77777777f33333395933333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333333
    777777fbbbbbf7777777777fbbbbf777777777777777777fbbbbbf777777777777fbbbbf77777f6f77777fbbbbf7777777f333333339633333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333333
    777777fbbbbbbf777777777fbbbbf7777777777777377777fbbbbbf77777777777fbbbbf777777ff77777fbbbbf7777777f3333333363333333333333333333333333333333333333333333333333f333333333333333333333333333333333333333333
    7777777fbbbbbff77777777fbbbbf7777777777773537777fbbbbbbf7777777777fbbbbf777777f777777fbbbbbf77777f33333333333333333333333333333333333333333333333333333333333ff33333333333333333333333333333333333333333
    7777777fbbbbbbf77777777fbbbbf77777777777773677777fbbbbbf777777777fbbbbbf777777f777777fbbbbbf77777f333333333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333
    7777777fbbbbbbbf7777777fbbbbf777777777777767777777fbbbbbf77777777fbbbbf777777777777777fbbbbbf777f3333333333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333
    77777777fbbbbbbf777777fbbbbf7777777777777777777777fbbbbbbf7777777fbbbbf777777777777777fbbbbbf777f3333333333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333
    777777777fbbbbbbff7777fbbbbf77777777777777777777777fbbbbbbf777777fbbbbf777777777777777fbbbbbf77f33333333333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333
    777777777fbbbbbbbff777fbbbbf77777777777777777777777fbbbbbbbf77777fbbbbf7777777777777777fbbbbbff333333333333333333333333333333333333333333333333333333333333333f33333333333333333333333333333333333333333
    7777777777fbbbbbbbff77fbbbbf77777777777777777777777fbbbbbbbf7777ffbbbbf7777777777777777fbbbbbbf3333333333333333333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333
    77777777777fbbbbbbbff7fbbbbf777777777777777777777777fbbbbbbbf777fbbbbf777777777777777777fbbbbbf3333333333333333333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333
    777777777777fbbbbbbbfffbbbbf7777777777777777777777777ffbbbbbbff7fbbbbf7777777777777777777fbbbbbf333333333333333333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333
    7777777777777fbbbbbbbfbbbbbf77777777777777777777777777fbbbbbbbfffbbbff77777777777777777777fbbbbbf33333333333333333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333
    77777777777777fbbbbbbfbbbbbf777777777777777777777777777fbbbbbbbbfbbbf7777777777777777777777ffbbbbff333333333333333333333333333333333333333333333333333333333333f3333333333333333333333333333333333333333
    `)
tiles.setTilemap(tilemap`level_0`)
Nicole = sprites.create(img`
    .............
    ..ffffff.....
    .ffffffcff...
    ffffffbffff..
    fffbfffffff..
    cccffffe4ff..
    fffffee444ff.
    f44fe444444..
    f4ef41f441f..
    ff4441f441f..
    fff43344443..
    fffe444444f..
    fff777777ff..
    fff466666fff.
    f.44666664ff.
    ..446666644..
    .4499999944..
    .44696969644.
    .44666666644.
    .46666666644.
    ...ff..ff....
    ...ff..ff....
    ...ff..ff....
    ...ff..ff....
    ...ccc.ccc...
    .............
    `, SpriteKind.Player)
let Dog = sprites.create(img`
    .............
    .............
    .............
    .............
    .............
    .............
    .............
    .............
    .............
    .............
    ..f5...f5....
    ..f54..f54...
    ..f545.f545..
    ..f55555555..
    ..f55bf551f..
    ...f51f555ee.
    5..f5555555e.
    55.f5555f555.
    f556ff555ff5.
    f55566f5555..
    .555566666f..
    .f55555555f..
    .f55ff555ff..
    .f5f..f55f...
    .fff...fff...
    .............
    `, SpriteKind.Pet)
Nicole.setPosition(20, 85)
Dog.setPosition(10, 85)
controller.moveSprite(Nicole, 100, 0)
scene.cameraFollowSprite(Nicole)
Dog.follow(Nicole)
music.playMelody("C C5 D B E A F G ", 320)
game.onUpdate(function () {
    Nicole.ay = 400
    if (Dog.x < scene.cameraProperty(CameraProperty.Left)) {
        Dog.right = Nicole.x
    }
})
