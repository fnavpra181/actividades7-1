input.onButtonPressed(Button.A, function () {
    personas += 1
})
input.onButtonPressed(Button.B, function () {
    if (personas > 0) {
        personas += -1
    }
})
let personas = 0
personas = 0
basic.forever(function () {
    basic.showNumber(personas)
})
