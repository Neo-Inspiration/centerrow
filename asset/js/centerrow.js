(function ($) {
    $(document).ready(function () {

        $('#search-form').addClass('closed');

        $('.search-toggle').click(function () {
            $('#search-form').toggleClass('closed').toggleClass('open');
            if ($('#search-form').hasClass('open')) {
                $('#query').focus();
            }
        });

        if ($.isFunction($.fn.lightSlider)) {
            $('#itemfiles').lightSlider({
                mode: 'fade',
                autoWidth: true,
                adaptiveHeight: false,
                gallery: true,
                item: 1,
                loop: true,
                thumbItem: 15,
                slideMargin: 0,
                enableDrag: false,
                currentPagerPosition: 'middle',
                onSliderLoad: function (el) {
                    el.lightGallery({
                        selector: '#itemfiles .media',
                        download: false,
                        zoom: true,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            controls: 1
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: 'A90707'
                        },
                    });
                }
            });
        }

        // ---- metadata-browse module custom ----
        $('a.metadata-browse-link')
            .toggleClass('metadata-browse-link')
            .attr('class', 'metadata-browse-link-custom')
            .text(' ▶');

        // ---- Search module custom ----
        localStorage.setItem('search_view_type', 'grid');

        // ---- Search Page ----
        if ($('input#q').length > 0) {
            // set form tag class according to search result
            var noResults = $('.search-results-wrapper>.search-results>.noresults').length > 0;
            var notSearched = $('.search-results-wrapper').length == 0;
            if (noResults) {
                $('.search-results-wrapper').siblings('form').addClass('no-results');
            }

            if (notSearched) {
                $('input#q').parents('form').addClass('not-searched');
            }
        }

        // ---- lSPager, lSGallery custom ----
        if ($('.lSSlideOuter').length > 0 && $('.lSPager.lSGallery li').length < 2) {
            $('ul.lSPager.lSGallery').hide();
        }

        // ---- item-showcase block ----
        if ($('.blocks').has('.item-showcase').length > 0) {
            $('.blocks').has('.item-showcase').css('width', '100%');
        }

        // ---- nav menu ----
        $('#nav-expand ul li').each((i, e) => {
            let title = $(e).children('a').text();
            if (/^\#.+/.exec(title)) {
                $(e).remove();
            }
        });

    });
})(jQuery)