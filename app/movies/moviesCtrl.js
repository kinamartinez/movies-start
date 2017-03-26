app.controller('MoviesCtrl', ['$scope', 'movies', '$log', function ($scope, movies, $log) {
    $scope.isDeleting = false;

    $scope.movies = movies.getMovies();

    $scope.movie = movies.movie;


    $scope.addMovie = function () {
        alert("This functionality will be available soon!");

    };

    $scope.clickGarbage = function () {
        $scope.isDeleting = !$scope.isDeleting;

    };


    // $scope.deleteMovies = function () {
    //     $scope.isDeleting = true;
    // };

    // $scope.doneDeleteMovies = function () {
    //     $scope.isDeleting = false;
    // };

    $scope.removeMovie = movies.removeMovie;

    $scope.deleteMovie = function (index) {
        //TODO: delete the movie only if the app is in "delete mode"
        if ($scope.isDeleting == true) {
            $scope.removeMovie(index)
        }
    };
}]);
