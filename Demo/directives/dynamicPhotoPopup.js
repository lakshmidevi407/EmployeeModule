app.directive("photoAlbum", ['$timeout', 'photoalubum', 'alert', '$uibModal',
    function(timeout, photoalubum, alerts, uibModal) {
        //  var modalinstance;
        return {
            restrict: "E",
            templateUrl: "templates/dynamicPhotoPopup.html",
            scope: {
                photocustid: '=',

            },
            link: function(scope, element, attrs) {
                debugger;
                scope.slides = [];
                scope.close = function() {
                    debugger;
                    scope.$emit("closemodal");
                };
                scope.photoalbum = function() {
                    photoalubum.getphotoslideimages(83872).then(function(response) {
                        scope.slides = [];
                        _.each(response.data, function(item) {
                            scope.slides.push(item);
                        });
                    });
                };

                scope.$on("photoalbumopen", function(event) {
                    debugger;
                    alerts.dynamicpopup("photopopup.html", scope, uibModal);
                    scope.photoalbum();
                });

            }
        };
    }
]);