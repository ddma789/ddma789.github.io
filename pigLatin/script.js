function encodePigLatin(word) {
    if (!word) {
        console.log("There's no word here");
        return '';
    }
    let answer = word
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let startsWithVowel = vowels.includes(word[0].toLowerCase());
    if (startsWithVowel) {
        answer = word + 'way';
    } else {
        let startsWithConsonantAndVowel = vowels.includes(word[1]);
        if (startsWithConsonantAndVowel) {
            answer = word.slice(1) + word[0].toLowerCase() + 'ay';
        } else { // If a word starts with two consonants move the two consonants to the end of the word and add "ay."
            answer = word.slice(2).toLowerCase() + word.slice(0, 2).toLowerCase() + 'ay';
        }


    }
    return capWordIfNeeded(word, answer);
}
function decodePigLatin(word) {
    if (!word) {
        console.log("There's no word here");
        return '';
    }

    let lcWord = word.toLowerCase()
    let answer = lcWord
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let endsWithWayStartsWithVowel = lcWord.slice(-3) === 'way' && vowels.includes(lcWord[0]);
    let startsWithTwoConsonants =
        !(vowels.includes(lcWord[0]) || vowels.includes(lcWord[1])) &&
        lcWord.slice(-2) === 'ay';
    let endsWithAyStartsWithVowel = lcWord.slice(-2) === 'ay' && vowels.includes(lcWord[0]);
    if (endsWithWayStartsWithVowel) {
        answer = lcWord.slice(0, -3);

    } else if (startsWithTwoConsonants) {
        answer = lcWord.slice(-4, -2) + lcWord.slice(0, -4)
    } else if (endsWithAyStartsWithVowel) {
        answer = lcWord.slice(-3, -2) + lcWord.slice(0, -3);
    }
    return capWordIfNeeded(word, answer);
}

function capWordIfNeeded(firstWord, secondWord) {
    if (firstWord[0] === firstWord[0].toUpperCase()) {
        return secondWord[0].toUpperCase() + secondWord.substring(1).toLowerCase();
    }
    return secondWord;
}
function pigSentence(sentence) {
    let inputText = document.getElementById('inputText').value
    let words = inputText.split(" ");
    let encodeWords = []
    for (let i = 0; i < words.length; i++) {

        encodeWords[i] = encodePigLatin(words[i])

    }

    let encodeSentence = encodeWords.join(" ");
    document.getElementById('demo').innerHTML = encodeSentence;
    return encodeSentence
}




function engSentence(sentence) {
    let inputDecode = document.getElementById('inputText').value
    let words = inputDecode.split(" ");
    let decodeWords = []
    for (let i = 0; i < words.length; i++) {
        decodeWords[i] = decodePigLatin(words[i])

    }

    let decodeSentence = decodeWords.join(" ");
    document.getElementById('demo').innerHTML = decodeSentence;
    return decodeSentence

}


