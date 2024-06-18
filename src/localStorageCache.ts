const oneYearMs: number = 31536000000

interface ILocalStorage {
    getStorageItem: (key: string) => any|null
    setStorageItem: (key: string, value: any, expireTimeMs: number|null) => void
    removeStorageItems: (...keys: any[]) => void
}

export const localStorageCache: ILocalStorage = {
    getStorageItem: function(key: string): any|null {
        const itemInStorage: string|null = localStorage.getItem(key)
        if (itemInStorage) {
            const itemParsed = JSON.parse(itemInStorage)
            if (new Date().getTime() < itemParsed.expiry) {
                return itemParsed.value
            }
            this.removeStorageItems(key)
        }
        return null
    },
    setStorageItem: function(key: string, value: any, expireTimeMs: number|null = null): void {
        const expiry: number = expireTimeMs ?? oneYearMs
        localStorage.setItem(key, JSON.stringify({
            value,
            expiry: new Date().getTime() + expiry
        }))
    },
    removeStorageItems: function(...keys: any[]): void {
        keys.forEach((key) => {
            localStorage.removeItem(key)
        })
    }
}