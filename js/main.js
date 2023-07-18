var qoutes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Marilyn Monroe',
        'quote': 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {
        'author':'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity and Im not sure about the universe'
    },
    {
        'author':'Frank Zappa',
        'quote': 'So many books, so little time.'
    }
]

function getQuote(){
    var random = Number.parseInt(Math.random()*qoutes.length + 1);
    document.querySelector('#quoteOutput').textContent = qoutes[random].quote;
    document.querySelector('#authorOutput').textContent = qoutes[random].author;
}
