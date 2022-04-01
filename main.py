def on_gesture_tilt_left():
    global Ghost, Ghost_Bullet
    Ghost = randint(0, 1)
    if Ghost == 1:
        Ghost_Bullet = game.create_sprite(Player.get(LedSpriteProperty.X),
            Player.get(LedSpriteProperty.Y))
        Ghost_Bullet.delete()
        Player.delete()
        basic.show_string("You are killed by ghost.")
        game.game_over()
    else:
        game.pause()
        game.resume()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_a():
    Player.change(LedSpriteProperty.X, -1)
    music.play_melody("C5 - - - - - - - ", 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Recoil, Recoil_dummy, Bullet, Player, Enemy
    Recoil = randint(0, 1)
    if Recoil == 1:
        Player.delete()
        Recoil_dummy = game.create_sprite(Player.get(LedSpriteProperty.X), 4)
        basic.show_string("You are killed by heavy recoil.")
        game.game_over()
    else:
        Bullet = game.create_sprite(Player.get(LedSpriteProperty.X), 3)
        basic.pause(250)
        for index in range(5):
            if Bullet.is_touching(Enemy):
                Player.delete()
                Enemy.delete()
                Bullet_from_enemy.delete()
                music.play_melody("E G F G A F A G ", 296)
                game.add_score(1)
                Bullet.delete()
                Player = game.create_sprite(2, 3)
                Enemy = game.create_sprite(0, 0)
            elif Bullet.is_touching(Bullet_from_enemy):
                Bullet_from_enemy.delete()
                Bullet.delete()
            else:
                Bullet.change(LedSpriteProperty.Y, -1)
                basic.pause(250)
        Bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Player.change(LedSpriteProperty.X, 1)
    music.play_melody("C5 - - - - - - - ", 500)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    global Assassin, Assassins_bulletknife
    Assassin = randint(0, 1)
    if Assassin == 1:
        Assassins_bulletknife = 0
    else:
        pass
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

Recoil_enemy = 0
Enemy_speed = 0
sprite = 0
Assassins_bulletknife = 0
Assassin = 0
Bullet_from_enemy: game.LedSprite = None
Bullet: game.LedSprite = None
Recoil_dummy: game.LedSprite = None
Recoil = 0
Ghost_Bullet: game.LedSprite = None
Ghost = 0
Enemy: game.LedSprite = None
Player: game.LedSprite = None
for index2 in range(4):
    basic.show_leds("""
        . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
    """)
    basic.show_leds("""
        # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
    """)
basic.show_string("Wellcome")
basic.show_leds("""
    # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
""")
basic.show_leds("""
    . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
""")
basic.show_string("to")
basic.show_leds("""
    # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
""")
basic.show_leds("""
    . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
""")
basic.show_string("Error 404")
Player = game.create_sprite(2, 3)
music.play_melody("B A G B E C5 E C5 ", 500)
Enemy = game.create_sprite(0, 0)

def on_every_interval():
    game.add_score(1)
loops.every_interval(60000, on_every_interval)

def on_forever():
    global sprite, Enemy_speed, Recoil_enemy, Enemy, Bullet_from_enemy
    for index3 in range(4):
        sprite = randint(0, 1)
        if sprite == 0:
            Enemy.change(LedSpriteProperty.X, 1)
            Enemy_speed = randint(0, 2)
            if Enemy_speed == 0:
                basic.pause(100)
            elif Enemy_speed == 1:
                basic.pause(250)
            else:
                basic.pause(500)
        else:
            Recoil_enemy = randint(0, 1)
            if Recoil_enemy == 1:
                Enemy.delete()
                game.add_score(1)
                Enemy = game.create_sprite(0, 0)
            else:
                Bullet_from_enemy = game.create_sprite(Enemy.get(LedSpriteProperty.X), 1)
                basic.pause(500)
                Enemy.change(LedSpriteProperty.X, 1)
                for index4 in range(4):
                    Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                    basic.pause(250)
                    if Bullet_from_enemy.is_touching(Player):
                        Player.delete()
                        Enemy.delete()
                        music.play_melody("E B C5 A B G A F ", 300)
                        music.play_melody("E - - - - - - - ", 103)
                        basic.show_icon(IconNames.SMALL_HEART)
                        basic.show_icon(IconNames.HEART)
                        basic.show_icon(IconNames.SMALL_HEART)
                        basic.show_string("Thank you for supporting this game.")
                        basic.show_string("Made by DanielY121")
                        basic.pause(250)
                        game.game_over()
                Bullet_from_enemy.delete()
    for index5 in range(4):
        sprite = randint(0, 1)
        if sprite == 0:
            Enemy.change(LedSpriteProperty.X, -1)
            Enemy_speed = randint(0, 2)
            if Enemy_speed == 0:
                basic.pause(100)
            elif Enemy_speed == 1:
                basic.pause(250)
            else:
                basic.pause(500)
        else:
            Recoil_enemy = randint(0, 1)
            if Recoil_enemy == 1:
                Enemy.delete()
                game.add_score(1)
                Enemy = game.create_sprite(0, 0)
            else:
                Bullet_from_enemy = game.create_sprite(Enemy.get(LedSpriteProperty.X), 1)
                basic.pause(500)
                Enemy.change(LedSpriteProperty.X, -1)
                for index6 in range(4):
                    Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                    basic.pause(250)
                    if Bullet_from_enemy.is_touching(Player):
                        Player.delete()
                        Enemy.delete()
                        music.play_melody("E B C5 A B G A F ", 300)
                        music.play_melody("E - - - - - - - ", 103)
                        basic.show_icon(IconNames.SMALL_HEART)
                        basic.show_icon(IconNames.HEART)
                        basic.show_icon(IconNames.SMALL_HEART)
                        basic.show_string("Thank you for supporting this game.")
                        basic.show_string("Made by DanielY121")
                        basic.pause(250)
                        game.game_over()
                Bullet_from_enemy.delete()
basic.forever(on_forever)
