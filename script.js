setInterval(() => {
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let d = new Date();
    // d.setHours(10);
    let h = d.getHours();
    isAM = h >= 12 ? 'PM' : 'AM';
    if (h > 12) {
        h = h - 12;
    }
    let m = d.getMinutes();
    let s = d.getSeconds();

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hour_dot = document.querySelector('.hour_dot');

    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = isAM
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    hour_dot.style.transform = `rotateZ(${h * 30}deg)`;
})