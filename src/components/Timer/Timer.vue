<template>
  <div id="timer" class="timer">
      <div :class='statusType'>
        <div class='day'>
          <span class='number'>{{ days }}</span>
          <div class='format'>{{ wordString.day }}</div>
        </div>
        <div class='hour'>
          <span class='number'>{{ hours }}</span>
          <div class='format'>{{ wordString.hours }}</div>
        </div>
        <div class='min'>
          <span class='number'>{{ minutes }}</span>
          <div class='format'>{{ wordString.minutes }}</div>
        </div>
        <div class='sec'>
          <span class='number'>{{ seconds }}</span>
          <div class='format'>{{ wordString.seconds }}</div>
        </div>
      </div>
      <div class='message'>{{ message }}</div>
      <div class='status-tag'>{{ statusText }}</div>
    </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
    name: 'timer',
    props: ['starttime', 'trans', 'duration', 'status'],
    data() {
        return {
            timer: '',
            wordString: {},
            start: '',
            end: '',
            interval: '',
            days: '',
            minutes: '',
            hours: '',
            seconds: '',
            message: '',
            statusType: '',
            statusText: '',
        };
    },
    created() {
        this.wordString = this.trans;
    },
    mounted() {
        this.end = new Date(this.starttime).getTime();
        const time = (this.status === 1) ? this.duration + this.end : this.end;
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
            let distance = end - now;

            if (Number.isNaN(distance) || distance < 0 || this.status === 1) {
                // This handle timer when it the contest has already started.
                distance = this.duration + this.starttime - now;
                if (distance > 0) {
                  this.message = this.wordString.running;
                  this.statusText = this.wordString.status.running;
                  this.statusType = 'started';
                  this.$emit('setTimeUp', false);
                  this.calcTime(distance);
                  return;
                }
                this.message = this.wordString.expired;
                this.statusText = this.wordString.status.expired;
                this.statusType = 'expired';
                this.days = 0;
                this.hours = 0;
                this.minutes = 0;
                this.seconds = 0;
                this.$emit('setTimeUp', true);
                clearInterval(this.interval);
                return;
            }
            if (distance > 0) {
                this.message = this.wordString.upcoming;
                this.statusText = this.wordString.status.upcoming;
                this.statusType = 'upcoming';
                this.$emit('setTimeUp', false);
            }
            this.calcTime(distance);
        },
        calcTime(dist) {
            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        },
    },
    watch: {
      starttime(value) {
        this.end = new Date(value).getTime();
        this.end = (this.status === 1) ? this.duration + this.end : this.end;
      },
    },
};
</script>

<style lang='scss'>
.timer {
  font-size: 20px;
  margin-top: 10px;
    .expired {
        .number {
            background: rgb(218, 216, 216);
            color:#000;
        }
    }
      .day, .hour, .min, .sec {
        font-size: 30px;
        display: inline-block;
        font-weight: 500;
        text-align: center;
        margin: 0 5px;
        border-radius:5px;
        background: rgb(218, 216, 216);
        .format {
          font-weight: 300;
          font-size: 14px;
          opacity: 0.8;
          width: 60px;
        }
      }
      .number{
        background: $secondary-color;
        padding: 0 5px;
        border-radius: 5px 5px 0 0;
        color:#fff;
        display: inline-block;
        width: 60px;
        text-align: center;
      }
      .message {
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;
        padding:5px 10px;
      }
      .status-tag{
        width: 270px;
        margin: 6px 5px;
        padding: 8px 0;
        font-weight: 400;
        color: #000;
        font-size:1.1rem;
        text-align: center;
        display:none;
        border-radius: 5px;
        background: rgb(235, 234, 234);
      }
    }
</style>
