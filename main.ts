let gradzahl = 0
basic.forever(function () {
    gradzahl = input.compassHeading()
    if (gradzahl >= 46 && gradzahl < 135) {
        basic.showString("O")
    } else if (gradzahl >= 135 && gradzahl < 225) {
        basic.showString("S")
    } else if (gradzahl >= 225 && gradzahl < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
