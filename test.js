
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    
    let hash1 = {}
    let hash2 = {}
    
    for (let letter of str1) {
        hash1[letter] = (hash1[letter] || 0) + 1
    }
    for (let letter of str2) {
        hash2[letter] = (hash2[letter] || 0) + 1
    }
    
    
    if (str1.length !== str2.length) return false
    for (const key in hash1) {
        if (!(key in hash2)) {
            return false
        }
        if (hash1[key] !== hash2[key]) {
            return false
        }
    }
    console.log(true)
    return true
}

validAnagram('', '')