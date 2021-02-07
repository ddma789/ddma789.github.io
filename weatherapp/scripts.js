function replaceWord(word, replacement) {

    $("p").html($("p").html().replaceAll(word, replacement))

}

$(function () {

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let words = {
        'Joe': 'name',
        'wheat': 'plant',
        'car': 'object',
        'the country': 'place',
        'farmer': 'occupation',
        'hungry': 'adjective',
        'drove': 'verb',
        'disappointed': 'emotion',
        'reputable': 'adjective',
        'steal': 'verb',
        'barley': 'plant',
        'trees': 'plural plants',
        'toiled': 'verb',
        'bread': 'plural food',
    }
    for (let key of Object.keys(words)) {
        let article;
        if(vowels.includes(words[key][0])) article = "an "
        else article = "a "
        let replacement = prompt("Tell me "+ article + words[key]);
        replaceWord(key, replacement)
        console.log(words[key])

    }

});





