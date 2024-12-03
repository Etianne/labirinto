input.onPinPressed(TouchPin.P0, function () {
    if (Pin0_status == 0) {
        Score += 1
        Pin0_status = 1
        Pin1_status = 0
        basic.showArrow(ArrowNames.East)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Pin1_status == 0) {
        Score += 1
        Pin1_status = 1
        Pin0_status = 0
        basic.showArrow(ArrowNames.West)
    }
})
let Pin1_status = 0
let Pin0_status = 0
let Score = 0
Pin0_status = 0
Pin1_status = 0
basic.showString("GO")
let Contador_tempo = 30
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
loops.everyInterval(1000, function () {
    Contador_tempo += -1
})
basic.forever(function () {
    if (Contador_tempo <= 0) {
        basic.showNumber(Score)
        music.stopAllSounds()
        basic.pause(2000)
    } else {
        led.plotBarGraph(
        Contador_tempo,
        30
        )
    }
    basic.pause(1000)
})
