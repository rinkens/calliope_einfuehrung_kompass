let gradzahl = 0
basic.forever(function () {
    gradzahl = input.compassHeading()
    if (gradzahl >= 22.5 && gradzahl < 67.5) {
        basic.showString("NO")
    } else if (gradzahl >= 67.5 && gradzahl < 112.5) {
        basic.showString("O")
    } else if (gradzahl >= 112.5 && gradzahl < 157.5) {
        basic.showString("SO")
    } else if (gradzahl >= 157.5 && gradzahl < 202.5) {
        basic.showString("S")
    } else if (gradzahl >= 202.5 && gradzahl < 247.5) {
        basic.showString("SW")
    } else if (gradzahl >= 247.5 && gradzahl < 292.5) {
        basic.showString("W")
    } else if (gradzahl >= 292.5 && gradzahl < 337.5) {
        basic.showString("NW")
    } else {
        basic.showString("N")
    }
})
