# yandex-translate-stream

[![Greenkeeper badge](https://badges.greenkeeper.io/santiagogil/yandex-translate-stream.svg)](https://greenkeeper.io/)
Yandex translate module inside a map-stream.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
## Usage

``` js
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
