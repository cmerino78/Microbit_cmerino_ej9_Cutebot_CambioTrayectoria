let Distancia = 0
basic.showIcon(IconNames.Happy)
let Velocidad = 40
cuteBot.motors(Velocidad, Velocidad)
basic.forever(function () {
    Distancia = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (Distancia > 5 && Distancia < 20) {
        cuteBot.motors(0, -50)
        basic.pause(randint(100, 300))
    } else {
        cuteBot.motors(Velocidad, Velocidad)
    }
})
