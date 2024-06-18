## Localstorage Cache

This is a package to use localstorage cache.

## How to use

Install the package

```bash  
npm i @jhowrf/local-storage-cache
```

```typescript
// import the package
import { localStorageCache } from '@jhowrf/local-storage-cache/src/localStorageCache'

// to get a item from localstorage, only the key is required
const item = localStorageCache.getStorageItem("cache-key")

// to set a item in localstorage, the key and the item are required. 
// The third parameter is the time in milliseconds that the item will be stored in localstorage, the default value is 31536000000 (1 year)
localStorageCache.setStorageItem("cache-key", item, 31536000000)

// to remove a item from localstorage
localStorageCache.removeStorageItems("cache-key", "cache-key-2")
```
