function kresliPuntiky (num: number) {
    if (1 == num) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (2 == num) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (3 == num) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (4 == num) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (5 == num) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    typKostky = 1 - typKostky
    basic.showString("K" + typKostky)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(200)
    hozenoCislo = randint(1, 6)
    if (0 == typKostky) {
        basic.showNumber(hozenoCislo)
    } else {
        kresliPuntiky(hozenoCislo)
    }
})
let hozenoCislo = 0
let typKostky = 0
typKostky = 0
