var app = angular.module('movieLibrary', []);

app.directive("movieDirective", function () {
    return {
        templateUrl: 'app/movies/movie.html',
        scope: {
            movie: "=movieDir",
            remove: "&myOneWayBind"
        },
        link: function (scope, elem, attrs) {
            scope.deleteMovie = function () {

                var x = scope.remove();
                alert(scope.movie.name);

            };
            // elem.on('click', scope.clickingFunction);
        }
    }
});