(function ($) {
    "use strict";

    /*--/ Menu Filters /--*/
    var Container = $('.container');
    Container.imagesLoaded(function () {
        var portfolio = $('#menu-flters');
        portfolio.on('click', 'li', function () {
            $(this).addClass('filter-active').siblings().removeClass('filter-active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });
    });


}(jQuery));