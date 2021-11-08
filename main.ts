bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.showLeds(`
    # . # . #
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
