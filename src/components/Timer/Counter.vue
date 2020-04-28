<template>
    <li class='timer list '>
        <i class='uil uil-clock-three'></i> {{hours}}Hr : {{minutes}}Min : {{seconds}}s
   </li>
</template>

<script>
import { setInterval } from 'timers';
import { mapGetters } from 'vuex';

export default {
    name: 'timer',
    props: ['startime', 'duration'],
    data() {
        return {
            timer: '',
            interval: '',
            minutes: '',
            hours: '',
            seconds: '',
        };
    },
    mounted() {
        const timeDuration = this.currentContest.contest.starttime + this.currentContest.contest.duration;
        this.end = new Date(timeDuration).getTime();
        this.timerCount(this.end);
        this.interval = setInterval(() => {
          this.timerCount(this.end);
        }, 1000);
    },
    methods: {
        timerCount(end) {
            // Get today's date and time
            const now = new Date().getTime();
            // Find the distance between now and the count down date
            const distance = end - now;

            if (Number.isNaN(distance) || distance < 0) {
                this.hours = 0;
                this.minutes = 0;
                this.seconds = 0;
                this.$store.dispatch('CONTEST_TIMEUP', true);
                clearInterval(this.interval);
                return;
            }
            if (distance > 0) {
                this.$store.dispatch('CONTEST_TIMEUP', false);
            }
            this.calcTime(distance);
        },
        calcTime(dist) {
            // Time calculations for hours, minutes and seconds
            this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        },
    },
    computed: {
        ...mapGetters(['currentContest', 'contestTimeUp']),
    },
    watch: {
      currentContest(value) {
        this.end = value.contest.starttime + value.contest.duration;
      },
    },
};
</script>

<style lang='scss'>
</style>
