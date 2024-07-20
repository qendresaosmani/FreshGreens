document.addEventListener('DOMContentLoaded', () => {
    function animateValue(id, start, end, duration) {
        let obj = document.getElementById(id);
        let range = end - start;
        let minTimer = 50;
        let stepTime = Math.abs(Math.floor(duration / range));

        stepTime = Math.max(stepTime, minTimer);

        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            obj.innerHTML = value;
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }

    animateValue("counter1", 0, 10000, 5000);
    animateValue("counter2", 0, 100, 3000);
    animateValue("counter3", 0, 20, 2000);
    animateValue("counter4", 0, 100, 3000);
});
