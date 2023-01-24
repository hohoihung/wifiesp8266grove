input.onButtonPressed(Button.A, function () {
    esp8266.updateInternetTime()
    if (esp8266.isInternetTimeUpdated()) {
        basic.showString("" + (esp8266.getYear()))
        basic.showString(":")
        basic.showString("" + (esp8266.getMonth()))
        basic.showString(":")
        basic.showString("" + (esp8266.getHour()))
        basic.showString(":")
        basic.showString("" + (esp8266.getMinute()))
    } else {
        basic.showString("Internet Time Error")
    }
})
esp8266.init(SerialPin.P13, SerialPin.P12, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Heart)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("DGH-Home", "Dowdow07190")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
esp8266.initInternetTime(8)
basic.showString("Initializing Internet Time")
if (esp8266.isInternetTimeInitialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Giraffe)
}
