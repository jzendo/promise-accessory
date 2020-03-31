# Promise's Accessory Util

The accessory util is based on promise.

## Your util

- `delay`

  delay the following job.  [demo](./examples/delay.js)

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

- `retry`

  retry times for better resolved. [demo](./examples/retry.js)

## Tell me what's next

What util is it should include?
