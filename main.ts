basic.forever(function () {
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDRight)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(100)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDLeft)
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(100)
})

