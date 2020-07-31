var movies = [{
        title: "ABCD",
        hasWatched: true,
        rating: 4.5
    },
    {
        title: "ABCD2",
        hasWatched: true,
        rating: 4.2
    },
    {
        title: "Street Dancer",
        hasWatched: false,
        rating: 3.2
    }
]

movies.forEach(function (movie) {
    console.log(buildResult(movie));
})

function buildResult(movie) {
    var result = "you have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen "
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}