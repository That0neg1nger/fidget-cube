input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        # # . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.QuarterNote)
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . # # .
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
