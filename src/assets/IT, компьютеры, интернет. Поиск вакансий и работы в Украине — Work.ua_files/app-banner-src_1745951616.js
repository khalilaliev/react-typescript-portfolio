$(document).ready(function () {
    $('.js-download-link').each(function () {
        var $downloadLink = $(this),
            place = $downloadLink.data('place'),
            isEmployerAppDownload = $downloadLink.data('is-employer-app-download'),
            isBanner = $downloadLink.parents('#showAppDownloadBanner').length > 0,
            numberOfDaysForExpire = 1,
            role = $downloadLink.data('role'),
            expireDate = new Date();

        expireDate.setDate(expireDate.getDate() + numberOfDaysForExpire);

        if (isBanner) {
            var $modal = $('#showAppDownloadBanner'),
                $modalContent = $modal.find('.modal-content'),
                startY = 0,
                currentY = 0,
                isDragging = false,
                isSwipingDown = false;

            setMenuZIndex('-1', 'hidden');
            $modal.modal('show');

            function closeModal(eventType) {
                $modal.modal('hide');
                sendEventToGA('appBanner', eventType, place, role);
                $.cookie(`${role}AppDownloadBannerIsClosed`, 1, {expires: expireDate, path: '/'});
            }

            function onDragStart(y) {
                startY = y;
                isDragging = true;
                isSwipingDown = false;
            }

            function onDragMove(y) {
                if (!isDragging) return;

                currentY = y;
                var translateY = currentY - startY;
                if (translateY > 0) {
                    $modalContent.css('transform', 'translateY(' + translateY + 'px)');
                    isSwipingDown = true;
                }
            }

            function onDragEnd() {
                if (!isDragging) return;

                isDragging = false;
                var translateY = currentY - startY;

                if (isSwipingDown && translateY > 100) {
                    closeModal('close');
                } else {
                    $modalContent.css('transform', 'translateY(0)');
                }
            }

            $modalContent.on('touchstart mousedown', function(e) {
                onDragStart(e.originalEvent.touches ? e.originalEvent.touches[0].clientY : e.clientY);
            });

            $(document).on('touchmove mousemove', function(e) {
                onDragMove(e.originalEvent.touches ? e.originalEvent.touches[0].clientY : e.clientY);
            });

            $(document).on('touchend mouseup', onDragEnd);

            $('#closeAppBanner, .modal-backdrop').click(function () {
                closeModal('close');
            });

            $downloadLink.click(function () {
                closeModal('click');

                $.ajax({
                    type: 'post',
                    url: '/api/v1/event/spark/',
                    data: {
                        id: '49',
                        data: {
                            eventType: 'clickModalAppDownload',
                            eventUrl: place,
                            eventRole: role,
                            ...(isEmployerAppDownload && { isClickEmployerAppLink: true }),
                        }
                    },
                    dataType: 'json',
                });
            });

            $('#showAppDownloadBanner').on('hidden.bs.modal', function (e) {
                setMenuZIndex('1061', 'auto');
            });

            function setMenuZIndex(zIndex, overflow) {
                var $menu = $('.menu-action-bottom-xs');
                if ($menu.length) {
                    $menu.css('zIndex', zIndex);
                    setTimeout(function () {
                        $('.content-wrap').css('overflow', overflow);
                    }, 100);
                }
            }
        }
    });
});

function sendEventToGA(eventCategory, eventAction, eventLabel, role)
{
    eventLabel = eventLabel || '';

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'ga_event',
        'eventCategory': eventCategory,
        'eventAction': eventAction,
        'eventLabel': eventLabel,
        'eventRole': role,
    });
}

// Аналітика для кнопки "Детальніше"
if ($('.js-click-mobile-app').length > 0) {
    $('.js-click-mobile-app').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/api/v1/event/spark/',
            data: {
                id: '72',
                data: {
                    eventType: 'click',
                    eventId: $(this).data('id'),
                    eventUrl: $(this).data('url'),
                    eventRole: $(this).data('role'),
                }
            },
            dataType: 'json',
        });
    });
}


if ($('.js-dropdown-app').length > 0) {
    $('.js-dropdown-app').each(function() {
        var elem = $(this),
            timeout;

        elem.hover(
            function() {
                timeout = setTimeout(function() {
                    elem.addClass('show')
                    .find('.dropdown-menu').addClass('show');
                    $.ajax({
                        type: 'post',
                        url: '/api/v1/event/spark/',
                        data: {
                            id: '72',
                            data: {
                                eventType: 'view',
                                eventId: elem.data('id'),
                                eventUrl: elem.data('url'),
                                eventRole: elem.data('role'),
                            }
                        },
                        dataType: 'json',
                    });
                }, 200);
            },
            function() {
                clearTimeout(timeout);
                if (!elem.find('.dropdown-menu').is(':hover')) {
                    elem.removeClass('show')
                    .find('.dropdown-menu').removeClass('show');
                }
            }
        );
    });
}
