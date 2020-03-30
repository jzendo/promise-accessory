# Promise's Accessory Util

The accessory util is based on promise.

## Your util

- `delay`

  make the delay with promise's implement.

```javascript

  // 123 outputing will be delay with 100ms
  somePromise.then(() => delay(100)).then(() => console.log(123))

```

- `defer`

  spread promise's resolve and reject out for your convenience.

```javascript
  function somePromise () {
    const {resolve, promise} = defer()

    // ...

    resolve(123)

    // ...

    return promise
  }

```

## Tell me what your think

What util is it should include ?
