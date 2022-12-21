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
}
info.player3.onScore(-6, function () {
    Gun1.setPosition(200, 0)
    reloadspeech.sayText("Reloading...", 5000, false)
    pause(randint(100, 6000))
    Gun1.setPosition(20, 100)
    info.player3.setScore(0)
})
scene.onOverlapTile(SpriteKind.Cheatcode, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(0, 0), true)
})
sprites.onOverlap(SpriteKind.HeadYe, SpriteKind.Beam, function (sprite, otherSprite) {
    HeadYeSprite.sayText("OWIESS!!! I WANT MY MOMMY!!!", 2000, false)
    info.changeScoreBy(6969)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.smallCrash.play()
    scene.cameraShake(10, 500)
    KABOOOOOOOMMMM = sprites.createProjectileFromSprite(assets.image`BazookaBullet`, BAZOOKA, 0, -50)
    BAZOOKA.setImage(assets.image`BazookaFire`)
    for (let index = 0; index < 60; index++) {
        pause(1000)
    }
    BAZOOKA.setImage(assets.image`Bazooka`)
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun2.setImage(assets.image`Gun Right Fire`)
    bullet = sprites.createProjectileFromSprite(assets.image`Bullet Left`, Gun2, -300, -10000)
    music.knock.play()
    Cheater.setVelocity(10, 0)
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Trigger2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.LargeThreat1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    LargeZombo2.setImage(assets.image`Zombie Large Bite`)
    pause(500)
    info.player2.setLife(3)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb1.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun1.setImage(assets.image`Gun Left Fire`)
    bullet = sprites.createProjectileFromSprite(assets.image`Bullet Right`, Gun1, 300, -10000)
    music.knock.play()
    Cheater.setVelocity(-25, 0)
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
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Enemy22, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy22)
    MidZomb2 = sprites.create(assets.image`Mid Zombie`, SpriteKind.MidEnemy2)
    tiles.placeOnRandomTile(MidZomb2, assets.tile`zomb spawn2`)
    pause(2000)
    pause(1000)
    zombietrigger = sprites.create(assets.image`ZombieTrigger`, SpriteKind.trigger)
    tiles.placeOnRandomTile(zombietrigger, assets.tile`zomb spawn2`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
    music.setVolume(500)
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
        music.knock.play()
        music.knock.play()
        scene.cameraShake(100, 500)
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
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
    tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
    pause(randint(100, 3000))
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
    console.log("Spawning Player 2...")
    pause(randint(100, 1000))
    console.log("Player 2 Spawned.")
    LaserGun = sprites.create(assets.image`LaserD`, SpriteKind.Player)
    LaserGun.setPosition(145, 49)
    pause(randint(69, 42000))
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.Trigger2, function (sprite, otherSprite) {
    deathtrigger.destroy(effects.ashes, 100)
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
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
    LaserGun.setImage(assets.image`LaserDNoPower`)
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
sprites.onOverlap(SpriteKind.HeadYe, SpriteKind.Projectile, function (sprite, otherSprite) {
    HeadYeSprite.sayText("AAGGHH FUCK!!!", 2000, false)
    info.changeScoreBy(6969)
})
info.player2.onScore(0, function () {
    Kanyeboss.setFlag(SpriteFlag.GhostThroughSprites, true)
    Kanyeboss.setFlag(SpriteFlag.GhostThroughWalls, true)
    Kanyeboss.setVelocity(0, 0)
    Kanyeboss.setImage(assets.image`KanyeDeath`)
    Kanyeboss.sayText("DAMN, NOW HOW AM I SUPPOSED TO RELEASE A NEW ALBUM!?", 2000, false)
    Kanyeboss.sayText("NOOOOOOOO!!!!!", 2000, false)
    Kanyeboss.destroy(effects.disintegrate, 10000)
    tiles.setCurrentTilemap(tilemap`KanyeDeathThing`)
    pause(5000)
    pause(5000)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.LargeThreat2, SpriteKind.Projectile, function (sprite, otherSprite) {
    LargeZombo2.destroy()
    bullet.destroy()
    info.changeScoreBy(5)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.trigger, function (sprite, otherSprite) {
    zombietrigger.destroy(effects.ashes, 100)
})
sprites.onOverlap(SpriteKind.Enemy22, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb22.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
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
            info.player2.changeScoreBy(-3)
        }
    }
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Beam = sprites.create(assets.image`laser`, SpriteKind.Beam)
    Beam.setPosition(60, 50)
    LaserGun.setImage(assets.image`LaserDFire`)
    pause(randint(333, 2000))
    sprites.destroyAllSpritesOfKind(SpriteKind.Beam)
    pause(randint(2000, 15000))
    LaserGun.setImage(assets.image`LaserD`)
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
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    SmallZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
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
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    BAZOOKA.setImage(assets.image`BazookaSmoke`)
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("WHAT THE FUCK DID YOU DO!?", "Press up to shoot your new bazooka. Be wise though, it has a very long cooldown")
    BAZOOKA = sprites.create(assets.image`Bazooka`, SpriteKind.Player)
    BAZOOKA.setPosition(80, 113)
    for (let index = 0; index < 69; index++) {
        pause(6900)
        pause(690)
        pause(690)
        pause(690)
    }
    game.splash("farts on you cutely", "press left to fart loudly :)")
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.trigger, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MidEnemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.trigger)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trigger2)
    LargeZombo2 = sprites.create(assets.image`Zombie Large`, SpriteKind.LargeThreat2)
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
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Gun2.setImage(assets.image`Gun Right`)
    info.player4.changeScoreBy(-1)
})
info.player1.onScore(100, function () {
    tiles.setCurrentTilemap(tilemap`Boss`)
    console.log("Enter Command Into Chat")
    console.log(">Spawn 'Zombie Nazi Kanye West'")
    game.setDialogTextColor(2)
    game.showLongText("[SPAWNING KANYE.]", DialogLayout.Top)
    info.player2.setScore(2500)
    console.log("Spawning Kanye")
    Kanyeboss = sprites.create(assets.image`KanyeSmall`, SpriteKind.Kanye)
    Kanyeboss.setPosition(77, 0)
    pause(5000)
    pause(5000)
    Kanyeboss.setImage(assets.image`KanyeMedium`)
    Kanyeboss.setPosition(82, 0)
    pause(5000)
    pause(5000)
    pause(5000)
    Kanyeboss.setImage(assets.image`Kanye`)
    Kanyeboss.setPosition(87, 0)
    Kanyeboss.setVelocity(0, 1)
})
sprites.onOverlap(SpriteKind.MidEnemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    MidZomb2.destroy()
    bullet.destroy()
    info.changeScoreBy(2)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
    pause(randint(100, 3000))
    SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
    tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Beam, function (sprite, otherSprite) {
    SmallZomb2.destroy()
    info.changeScoreBy(3)
    music.thump.play()
    pause(2000)
    SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
    tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
})
info.player4.onScore(-6, function () {
    Gun2.setPosition(200, 0)
    reloadspeech2.sayText("Reloading...", 5000, false)
    pause(randint(1000, 6000))
    Gun2.setPosition(140, 100)
    info.player4.setScore(0)
})
let Beam: Sprite = null
let mySprite: Sprite = null
let Kanyeboss: Sprite = null
let deathtrigger: Sprite = null
let LaserGun: Sprite = null
let MidZomb2: Sprite = null
let LargeZombo2: Sprite = null
let bullet: Sprite = null
let LargeZombo1: Sprite = null
let zombietrigger: Sprite = null
let MidZomb1: Sprite = null
let BAZOOKA: Sprite = null
let KABOOOOOOOMMMM: Sprite = null
let HeadYeSprite: Sprite = null
let SmallZomb22: Sprite = null
let SmallZomb12: Sprite = null
let SmallZomb2: Sprite = null
let SmallZomb1: Sprite = null
let Cheater: Sprite = null
let reloadspeech2: Sprite = null
let reloadspeech: Sprite = null
let Gun2: Sprite = null
let Gun1: Sprite = null
game.showLongText("MR GORE'S ZOMBIE FIGHTER!", DialogLayout.Full)
game.splash("CONTROLS:", "Press A to shoot the left gun. Press B to shoot the right gun. Press Left to reset zombie spawning if they stop getting closer.")
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
Cheater = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cheatcode)
tiles.placeOnRandomTile(Cheater, sprites.castle.tileDarkGrass2)
info.player1.setLife(3)
pause(randint(100, 3000))
SmallZomb1 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy)
tiles.placeOnRandomTile(SmallZomb1, assets.tile`zomb spawn`)
pause(randint(100, 3000))
SmallZomb2 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy2)
tiles.placeOnRandomTile(SmallZomb2, assets.tile`zomb spawn2`)
pause(randint(100, 3000))
SmallZomb12 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy12)
tiles.placeOnRandomTile(SmallZomb12, assets.tile`zomb spawn`)
pause(randint(100, 3000))
SmallZomb22 = sprites.create(assets.image`Zombie small`, SpriteKind.Enemy22)
tiles.placeOnRandomTile(SmallZomb22, assets.tile`zomb spawn2`)
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
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 3), assets.tile`KanyeDead`)) {
        pause(5000)
        pause(5000)
        pause(5000)
        pause(5000)
        scene.cameraShake(4, 500)
        HeadYeSprite = sprites.create(assets.image`KanyeHead`, SpriteKind.HeadYe)
        tiles.placeOnRandomTile(HeadYeSprite, assets.tile`KanyeDead`)
        HeadYeSprite.sayText("RAAAGHH!!! IM BACK!!!")
        for (let index = 0; index < 696969696969; index++) {
            pause(6969)
            pause(6969)
        }
    }
})
forever(function () {
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(0, 0))) {
        info.player3.setScore(100000)
        info.player4.setScore(100000)
        game.showLongText("Infinite Ammo Activation : On", DialogLayout.Bottom)
        console.logValue("InfiAmmo", 1)
        info.player3.setScore(100000)
        info.player4.setScore(100000)
        tiles.placeOnRandomTile(Cheater, assets.tile`myTile`)
        tiles.setWallAt(tiles.getTileLocation(0, 0), false)
        for (let index = 0; index < 4; index++) {
            info.player3.setScore(100000)
            info.player4.setScore(100000)
            pause(2000)
        }
        pause(5000)
        pause(5000)
        console.logValue("InfiAmmo", 0)
    }
})
