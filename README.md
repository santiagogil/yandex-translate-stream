# yandex-translate-stream
Yandex translate module inside a map-stream.

## Usage

```
var translate = require('yandex-translate-stream')(<your yandex api key here>)

var data = {
  translate: {
    data: 'Hola',
    options: {
      from: 'es',
      to: 'fr'
    }
  }
}

// Will emit the same object with a translated property that equals '[bonjour]'
translate.write(data)
```
If the incomming data is anything but an object or the object doesn't have a 'translate' property, it behaves as a pass throwgh emmiting data unmodified without making any api calls.
