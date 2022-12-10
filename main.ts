input.onButtonPressed(Button.A, function () {
    TurnOff = 0
    if (Setting > 1) {
        Setting += -1
        basic.showNumber(Setting)
    } else {
        basic.showString("X")
    }
})
input.onButtonPressed(Button.AB, function () {
    TurnOff = 1
})
input.onButtonPressed(Button.B, function () {
    TurnOff = 0
    if (Setting < SettingsMax) {
        Setting += 1
        basic.showNumber(Setting)
        basic.pause(250)
        basic.clearScreen()
    } else {
        basic.showString("X")
        basic.pause(250)
        basic.clearScreen()
    }
})
let b = 0
let g = 0
let r = 0
let Setting = 0
let strip: neopixel.Strip = null
let SettingsMax = 0
let On = 0
let TurnOff = 0
SettingsMax = 5
strip = neopixel.create(DigitalPin.P0, 240, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
basic.pause(250)
basic.clearScreen()
strip.showRainbow(1, 360)
basic.forever(function () {
    if (Setting == 1) {
        strip.showColor(neopixel.rgb(239, 235, 50))
        strip.show()
    }
    if (Setting == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (Setting == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    if (Setting == 4) {
        strip.showRainbow(1, 360)
        while (Setting == 4) {
            strip.rotate(10)
            strip.show()
            basic.pause(100)
        }
    }
    if (Setting == 5) {
        while (Setting == 5) {
            for (let i = 0; i <= 239; i++) {
                r = randint(0, 200)
                g = randint(0, 200)
                b = randint(0, 200)
                strip.setPixelColor(i, neopixel.rgb(r, g, b))
            }
            strip.show()
            basic.pause(50)
        }
    }
    if(TurnOff == 1) {
        strip.clear()
        strip.show()
    }
})
