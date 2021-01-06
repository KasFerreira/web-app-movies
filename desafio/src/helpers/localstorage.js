


export function getLocalStorage(key){

    try {
        const data = JSON.parse(window.localStorage.getItem(key))
        return data
    } catch (error) {
        return null
    }


}

export function setLocalStorage(key, data){

    try {

        window.localStorage.setItem(key, JSON.stringify(data))
        return true
        
    } catch (error) {
        
        return false
    }
}