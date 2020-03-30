# Promise's Accessory Util

The accessory util is based on promise.

## Your util

- `delay`

  make the delay with promise's implement.

```javascript

  import {delay} from 'promise-accessory'
  // ...

  // The `console.log` execution will be delayed with 100ms
  somePromise
    .then(() => delay(100)) // Or replace with `.then(delay.P(100))`
    .then(() => console.log('delay'))

  // ...
```

- `defer`

  spread promise's resolve and reject out for your convenience.

```javascript

  import {defer} from 'promise-accessory'

  function somePromise () {
    const {resolve, promise} = defer()
    // ...
    resolve('defer')
    // ...
    return promise
  }

```

## Tell me what's next

What util is it should include?
