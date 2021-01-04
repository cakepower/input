let count = 0
let light_Sensor = 0
let strip = neopixel.create(DigitalPin.P11, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
    light_Sensor = input.lightLevel() + 10
    for (let index2 = 0; index2 <= 7; index2++) {
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(light_Sensor)
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        count = index2 + 1
        if (count == 8) {
            count = 0
        }
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(light_Sensor)
    }
})
