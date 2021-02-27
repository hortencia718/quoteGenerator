function generate(){


// object
let quotes = {
    "- Oscar Wilde": '"I think that God in creating Man somewhat overestimated his ability."',
    "- Francois de La Rochefoucauld":'"If we had no faults of our own, we would not take so much pleasure in noticing those of others."',
    "- John Keats":'"I love you the more that I believe you have liked me for my own sake and for nothing else."',
    "- Robert Frost":'"The woods are lovely, dark, and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I sleep."',
    "- Francois de La Rochefoucauld":'"It is often merely for an excuse that we say things are impossible."',
    "- Jane Austen":'"The enthusiasm of a womans love is even beyond the biographers."',
    "- Sir Francis Bacon":'"Praise from the common people is generally false, and rather follows the vain than the virtuous."',
    "- Oscar Wilde": '"The only thing worse than being talked about is not being talked about."',
    "- Laurence J. Peter":'"Speak when you are angry and you will make the best speech you will ever regret."',
    "- Sir Francis Bacon":'"The worst solitude is to be destitute of sincere friendship."',

}
// grab all the keys in the dictionary
let keys = Object.keys(quotes);
// grab a random author(key) and store it in author
let author = keys[Math.floor(Math.random() * keys.length)];
// grab the value(quote) that belongs to that key
let quote = quotes[author];

document.getElementById('quote').innerHTML = quote;
document.getElementById('author').innerHTML = author;

}

// feels like summer