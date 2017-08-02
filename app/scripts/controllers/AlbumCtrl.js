(function() {
    function AlbumCtrl() {
      this.albumdata = angular.copy(albumPicasso)
    }


angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
