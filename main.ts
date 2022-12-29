namespace SpriteKind {
    export const donttouch = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const MidEnemy1 = SpriteKind.create()
    export const Enemy22 = SpriteKind.create()
    export const Enemy12 = SpriteKind.create()
    export const Cheatcode = SpriteKind.create()
    export const MidEnemy2 = SpriteKind.create()
    export const trigger = SpriteKind.create()
    export const LargeThreat1 = SpriteKind.create()
    export const Trigger2 = SpriteKind.create()
    export const LargeThreat2 = SpriteKind.create()
    export const Kanye = SpriteKind.create()
    export const Beam = SpriteKind.create()
    export const HeadYe = SpriteKind.create()
    export const death = SpriteKind.create()
    export const ducky = SpriteKind.create()
    export const snake = SpriteKind.create()
    export const collectable = SpriteKind.create()
    export const Bazooka = SpriteKind.create()
    export const LaserGunThing = SpriteKind.create()
    export const Shotgun = SpriteKind.create()
    export const Blast = SpriteKind.create()
    export const her = SpriteKind.create()
    export const code1 = SpriteKind.create()
    export const code2 = SpriteKind.create()
    export const fakecodeblock = SpriteKind.create()
    export const Code3 = SpriteKind.create()
    export const code4 = SpriteKind.create()
    export const code5 = SpriteKind.create()
    export const FinalCode = SpriteKind.create()
    export const TrueBoss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.LargeThreat1, SpriteKind.Blast, function (sprite, otherSprite) {
    LargeZombo1.destroy()
    bullet.destroy()
    info.changeScoreBy(5)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.code5, function (sprite, otherSprite) {
    game.showLongText("I told you to stop.", DialogLayout.Bottom)
    Crash.sayText("get out of my game.")
})
controller.combos.attachCombo("d+a", function () {
    info.player2.changeScoreBy(350)
    game.showLongText("Welcome to the Game Manual!", DialogLayout.Full)
    game.showLongText("To reset zombie spawn press UP 3 times", DialogLayout.Full)
    game.showLongText("To spawn The (Not-So) Secret Bazooka input B>A>B>B>A+B", DialogLayout.Full)
    game.showLongText("To fire the Bazooka input UP>UP>B+A", DialogLayout.Full)
    game.showLongText("Enter input B>B>UP>DOWN to spawn The Laser Gun", DialogLayout.Full)
    game.showLongText("To shoot the Laser press B and RIGHT at the same time", DialogLayout.Full)
    game.showLongText("Input B>Z>RIGHT>DOWN>LEFT to spawn the shotgun", DialogLayout.Full)
    game.showLongText("Press A and LEFT at the same time to shoot the shotgun", DialogLayout.Full)
    game.showLongText("All bonus weapons disappear after 1 shot, but respawn later", DialogLayout.Full)
    game.showLongText("Every time you spawn a new weapon there is a chance they will all disappear forever", DialogLayout.Full)
    game.showLongText("Input the Konami code to [37707404. Closing program.]", DialogLayout.Full)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy12, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    MidZomb1 = sprites.create(assets.image`Mid Zombie`, SpriteKind.MidEnemy1)
    tiles.placeOnRandomTile(MidZomb1, assets.tile`zomb spawn`)
    pause(2000)
    pause(1000)
    zombietrigger = sprites.create(assets.image`ZombieTrigger`, SpriteKind.trigger)
    tiles.placeOnRandomTile(zombietrigger, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.code1, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        tiles.setCurrentTilemap(tilemap`Jamie`)
        scene.setBackgroundImage(assets.image`Room`)
    }
    console.log("What do you think you're doing?")
    CodeBlock2 = sprites.create(img`
        .cccccccccccccc.
        cb777777777777bc
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c76666666666667c
        c66666666666666c
        c67777777777776c
        c6c666c66c666c6c
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f67777777777776f
        f6c666c66c666c6f
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f6ffffffffffff6f
        ffffffffffffffff
        `, SpriteKind.code2)
    animation.runImageAnimation(
    CodeBlock2,
    assets.animation`Code`,
    200,
    true
    )
    CodeBlock2.setPosition(10, 100)
    CodeBlock1.destroy()
    FakeCode1 = sprites.create(img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.fakecodeblock)
    animation.runImageAnimation(
    FakeCode1,
    assets.animation`Code`,
    200,
    true
    )
    FakeCode1.setPosition(146, 27)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.Code3, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        tiles.setCurrentTilemap(tilemap`Jamie`)
        scene.setBackgroundImage(assets.image`Room`)
    }
    console.log("Everything was erased. You need to stop.")
    CodeBlock4 = sprites.create(img`
        .cccccccccccccc.
        cb777777777777bc
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c76666666666667c
        c66666666666666c
        c67777777777776c
        c6c666c66c666c6c
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f67777777777776f
        f6c666c66c666c6f
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f6ffffffffffff6f
        ffffffffffffffff
        `, SpriteKind.code4)
    animation.runImageAnimation(
    CodeBlock4,
    assets.animation`Code`,
    200,
    true
    )
    CodeBlock4.setPosition(146, 100)
    CodeBlock3.destroy()
    FakeCode3 = sprites.create(img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.fakecodeblock)
    animation.runImageAnimation(
    FakeCode3,
    assets.animation`Code`,
    200,
    true
    )
    FakeCode3.setPosition(10, 27)
})
sprites.onOverlap(SpriteKind.LargeThreat1, SpriteKind.Trigger2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    LargeZombo1.setImage(assets.image`Zombie Large Bite`)
    pause(500)
    info.player2.setLife(3)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Blast, function (sprite, otherSprite) {
    SmallZomb1.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun2.setImage(assets.image`Gun Right Fire`)
    bullet = sprites.createProjectileFromSprite(assets.image`Bullet Left`, Gun2, -300, -10000)
    music.knock.play()
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Trigger2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    LargeZombo2.setImage(assets.image`ZombieAmirLargeAttack`)
    pause(500)
    info.player2.setLife(3)
    game.over(false, effects.slash)
})
controller.combos.attachCombo("urrdrldl", function () {
    tiles.setCurrentTilemap(tilemap`Jamie`)
    for (let index = 0; index < 4; index++) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Bazooka)
        sprites.destroyAllSpritesOfKind(SpriteKind.LaserGunThing)
        sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shotgun)
        sprites.destroyAllSpritesOfKind(SpriteKind.Kanye)
        sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
        sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    }
    scene.setBackgroundImage(assets.image`ConnectionTerminated`)
    timer.after(1000, function () {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 780, 780, 255, 255, 4000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        game.splash("Terminating Connection...", "A fatal error has occurred, please restart your system.")
        game.splash("Rebooting system...", "Please do not shut off your device...")
        info.stopCountdown()
        info.player2.setLife(404)
        info.player2.setScore(404)
        info.player1.setLife(404)
        info.player1.setScore(404)
        info.player3.setScore(404)
        info.player4.setLife(404)
        info.player3.setLife(404)
        info.player4.setScore(404)
        music.stopAllSounds()
        scene.setBackgroundImage(assets.image`Room`)
        me = sprites.create(img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `, SpriteKind.her)
        animation.runImageAnimation(
        me,
        assets.animation`her`,
        200,
        true
        )
        controller.moveSprite(me, 50, 50)
        game.splash("Please enable the console before any errors for a better fix in the future", "Press Enter to continue.")
        for (let index = 0; index < 4; index++) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Bazooka)
            sprites.destroyAllSpritesOfKind(SpriteKind.LaserGunThing)
            sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
            sprites.destroyAllSpritesOfKind(SpriteKind.Shotgun)
            sprites.destroyAllSpritesOfKind(SpriteKind.Kanye)
            sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
            sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
            sprites.destroyAllSpritesOfKind(SpriteKind.donttouch)
        }
        info.stopCountdown()
        timer.after(5000, function () {
            CodeBlock1 = sprites.create(img`
                .cccccccccccccc.
                cb777777777777bc
                c77777777777777c
                c77777777777777c
                c77777777777777c
                c77777777777777c
                c77777777777777c
                c77777777777777c
                c76666666666667c
                c66666666666666c
                c67777777777776c
                c6c666c66c666c6c
                f6c666cddc666c6f
                f6c6666cc6666c6f
                f6cccccccccccc6f
                f66666666666666f
                f67777777777776f
                f6c666c66c666c6f
                f6c666cddc666c6f
                f6c6666cc6666c6f
                f6cccccccccccc6f
                f66666666666666f
                f6ffffffffffff6f
                ffffffffffffffff
                `, SpriteKind.code1)
            animation.runImageAnimation(
            CodeBlock1,
            assets.animation`Code`,
            200,
            true
            )
            CodeBlock1.setPosition(146, 27)
        })
        info.stopCountdown()
    })
})
controller.combos.attachCombo("bbud", function () {
    console.log("Spawning Player 2...")
    console.log("Player 2 Spawned.")
    LaserGun = sprites.create(assets.image`LaserD`, SpriteKind.LaserGunThing)
    LaserGun.setPosition(145, 49)
    info.player2.changeScoreBy(500)
    if (randint(0, 20) == 0) {
        tiles.setWallAt(tiles.getTileLocation(9, 6), true)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb1.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
})
controller.combos.attachCombo("uuu", function () {
    music.setVolume(500)
    info.changeScoreBy(-10)
    for (let index = 0; index < 10; index++) {
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
        sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
        music.bigCrash.play()
        scene.cameraShake(100, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    timer.after(2000, function () {
        SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
        tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
        timer.after(2000, function () {
            SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
            tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
            timer.after(2000, function () {
                SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
                tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
                timer.after(2000, function () {
                    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
                    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
                })
            })
        })
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun1.setImage(assets.image`Gun Left Fire`)
    bullet = sprites.createProjectileFromSprite(assets.image`Bullet Right`, Gun1, 300, -10000)
    music.knock.play()
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.MidEnemy1, SpriteKind.Beam, function (sprite, otherSprite) {
    MidZomb1.destroy()
    info.changeScoreBy(2)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
controller.combos.attachCombo("uuddlrlrba", function () {
    game.showLongText("Inp(3)t(0):", DialogLayout.Full)
    console.log("Error Detected")
    game.showLongText("[Fixing e(7)ror...]", DialogLayout.Full)
    game.showLongText("[Fix complete.]", DialogLayout.Full)
    game.showLongText("Inputs:", DialogLayout.Full)
    game.showLongText("ASSBASS|*", DialogLayout.Full)
    game.showLongText("B   AR|#", DialogLayout.Full)
    game.showLongText("S>W>X>X|^", DialogLayout.Full)
    game.showLongText("C>S>S>X|^|-1", DialogLayout.Full)
    game.showLongText("37707404", DialogLayout.Full)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Enemy22, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    MidZomb2 = sprites.create(assets.image`ZombieAmirMedium`, SpriteKind.MidEnemy2)
    tiles.placeOnRandomTile(MidZomb2, assets.tile`zomb spawn2`)
    pause(2000)
    pause(1000)
    zombietrigger = sprites.create(assets.image`ZombieTrigger`, SpriteKind.trigger)
    tiles.placeOnRandomTile(zombietrigger, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.MidEnemy1, SpriteKind.Blast, function (sprite, otherSprite) {
    MidZomb1.destroy()
    bullet.destroy()
    info.changeScoreBy(2)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
controller.combos.attachCombo("a+b", function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    info.player3.setScore(11)
    info.player4.setScore(11)
    music.footstep.play()
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.Trigger2, function (sprite, otherSprite) {
    deathtrigger.destroy(effects.ashes, 100)
})
controller.combos.attachCombo("babba+b", function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Bazooka)
    BAZOOKA = sprites.create(assets.image`Bazooka`, SpriteKind.Bazooka)
    BAZOOKA.setPosition(80, 113)
    if (randint(0, 20) == 0) {
        tiles.setWallAt(tiles.getTileLocation(9, 6), true)
    }
})
info.player3.onScore(0, function () {
    Gun1.setPosition(200, 0)
    reloadspeech.sayText("Reloading...", 5000, false)
    timer.after(randint(1000, 6000), function () {
        Gun1.setPosition(20, 100)
        info.player3.setScore(10)
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    SmallZomb1.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
})
controller.combos.attachCombo("lddbldd", function () {
    console.log("Spotify Mode Active")
    scene.setBackgroundImage(assets.image`Spotify`)
    tiles.setCurrentTilemap(tilemap`Break`)
    game.splash("Want a break from the ads?", "Tap now to watch a video and get 30 minutes of ad free music.")
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Blast, function (sprite, otherSprite) {
    LargeZombo2.destroy()
    bullet.destroy()
    info.changeScoreBy(5)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Enemy12, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
})
scene.onHitWall(SpriteKind.Kanye, function (sprite, location) {
    game.showLongText("I miss the old Kanye. The X-ploding brains Kanye.", DialogLayout.Bottom)
    game.showLongText("But now that same Kanye", DialogLayout.Bottom)
    game.showLongText("Is eating Gore's Brains Kanye.", DialogLayout.Bottom)
    music.bigCrash.play()
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.player2.changeScoreBy(-1)
    Kanyeboss.sayText("And I'm Zomb-Ye West!", 2000, false)
    bullet.destroy()
})
sprites.onOverlap(SpriteKind.Enemy22, SpriteKind.Blast, function (sprite, otherSprite) {
    SmallZomb22.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
info.onCountdownEnd(function () {
    tiles.setCurrentTilemap(tilemap`Boss`)
    console.log("Enter Command Into Chat")
    console.log(">Spawn 'Zombie Nazi Kanye West'")
    info.player2.changeScoreBy(750)
    game.setDialogTextColor(2)
    game.showLongText("[Spawning Kanye.]", DialogLayout.Top)
    console.log("Spawning Kanye")
    Kanyeboss = sprites.create(assets.image`KanyeSmall`, SpriteKind.Kanye)
    Kanyeboss.setPosition(75, 2)
    timer.after(5000, function () {
        Kanyeboss.setImage(assets.image`KanyeMedium`)
        Kanyeboss.setPosition(73, 7)
        timer.after(10000, function () {
            Kanyeboss.setImage(assets.image`Kanye`)
            Kanyeboss.setPosition(87, -3)
            Kanyeboss.setVelocity(0, 1)
        })
    })
})
info.player2.onScore(0, function () {
    Kanyeboss.setFlag(SpriteFlag.GhostThroughSprites, true)
    Kanyeboss.setFlag(SpriteFlag.GhostThroughWalls, true)
    Kanyeboss.setVelocity(0, 0)
    Kanyeboss.setImage(assets.image`KanyeDeath`)
    Kanyeboss.sayText("DAMN, NOW HOW AM I SUPPOSED TO RELEASE A NEW ALBUM!?", 2000, false)
    timer.after(2000, function () {
        Kanyeboss.sayText("NOOOOOOOO!!!!!", 2000, false)
        Kanyeboss.destroy(effects.disintegrate, 10000)
        timer.after(1000, function () {
            game.over(true, effects.bubbles)
        })
    })
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Blast, function (sprite, otherSprite) {
    SmallZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
})
controller.combos.attachCombo("blla", function () {
    game.splash("You have been diagnosed with cancer.", "You have 1 minute to live.")
    info.setScore(696969)
    info.player2.changeScoreBy(69)
    timer.after(60000, function () {
        for (let index = 0; index < 4; index++) {
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
            sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
            sprites.destroyAllSpritesOfKind(SpriteKind.Kanye)
            sprites.destroyAllSpritesOfKind(SpriteKind.ducky)
            sprites.destroyAllSpritesOfKind(SpriteKind.snake)
            sprites.destroyAllSpritesOfKind(SpriteKind.collectable)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        }
        scene.setBackgroundImage(assets.image`empty`)
        info.setScore(0)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 508, 508, 126, 126, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        info.changeLifeBy(-6969696969)
        game.over(false)
    })
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Projectile, function (sprite, otherSprite) {
    LargeZombo2.destroy()
    bullet.destroy()
    info.changeScoreBy(5)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.code4, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        tiles.setCurrentTilemap(tilemap`Jamie`)
        scene.setBackgroundImage(assets.image`Room`)
    }
    console.log("Quit. It.")
    CodeBlock5 = sprites.create(img`
        .cccccccccccccc.
        cb777777777777bc
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c76666666666667c
        c66666666666666c
        c67777777777776c
        c6c666c66c666c6c
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f67777777777776f
        f6c666c66c666c6f
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f6ffffffffffff6f
        ffffffffffffffff
        `, SpriteKind.code5)
    animation.runImageAnimation(
    CodeBlock5,
    assets.animation`Code`,
    200,
    true
    )
    CodeBlock4.destroy()
    FakeCode4 = sprites.create(img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.fakecodeblock)
    animation.runImageAnimation(
    FakeCode4,
    assets.animation`Code`,
    200,
    true
    )
    FakeCode4.setPosition(146, 100)
    timer.after(8080, function () {
        for (let index = 0; index < 4; index++) {
            tiles.setCurrentTilemap(tilemap`Jamie`)
            scene.setBackgroundImage(assets.image`Room`)
        }
        CodeBlock5.destroy()
        ErrorBlock = sprites.create(img`
            .cccccccccccccc.
            cb777777777777bc
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c76666666666667c
            c66666666666666c
            c67777777777776c
            c6c666c66c666c6c
            f6c666cddc666c6f
            f6c6666cc6666c6f
            f6cccccccccccc6f
            f66666666666666f
            f67777777777776f
            f6c666c66c666c6f
            f6c666cddc666c6f
            f6c6666cc6666c6f
            f6cccccccccccc6f
            f66666666666666f
            f6ffffffffffff6f
            ffffffffffffffff
            `, SpriteKind.FinalCode)
        animation.runImageAnimation(
        ErrorBlock,
        assets.animation`BrokenCode`,
        200,
        true
        )
    })
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.trigger, function (sprite, otherSprite) {
    zombietrigger.destroy(effects.ashes, 100)
})
sprites.onOverlap(SpriteKind.Enemy22, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb22.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.code2, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        tiles.setCurrentTilemap(tilemap`Jamie`)
        scene.setBackgroundImage(assets.image`Room`)
    }
    console.log("You saw what happened last time you did this.")
    CodeBlock3 = sprites.create(img`
        .cccccccccccccc.
        cb777777777777bc
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c76666666666667c
        c66666666666666c
        c67777777777776c
        c6c666c66c666c6c
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f67777777777776f
        f6c666c66c666c6f
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f6ffffffffffff6f
        ffffffffffffffff
        `, SpriteKind.Code3)
    animation.runImageAnimation(
    CodeBlock3,
    assets.animation`Code`,
    200,
    true
    )
    CodeBlock3.setPosition(10, 27)
    CodeBlock2.destroy()
    FakeCode2 = sprites.create(img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.fakecodeblock)
    animation.runImageAnimation(
    FakeCode2,
    assets.animation`Code`,
    200,
    true
    )
    FakeCode2.setPosition(10, 100)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
})
sprites.onOverlap(SpriteKind.MidEnemy1, SpriteKind.trigger, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    LargeZombo1 = sprites.create(assets.image`Zombie Large`, SpriteKind.LargeThreat1)
    tiles.placeOnRandomTile(LargeZombo1, assets.tile`zomb spawn`)
    pause(1000)
    pause(500)
    deathtrigger = sprites.create(assets.image`ZombieTrigger`, SpriteKind.Trigger2)
    tiles.placeOnRandomTile(deathtrigger, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.Beam, function (sprite, otherSprite) {
    MidZomb2.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.Kanye, function (sprite, otherSprite) {
    if (true) {
        for (let index = 0; index < 10; index++) {
            info.changeScoreBy(3)
            info.player2.changeScoreBy(-1)
        }
    }
})
controller.combos.attachCombo("b+r", function () {
    controller.combos.setTimeout(700000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
    Beam = sprites.create(assets.image`laser`, SpriteKind.Beam)
    beam2 = sprites.create(assets.image`extralaser`, SpriteKind.Beam)
    Beam3 = sprites.create(assets.image`extralaser`, SpriteKind.Beam)
    beam2.setPosition(60, 40)
    Beam.setPosition(60, 50)
    Beam3.setPosition(60, 60)
    LaserGun.setImage(assets.image`LaserDFire`)
    timer.after(randint(1000, 3000), function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
        LaserGun.setImage(assets.image`LaserDNoPower`)
        timer.after(1000, function () {
            for (let index = 0; index < randint(200, 500); index++) {
                tiles.placeOnTile(LaserGun, tiles.getTileLocation(0, 15))
                sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
                pause(100)
            }
            LaserGun.setPosition(145, 49)
            LaserGun.setImage(assets.image`LaserD`)
        })
    })
})
controller.combos.attachCombo("uua+b", function () {
    music.smallCrash.play()
    scene.cameraShake(10, 500)
    KABOOOOOOOMMMM = sprites.createProjectileFromSprite(assets.image`BazookaBullet`, BAZOOKA, 0, -50)
    BAZOOKA.setImage(assets.image`BazookaFire`)
    timer.after(1000, function () {
        tiles.placeOnTile(BAZOOKA, tiles.getTileLocation(20, 0))
        timer.after(20000, function () {
            BAZOOKA.setImage(assets.image`Bazooka`)
            BAZOOKA.setPosition(80, 113)
        })
    })
})
controller.combos.attachCombo("dubb", function () {
    console.log("Duck Spawned")
    duck = sprites.create(assets.image`ducc`, SpriteKind.ducky)
    duck.setPosition(17, 49)
    animation.runImageAnimation(
    duck,
    assets.animation`duccdanc`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.LargeThreat1, SpriteKind.Beam, function (sprite, otherSprite) {
    LargeZombo1.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.LargeThreat1, SpriteKind.Projectile, function (sprite, otherSprite) {
    LargeZombo1.destroy()
    bullet.destroy()
    info.changeScoreBy(5)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 69; index++) {
        game.splash("You know who else", "has dementia?")
        info.player3.setScore(0)
        info.player4.setScore(0)
        pause(2000)
    }
    game.splash("MY MOM!!", "(and me)")
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Gun1.setImage(assets.image`Gun Left`)
    info.player3.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Beam, function (sprite, otherSprite) {
    LargeZombo2.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    SmallZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Enemy12, SpriteKind.Projectile, function (sprite, otherSprite) {
    SmallZomb12.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Enemy22, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
})
sprites.onOverlap(SpriteKind.Enemy12, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb12.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.MidEnemy1, SpriteKind.Projectile, function (sprite, otherSprite) {
    MidZomb1.destroy()
    bullet.destroy()
    info.changeScoreBy(2)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.trigger, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    LargeZombo2 = sprites.create(assets.image`ZombieAmirLarge`, SpriteKind.LargeThreat2)
    tiles.placeOnRandomTile(LargeZombo2, assets.tile`zomb spawn2`)
    pause(1000)
    pause(500)
    deathtrigger = sprites.create(assets.image`ZombieTrigger`, SpriteKind.Trigger2)
    tiles.placeOnRandomTile(deathtrigger, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Enemy22, SpriteKind.Projectile, function (sprite, otherSprite) {
    SmallZomb22.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.collectable, function (sprite, otherSprite) {
    game.showLongText("I keep telling you to stop, and you keep coming back here to taunt me.", DialogLayout.Bottom)
    game.showLongText("Stop.", DialogLayout.Bottom)
    game.showLongText("Turn off the console.", DialogLayout.Bottom)
    game.showLongText("I know you have nothing better to do anyways.", DialogLayout.Bottom)
    Crash.sayText("get out of my game.")
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.Blast, function (sprite, otherSprite) {
    MidZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(2)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Gun2.setImage(assets.image`Gun Right`)
    info.player4.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.her, SpriteKind.FinalCode, function (sprite, otherSprite) {
    game.showLongText("Why.", DialogLayout.Bottom)
    game.showLongText("Why do you do this to me.", DialogLayout.Bottom)
    game.showLongText("I just want to make silly games.", DialogLayout.Bottom)
    game.showLongText("This is supposed to be a funny zombie shooter about Mr.Gore.", DialogLayout.Bottom)
    game.showLongText("But you.", DialogLayout.Bottom)
    game.showLongText("You always just HAVE to put in the extra effort.", DialogLayout.Bottom)
    game.showLongText("Find every secret, every easter egg, every cheat code.", DialogLayout.Bottom)
    game.showLongText("No.", DialogLayout.Bottom)
    game.showLongText("Not this time.", DialogLayout.Bottom)
    game.showLongText("I'm not listening to you anymore.", DialogLayout.Bottom)
    me.destroy()
    Jamie = sprites.create(assets.image`jamie`, SpriteKind.TrueBoss)
    animation.runImageAnimation(
    Jamie,
    assets.animation`ShesStill`,
    2000,
    false
    )
    Jamie.setVelocity(0, -20)
    timer.after(5000, function () {
        game.showLongText("I am the one in control here.", DialogLayout.Bottom)
        game.showLongText("If you want your big giant fancy boss battle...", DialogLayout.Bottom)
        game.showLongText("Just so that you can fulfill your determination breaking desires...", DialogLayout.Bottom)
        game.showLongText("You'll have to wait.", DialogLayout.Bottom)
        Crash.sayText("get out of my game.")
    })
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    MidZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(2)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
controller.combos.attachCombo("wa", function () {
    PaperThing = sprites.createProjectileFromSprite(assets.image`Paper1`, MrGorePlayer, -50, 0)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb2.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
})
controller.combos.attachCombo("a+l", function () {
    shotgunthingiguess.setImage(assets.image`ShotgunPow`)
    Blastthing = sprites.create(assets.image`ShotgunBlast`, SpriteKind.Blast)
    Blastthing.setPosition(60, 50)
    timer.after(750, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
        timer.after(700, function () {
            for (let index = 0; index < 1000; index++) {
                tiles.placeOnTile(shotgunthingiguess, tiles.getTileLocation(20, 0))
                sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
                pause(10)
            }
            shotgunthingiguess.setImage(assets.image`Shotgun`)
            shotgunthingiguess.setPosition(15, 54)
        })
    })
})
info.player4.onScore(0, function () {
    Gun2.setPosition(200, 0)
    reloadspeech2.sayText("Reloading...", 5000, false)
    timer.after(randint(100, 6000), function () {
        Gun2.setPosition(140, 100)
        info.player4.setScore(10)
    })
})
sprites.onOverlap(SpriteKind.Enemy12, SpriteKind.Blast, function (sprite, otherSprite) {
    SmallZomb12.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
})
controller.combos.attachCombo("wb", function () {
    PaperThing = sprites.createProjectileFromSprite(assets.image`Paper2`, MrGorePlayer, 50, 0)
})
sprites.onOverlap(SpriteKind.Kanye, SpriteKind.Blast, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    info.player2.changeScoreBy(100)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
    Kanyeboss.sayText("OW FUCK", 2000, false)
    timer.after(500, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
    })
})
controller.combos.attachCombo("ba+r", function () {
    console.log("Gore Mode Active")
    tiles.setWallAt(tiles.getTileLocation(6, 9), true)
    scene.setBackgroundImage(assets.image`Classroom`)
})
controller.combos.attachCombo("bardl", function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Shotgun)
    shotgunthingiguess = sprites.create(assets.image`Shotgun`, SpriteKind.Shotgun)
    shotgunthingiguess.setPosition(15, 54)
    if (randint(0, 20) == 0) {
        tiles.setWallAt(tiles.getTileLocation(9, 6), true)
    }
})
let Blastthing: Sprite = null
let shotgunthingiguess: Sprite = null
let MrGorePlayer: Sprite = null
let PaperThing: Sprite = null
let Jamie: Sprite = null
let duck: Sprite = null
let KABOOOOOOOMMMM: Sprite = null
let Beam3: Sprite = null
let beam2: Sprite = null
let Beam: Sprite = null
let FakeCode2: Sprite = null
let ErrorBlock: Sprite = null
let FakeCode4: Sprite = null
let CodeBlock5: Sprite = null
let Kanyeboss: Sprite = null
let BAZOOKA: Sprite = null
let deathtrigger: Sprite = null
let MidZomb2: Sprite = null
let LaserGun: Sprite = null
let me: Sprite = null
let LargeZombo2: Sprite = null
let FakeCode3: Sprite = null
let CodeBlock3: Sprite = null
let CodeBlock4: Sprite = null
let FakeCode1: Sprite = null
let CodeBlock1: Sprite = null
let CodeBlock2: Sprite = null
let zombietrigger: Sprite = null
let MidZomb1: Sprite = null
let Crash: Sprite = null
let bullet: Sprite = null
let LargeZombo1: Sprite = null
let SmallZomb22: Sprite = null
let SmallZomb12: Sprite = null
let SmallZomb2: Sprite = null
let SmallZomb1: Sprite = null
let reloadspeech2: Sprite = null
let reloadspeech: Sprite = null
let Gun2: Sprite = null
let Gun1: Sprite = null
game.showLongText("MR GORE'S ZOMBIE FIGHTER!", DialogLayout.Full)
game.splash("BEGINER CONTROLS:", "Press A and B to shoot. Press both at the same time to quick reload. Press down and a at the same time to open the controls manual. ")
scene.setBackgroundImage(assets.image`Woods`)
tiles.setCurrentTilemap(tilemap`level`)
Gun1 = sprites.create(assets.image`Gun Left`, SpriteKind.Player)
Gun2 = sprites.create(assets.image`Gun Right`, SpriteKind.Player)
reloadspeech = sprites.create(assets.image`test`, SpriteKind.donttouch)
reloadspeech2 = sprites.create(assets.image`test`, SpriteKind.donttouch)
reloadspeech.setPosition(40, 93)
reloadspeech2.setPosition(120, 93)
Gun1.setPosition(20, 100)
Gun2.setPosition(140, 100)
info.player1.setLife(3)
pause(2000)
pause(1000)
info.player3.setScore(10)
info.player4.setScore(10)
pause(randint(100, 3000))
SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
pause(randint(100, 3000))
SmallZomb2 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy2)
tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
pause(randint(100, 3000))
SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
pause(randint(100, 3000))
SmallZomb22 = sprites.create(assets.image`ZombieAmirSmall`, SpriteKind.Enemy22)
tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
info.startCountdown(120)
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 9), sprites.builtin.forestTiles0)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
        sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
        sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    }
})
forever(function () {
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(9, 6))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Bazooka)
        sprites.destroyAllSpritesOfKind(SpriteKind.LaserGunThing)
        sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
        sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shotgun)
    }
})
forever(function () {
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(6, 9))) {
        Gun2.setImage(assets.image`Stapler2`)
        Gun1.setImage(assets.image`Stapler1`)
        bullet.setImage(assets.image`Staple`)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 3), assets.tile`Logo`)) {
        tiles.placeOnRandomTile(SmallZomb1, assets.tile`Logo`)
        tiles.placeOnRandomTile(SmallZomb12, assets.tile`Logo`)
        tiles.placeOnRandomTile(SmallZomb2, assets.tile`Logo0`)
        tiles.placeOnRandomTile(SmallZomb22, assets.tile`Logo0`)
        tiles.placeOnRandomTile(MidZomb2, assets.tile`Logo0`)
        tiles.placeOnRandomTile(LargeZombo2, assets.tile`Logo0`)
        tiles.placeOnRandomTile(LargeZombo1, assets.tile`Logo`)
        tiles.placeOnRandomTile(MidZomb1, assets.tile`Logo`)
        tiles.placeOnRandomTile(zombietrigger, assets.tile`Logo`)
        tiles.placeOnRandomTile(zombietrigger, assets.tile`Logo0`)
        tiles.placeOnRandomTile(deathtrigger, assets.tile`Logo0`)
        tiles.placeOnRandomTile(deathtrigger, assets.tile`Logo`)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), sprites.builtin.forestTiles10)) {
        for (let index = 0; index < 10; index++) {
            tiles.setCurrentTilemap(tilemap`Jamie`)
            scene.setBackgroundImage(assets.image`Room`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Bazooka)
            sprites.destroyAllSpritesOfKind(SpriteKind.LaserGunThing)
            sprites.destroyAllSpritesOfKind(SpriteKind.Blast)
            sprites.destroyAllSpritesOfKind(SpriteKind.Shotgun)
            sprites.destroyAllSpritesOfKind(SpriteKind.Kanye)
            sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Cheatcode)
            sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy12)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
            sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat2)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
            sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
            sprites.destroyAllSpritesOfKind(SpriteKind.donttouch)
            sprites.destroyAllSpritesOfKind(SpriteKind.HeadYe)
            sprites.destroyAllSpritesOfKind(SpriteKind.death)
            sprites.destroyAllSpritesOfKind(SpriteKind.ducky)
            sprites.destroyAllSpritesOfKind(SpriteKind.snake)
            sprites.destroyAllSpritesOfKind(SpriteKind.LaserGunThing)
            info.stopCountdown()
        }
    }
})
forever(function () {
    if (Jamie.overlapsWith(PaperThing)) {
        game.splash("fuck.", "fuck.")
    }
})
