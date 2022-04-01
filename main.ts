input.onGesture(Gesture.TiltLeft, function () {
    Ghost = randint(0, 1)
    if (Ghost == 1) {
        Ghost_Bullet = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
        Ghost_Bullet.delete()
        Player.delete()
        basic.showString("You are killed by ghost.")
        game.gameOver()
    } else {
        game.pause()
        game.resume()
    }
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
    music.playMelody("C5 - - - - - - - ", 500)
})
input.onButtonPressed(Button.AB, function () {
    Recoil = randint(0, 1)
    if (Recoil == 1) {
        Player.delete()
        Recoil_dummy = game.createSprite(Player.get(LedSpriteProperty.X), 4)
        basic.showString("You are killed by heavy recoil.")
        game.gameOver()
    } else {
        Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
        basic.pause(250)
        for (let index = 0; index < 5; index++) {
            if (Bullet.isTouching(Enemy)) {
                Player.delete()
                Enemy.delete()
                Bullet_from_enemy.delete()
                music.playMelody("E G F G A F A G ", 296)
                game.addScore(1)
                Bullet.delete()
                Player = game.createSprite(2, 3)
                Enemy = game.createSprite(0, 0)
            } else if (Bullet.isTouching(Bullet_from_enemy)) {
                Bullet_from_enemy.delete()
                Bullet.delete()
            } else {
                Bullet.change(LedSpriteProperty.Y, -1)
                basic.pause(250)
            }
        }
        Bullet.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    music.playMelody("C5 - - - - - - - ", 500)
})
input.onGesture(Gesture.TiltRight, function () {
    Assassin = randint(0, 2)
    if (Assassin == 1) {
        Assassins_knife = game.createSprite(4, 3)
        Player.delete()
        Assassins_knife.delete()
        Assassins_knife = game.createSprite(0, 3)
        basic.showString("You are killed by assassin’s knife.")
        game.gameOver()
    } else if (Assassin == 0) {
        Player.delete()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # #
            . # . . #
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . #
            . . # # #
            # # # . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # .
            . # # # #
            # # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # # # # #
            # . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `)
        basic.showString("You are killed by assassin’s bullet.")
        game.gameOver()
    } else {
        game.pause()
        game.resume()
    }
})
let Recoil_enemy = 0
let Enemy_speed = 0
let sprite = 0
let Assassins_knife: game.LedSprite = null
let Assassin = 0
let Bullet_from_enemy: game.LedSprite = null
let Bullet: game.LedSprite = null
let Recoil_dummy: game.LedSprite = null
let Recoil = 0
let Ghost_Bullet: game.LedSprite = null
let Ghost = 0
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
basic.showString("Never gonna give you up")
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showString("Wellcome")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showString("to")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showString("Error 404")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showString("Bullet Art Online ")
Player = game.createSprite(2, 3)
music.playMelody("D E F D G C F C ", 200)
Enemy = game.createSprite(0, 0)
loops.everyInterval(60000, function () {
    game.addScore(1)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, 1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            Recoil_enemy = randint(0, 1)
            if (Recoil_enemy == 1) {
                Enemy.delete()
                game.addScore(1)
                Enemy = game.createSprite(0, 0)
            } else {
                Bullet_from_enemy = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
                basic.pause(500)
                Enemy.change(LedSpriteProperty.X, 1)
                for (let index = 0; index < 4; index++) {
                    Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                    basic.pause(250)
                    if (Bullet_from_enemy.isTouching(Player)) {
                        Player.delete()
                        Enemy.delete()
                        music.playMelody("E B C5 A B G A F ", 300)
                        music.playMelody("E - - - - - - - ", 103)
                        basic.showIcon(IconNames.SmallHeart)
                        basic.showIcon(IconNames.Heart)
                        basic.showIcon(IconNames.SmallHeart)
                        basic.showString("Thank you for supporting this game.")
                        basic.showString("Made by DanielY121")
                        basic.pause(250)
                        game.gameOver()
                    }
                }
                Bullet_from_enemy.delete()
            }
        }
    }
    for (let index = 0; index < 4; index++) {
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, -1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            Recoil_enemy = randint(0, 1)
            if (Recoil_enemy == 1) {
                Enemy.delete()
                game.addScore(1)
                Enemy = game.createSprite(0, 0)
            } else {
                Bullet_from_enemy = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
                basic.pause(500)
                Enemy.change(LedSpriteProperty.X, -1)
                for (let index = 0; index < 4; index++) {
                    Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                    basic.pause(250)
                    if (Bullet_from_enemy.isTouching(Player)) {
                        Player.delete()
                        Enemy.delete()
                        music.playMelody("E B C5 A B G A F ", 300)
                        music.playMelody("E - - - - - - - ", 103)
                        basic.showIcon(IconNames.SmallHeart)
                        basic.showIcon(IconNames.Heart)
                        basic.showIcon(IconNames.SmallHeart)
                        basic.showString("Thank you for supporting this game.")
                        basic.showString("Made by DanielY121")
                        basic.pause(250)
                        game.gameOver()
                    }
                }
                Bullet_from_enemy.delete()
            }
        }
    }
})
