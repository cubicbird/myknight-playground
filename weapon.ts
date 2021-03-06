Weapon.setWeapons("武器", function () {
    Weapon.setWeapon(img`
        ................................
        .59.............................
        .959............................
        ..959...........................
        ...959..........................
        ....959.........................
        .....959........................
        ......959.......................
        .......959....4.................
        ........959..42.................
        .........95942..................
        ..........9594..................
        ..........49794.................
        .........42496a.................
        ........42..4a8a................
        ..............a8................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, "剑", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.damage, 5)
        Weapon.setWeaponP(weapon, Weapon.weaponP.cd, 5000)
        Weapon.setWeaponP(weapon, Weapon.weaponP.nums, 5)
        Weapon.setoffset(weapon, Character.dirKind.down, -3, 2)
        Weapon.setoffset(weapon, Character.dirKind.left, 0, 5)
        Weapon.setoffset(weapon, Character.dirKind.up, 3, 6)
        Weapon.setoffset(weapon, Character.dirKind.right, -2, 3)
        // Bullet.shoot(sprite, "剑气", weapon.x, weapon.y, 0, 50, 0, true)
        Weapon.weaponSkill(weapon, function (tempVar, sprite) {
            randomshoot(weapon, 1, -45, 0, 0.1, "剑气", 85, 3, 45, 95, 15)
        })
    })
    Weapon.setWeapon(img`
        2a..2a..........................
        a2a..268........................
        .a64668.........................
        ..4245..........................
        2.64bc..........................
        a265cbc.........................
        .68..cbc........................
        .8....cbc.......................
        .......cbc......................
        ........cbc.....................
        .........cbc....................
        ..........cbc...................
        ...........cbc..................
        ............cbc.................
        .............cb.................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, "枪", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.damage, 15)
        Weapon.setWeaponP(weapon, Weapon.weaponP.cd, 800)
        Weapon.setWeaponP(weapon, Weapon.weaponP.angle, 45)
        Weapon.setoffset(weapon, Character.dirKind.down, -3, 2)
        Weapon.setoffset(weapon, Character.dirKind.left, 0, 5)
        Weapon.setoffset(weapon, Character.dirKind.up, 3, 6)
        Weapon.setoffset(weapon, Character.dirKind.right, -2, 3)
        Weapon.weaponSkill(weapon, function (tempVar, sprite) {
            Bullet.shoot(sprite, "冲击波", weapon.x, weapon.y, 0, 85, 20, true)
        })
    })
    Weapon.setWeapon(img`
        ................................
        ................................
        ................................
        ................................
        ..........aa.a..................
        ......baaaaaba..................
        acaacaacbbcaaa..................
        acbbbbbbbbaab...................
        acaaaabbbbbaa...................
        .....c44ceedce..................
        .......b.cedbe..................
        ........bbedbe..................
        ..........edde..................
        ..........eebe..................
        ...........eee..................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, "手枪", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.damage, 0)
        Weapon.setWeaponP(weapon, Weapon.weaponP.nums, 5)
        Weapon.setWeaponP(weapon, Weapon.weaponP.cd, 5000)
        Weapon.setWeaponP(weapon, Weapon.weaponP.angle, 45)
        Weapon.setoffset(weapon, Character.dirKind.down, -3, 2)
        Weapon.setoffset(weapon, Character.dirKind.left, 0, 5)
        Weapon.setoffset(weapon, Character.dirKind.up, 3, 6)
        Weapon.setoffset(weapon, Character.dirKind.right, -2, 3)
        Weapon.weaponSkill(weapon, function (tempVar, sprite) {
            randomshoot(weapon, 6, -45, 0, 0.1, "手枪子弹", 85, 3, 45, 95, 15)
        })
    })
    Weapon.setWeapon(img`
        .......eee......................
        .......eee......................
        ......ceeec.....................
        ......c333c.....................
        .....cc323cc....................
        ....cc32223cc...................
        ....c3222223c...................
        ....c2222222c...................
        ....c2222222c...................
        ....c2222222c...................
        ....c2222222c...................
        ....c2222222c...................
        ....ccccccccc...................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, "小血瓶", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.damage, 0)
        Weapon.setWeaponP(weapon, Weapon.weaponP.nums, 999)
        Weapon.setWeaponP(weapon, Weapon.weaponP.cd, 0)
        Weapon.setWeaponP(weapon, Weapon.weaponP.angle, 45)
        Weapon.setoffset(weapon, Character.dirKind.down, -1, -5)
        Weapon.setoffset(weapon, Character.dirKind.left, 0, 8)
        Weapon.setoffset(weapon, Character.dirKind.up, 2, 10)
        Weapon.setoffset(weapon, Character.dirKind.right, -5, 0)
        Weapon.weaponSkill(weapon, function (tempVar, sprite) {
            Bullet.setHp(Player.spriteToPlayer(sprite), 15)
            weapon.destroy()
        })
    })
    Weapon.setWeapon(img`
        . . 8 8 8 . . 
        . 8 6 6 6 8 . 
        8 6 9 9 9 6 8 
        8 6 9 9 9 6 8 
        8 6 9 9 9 6 8 
        . 8 6 6 6 8 . 
        . . 8 8 8 . . 
        `, "防护罩", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.nums, 6)
        Weapon.setoffset(weapon, Character.dirKind.down, -2, 5)
        Weapon.setoffset(weapon, Character.dirKind.left, 0, 5)
        Weapon.setoffset(weapon, Character.dirKind.up, 2, 5)
        Weapon.setoffset(weapon, Character.dirKind.right, 0, 5)
        Weapon.setPassiveSkill(weapon, 0.1, 100, function (tempVar, sprite) {
            Bullet.shoot(sprite, "防护罩", weapon.x, weapon.y, 0, 0)
        })
    })
})

Bullet.setProjectiles("weapon弹射物", function () {
    Bullet.setProjectile(img`
        ........55555...............
        .........4445555............
        ..........4444455...........
        ..........22444455..........
        ...........22444455.........
        ............22244455........
        .............22244455.......
        ..............22444455......
        ...............22444455.....
        ...............224444455....
        ................22444445....
        .................22444455...
        ..................22444455..
        ...................24444455.
        ...................24444455.
        ...................244444555
        ...................224444455
        ....................24444455
        ....................24444445
        ....................22444445
        .....................2244445
        .....................2244445
        ....................22244445
        ...................222444455
        ...................224444455
        ..................2244444455
        .................2244444455.
        ................22444444555.
        ...............22244444555..
        .............22244444555....
        ...........222244444555.....
        .........222244444455.......
        .......2222444444555........
        .....22224444445555.........
        ....2244444445555...........
        ..44444445555555............
        .4455555555.................
        55555.......................
        `, "剑气", function (projectile) {
        Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
        Bullet.setBullet2(projectile, Bullet.bulletP2.prism, true)
        Bullet.setPrismLW(projectile, 100, 3, 1000)
        Bullet.setPrismColor(projectile, 4, 2)
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, -1)
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 25)
        Bullet.setBullet(projectile, Bullet.bulletP.backoff, 20)
        Bullet.aimedshot(projectile)
    })
    Bullet.setProjectile(img`
        ..................
        9999..............
        .66699............
        ..886699..........
        ....88669.........
        ......88669.......
        ........88699.....
        ..........86699...
        ...........88669..
        ............88669.
        ..........886699..
        ........886699....
        ......886699......
        ....886699........
        ...86699..........
        ..8699............
        .669..............
        999...............
        ..................
        ..................
        `, "冲击波", function (projectile) {
        Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
        Bullet.setBullet2(projectile, Bullet.bulletP2.rebound, true)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, 20)
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 15)
        Bullet.setBullet(projectile, Bullet.bulletP.backoff, 40)
    })
    Bullet.setProjectile(img`
        .........8888888888888888888888.........
        ........866666666666666666666668........
        .......86999999999999999999999968.......
        ......869......................968......
        .....869........................968.....
        ....869..........................968....
        ...869............................968...
        ..869..............................968..
        .869................................968.
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        869..................................968
        .869................................968.
        ..869..............................968..
        ...869............................968...
        ....869..........................968....
        .....869........................968.....
        ......869......................968......
        .......86999999999999999999999968.......
        ........866666666666666666666668........
        .........8888888888888888888888.........
    `, "防护罩", function (projectile) {
        Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
        Bullet.setBullet2(projectile, Bullet.bulletP2.rebound, true)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, 35)
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
        Bullet.setBullet(projectile, Bullet.bulletP.backoff, 20)
        projectile.lifespan = 5000
        projectile.follow(Bullet.bulletOwn(projectile))
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    })
})