export const hashLink = (len : number) : string => {
    let randomLetters = "adadasdasdasdasd323234234asdasdasdad"

    let ans = ""

    for(let i = 0; i < len; i++){
        ans += randomLetters[Math.floor(Math.random() * randomLetters.length)]
    }

    return ans
}

// console.log(random(20));
