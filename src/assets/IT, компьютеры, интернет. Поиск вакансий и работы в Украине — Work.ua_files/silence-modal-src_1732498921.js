$(document).ready(function () {
    if ($('#showSilenceModal').length) {
        let allowClose = false;
        let isAlertOpen = false;

        function getTodayTime(hour, minute, second = 0) {
            const now = new Date();
            const time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second);
            return time.getTime();
        }

        function formatTime(number) {
            return number.toString().padStart(2, '0');
        }

        function countdown(hideTime) {
            const interval = setInterval(function () {
                const currentTime = new Date();

                if (currentTime >= hideTime) {
                    document.getElementById("silenceCounter").innerHTML = "00:00";
                    clearInterval(interval);
                    return;
                }

                const timeDiffInSeconds = Math.floor((hideTime - currentTime) / 1000);
                const minutes = Math.floor(timeDiffInSeconds / 60);
                const seconds = timeDiffInSeconds % 60;

                document.getElementById("silenceCounter").innerHTML =
                    formatTime(minutes) + ":" + formatTime(seconds);
            }, 1000);
        }

        function showModal(hideTime) {
            countdown(hideTime);
            setTimeout(function () {
                $('#showSilenceModal').modal({ show: true });
            }, 1000);
            const timeToHide = hideTime - Date.now();
            if (timeToHide > 0) {
                setTimeout(hideModal, timeToHide);
            } else {
                hideModal();
            }
        }

        function hideModal() {
            allowClose = true;
            $('#showSilenceModal').modal('hide');
        }

        $('#showSilenceModal').on('hide.bs.modal', function (e) {
            if (!allowClose) {
                e.preventDefault();
                if (isAlertOpen) return;
                isAlertOpen = true;
                $('.js-modal-silence-alert').addClass('is-open');
                setTimeout(function () {
                    $('.js-modal-silence-alert').removeClass('is-open');
                    isAlertOpen = false;
                }, 2500);
            }
        });

        function checkAndScheduleModal() {
            const showTime = getTodayTime(8, 59, 59);  // Запуск за секуду до 9:00 щоб таймер встиг ініціалізуватись рівно о 9 ранку
            const hideTime = getTodayTime(9, 1, 0); // Закінчення о 9:01
            const now = Date.now();

            if (now >= showTime && now < hideTime) {
                showModal(hideTime);
            } else {
                const timeToShow = showTime > now ? showTime - now : showTime + 24 * 60 * 60 * 1000 - now;
                setTimeout(checkAndScheduleModal, timeToShow);
            }
        }

        checkAndScheduleModal();
    }
});
