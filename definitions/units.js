let units = {
    "electricity":{
        "Watt": [
            {"unit": "GW", "exponent": 9},
            {"unit": "MW", "exponent": 6},
            {"unit": "kW", "exponent": 3},
            {"unit": "W", "exponent": 0},
            {"unit": "mW", "exponent": -3}
            ],
        "Watt_hour": [
            {"unit": "GWh", "exponent": 9},
            {"unit": "MWh", "exponent": 6},
            {"unit": "kWh", "exponent": 3},
            {"unit": "Wh", "exponent": 0},
            {"unit": "mWh", "exponent": -3}
        ],
        "Volt": [
            {"unit": "kV", "exponent": 3},
            {"unit": "V", "exponent": 0},
            {"unit": "mV", "exponent": -3},
            {"unit": "µV", "exponent": -6}
        ],
        "Ampere": [
            {"unit": "kA", "exponent": 3},
            {"unit": "A", "exponent": 0},
            {"unit": "mA", "exponent": -3},
            {"unit": "µA", "exponent": -6}
        ],
        "Joule": [
            {"unit": "GJ", "exponent": 9},
            {"unit": "MJ", "exponent": 6},
            {"unit": "kJ", "exponent": 3},
            {"unit": "J", "exponent": 0}
        ],
        "Hertz": [
            {"unit": "GHz", "exponent": 9},
            {"unit": "MHz", "exponent": 6},
            {"unit": "kHz", "exponent": 3},
            {"unit": "Hz", "exponent": 0}
        ]
    },
    "length": {
        "Meter": [
            {"unit": "km", "exponent": 3},
            {"unit": "m", "exponent": 0},
            {"unit": "dm", "exponent": -1},
            {"unit": "cm", "exponent": -2},
            {"unit": "mm", "exponent": -3},
            {"unit": "nm", "exponent": -6},
            {"unit": "µm", "exponent": -9}
        ],
        "Nautical_mile": [
            {"unit": "sm", "exponent": 0},
        ],
        "Mile": [
            {"unit": "ml", "exponent": 0}
        ],
        "Inch": [
            {"unit": "\"", "exponent": 0}
        ],
    },
    "surface": {
        "Square_meters": [
            {"unit": "km²", "exponent": 3},
            {"unit": "m²", "exponent": 0},
            {"unit": "dm²", "exponent": -1},
            {"unit": "cm²", "exponent": -2},
            {"unit": "mm²", "exponent": -3}
        ]
    },
    "volume": {
        "Cubic_meter": [
            {"unit": "km³", "exponent": 3},
            {"unit": "m³", "exponent": 0},
            {"unit": "dm³", "exponent": -1},
            {"unit": "cm³", "exponent": -2},
            {"unit": "mm³", "exponent": -3}
        ],
        "Liter": [
            {"unit": "hl", "exponent": 2},
            {"unit": "l", "exponent": 0},
            {"unit": "dl", "exponent": -1},
            {"unit": "cl", "exponent": -2},
            {"unit": "ml", "exponent": -3}
        ]
    },
    "time": {
        "Second": [
            {"unit": "s", "exponent": 0}
        ],
        "Minute": [
            {"unit": "min", "exponent": 0}
        ],
        "Hour": [
            {"unit": "h", "exponent": 0}
        ],
        "Day": [
            {"unit": "d", "exponent": 0}
        ]
    },
    "speed": {
        "Meters_per_second": [
            {"unit": "m/s", "exponent": 0}
        ],
        "Kilometers_per_hour": [
            {"unit": "km/h", "exponent": 0}
        ],
        "Knot": [
            {"unit": "kn", "exponent": 0}
        ]
    },
    "mass": {
        "Kilogram": [
            {"unit": "kg", "exponent": 3},
            {"unit": "g", "exponent": 0}
        ],
    },
    "force": {
        "Newton": [
            {"unit": "N", "exponent": 0}
        ]
    },
    "pressure": {
        "Pascal": [
            {"unit": "kPa", "exponent": 3},
            {"unit": "hPa", "exponent": 2},
            {"unit": "Pa", "exponent": 0}
        ],
        "Bar": [
            {"unit": "bar", "exponent": 0},
            {"unit": "mbar", "exponent": -3}
        ]
    },
    "light": {
        "Illuminance": [
            {"unit": "lx", "exponent": 0}
        ],
        "Luminous_intensity": [
            {"unit": "cd", "exponent": 0}
        ],
        "Luminance": [
            {"unit": "cd/m²", "exponent": 0}
        ],
        "Luminous_flux": [
            {"unit": "lm", "exponent": 0}
        ],
    },
    "temperature": {
        "Degree_celsius": [
            {"unit": "°C", "exponent": 0}
        ],
        "Kelvin": [
            {"unit": "K", "exponent": 0}
        ],
        "Fahrenheit": [
            {"unit": "°F", "exponent": 0}
        ],
    }
}