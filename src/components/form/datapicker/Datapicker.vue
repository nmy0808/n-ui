<template>
  <div class="datapicker-container">
    <n-popover
      onlyOuterClose
      position="bottom"
      trigger="click"
      @change-show="changeShow"
      ref="popover"
    >
      <template #content>
        <div class="datapicker-content">
          <div class="datapicker-content-header">
            <div class="datapicker-content-header-left">
              <div class="fh" @click="onChangeShowYear('prev')">
                <n-icon icon="i-d-arrow-left" />
              </div>
              <div class="fh" @click="onChangeShowMonth('prev')">
                <n-icon icon="i-arrow-left" />
              </div>
            </div>
            <div class="datapicker-content-header-center">
              <div class="fh">{{ showDate.year }}年</div>
              <div class="fh">{{ showDate.month + 1 }}月</div>
            </div>
            <div class="datapicker-content-header-right">
              <div class="fh" @click="onChangeShowMonth('next')">
                <n-icon icon="i-arrow-right" />
              </div>
              <div class="fh" @click="onChangeShowYear('next')">
                <n-icon icon="i-d-arrow-right" />
              </div>
            </div>
          </div>
          <div class="datapicker-content-body">
            <div class="datapicker-content-body-week">
              <div
                class="datapicker-content-body-week-item"
                v-for="it in weeks"
                :key="it"
              >
                {{ it }}
              </div>
            </div>
            <div class="datapicker-content-body-day">
              <div
                class="datapicker-content-body-day-item fh"
                v-for="date in calcShowDays"
                :key="date.getTime()"
                @click="onChangeShowDay(date)"
              >
                <div
                  class="datapicker-content-body-day-item-num"
                  :class="getClasses(date)"
                >
                  {{ date.getDate() }}
                </div>
              </div>
            </div>
          </div>
          <div class="datapicker-content-footer">
            <button @click="onUpdateDefaultDate">今天</button>
            <button @click="onInitShowDate">清空</button>
          </div>
        </div>
      </template>
      <div class="datapicker-input">
        <input type="text" :value="calcDefaultDateStr" />
        <n-icon icon="i-riqi" class="icon-left" />
        <n-icon icon="i-error" class="icon-right fh" />
      </div>
    </n-popover>
  </div>
</template>

<script>
import { timeUtil } from '../../../utils';
import NPopover from '../../viewport/popover/Popover.vue';
import NIcon from '../../basic/icon/Icon.vue';

export default {
  components: { NPopover, NIcon },
  props: {
    defaultDate: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      popoverComponent: null,
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      showDate: {
        year: 0,
        month: 0,
        day: 0,
      },
    };
  },
  computed: {
    calcToDayDate() {
      return timeUtil.getYearMonthDate(new Date());
    },
    calcDefaultDate() {
      return timeUtil.getYearMonthDate(this.defaultDate);
    },
    calcDefaultDateStr() {
      return timeUtil.dateFormat('YYYY-mm-dd', this.defaultDate);
    },
    calcShowDays() {
      const ONE_DAY_TIMESTAMP = 24 * 60 * 60 * 1000;
      const firstDay = timeUtil.getFirstDayMonth(
        new Date(this.showDate.year, this.showDate.month, this.showDate.day),
      );
      const firstWeek = firstDay.getDay();
      const firstDayTimestamp = firstDay.getTime();
      const startDayTimestamp = firstDayTimestamp - firstWeek * ONE_DAY_TIMESTAMP;
      const showDays = [];
      for (let i = 0; i < 42; i += 1) {
        showDays.push(new Date(startDayTimestamp + ONE_DAY_TIMESTAMP * i));
      }
      return showDays;
    },
  },
  mounted() {
    this.popoverComponent = this.$refs.popover;
    this.updateShowDate();
  },
  methods: {
    updateDefaultDate(date = new Date()) {
      this.$emit('update:defaultDate', date);
      this.$nextTick(() => {
        this.updateShowDate();
      });
    },
    changeShow(show) {
      if (!show) {
        this.updateShowDate();
      }
    },
    updateShowDate(date = this.defaultDate) {
      const { year, month, day } = timeUtil.getYearMonthDate(date);
      this.showDate.year = year;
      this.showDate.month = month;
      this.showDate.day = day;
    },
    getClasses(targetDate) {
      const {
        year: targetYear,
        month: targetMonth,
        day: targetDay,
      } = timeUtil.getYearMonthDate(targetDate);
      return {
        'other-data': targetMonth !== this.showDate.month,
        'current-data':
          targetYear === this.calcToDayDate.year
          && targetMonth === this.calcToDayDate.month
          && targetDay === this.calcToDayDate.day,
        'select-data':
          targetYear === this.calcDefaultDate.year
          && targetMonth === this.calcDefaultDate.month
          && targetDay === this.calcDefaultDate.day,
      };
    },
    onUpdateDefaultDate() {
      this.updateDefaultDate();
    },
    onChangeShowYear(params) {
      if (params === 'prev') {
        this.showDate = { ...this.showDate, year: this.showDate.year - 1 };
      } else {
        this.showDate = { ...this.showDate, year: this.showDate.year + 1 };
      }
    },
    onChangeShowMonth(params) {
      let { year } = this.showDate;
      if (params === 'prev') {
        let month = this.showDate.month - 1;
        if (month < 0) {
          month = 11;
          year -= 1;
        }
        this.showDate = { ...this.showDate, month, year };
      } else {
        let month = this.showDate.month + 1;
        if (month > 11) {
          month = 0;
          year += 1;
        }
        this.showDate = { ...this.showDate, month, year };
      }
    },
    onChangeShowDay(date) {
      this.updateDefaultDate(date);
      this.popoverComponent.show = false;
    },
    onInitShowDate() {
      this.updateShowDate();
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #3d60fa;
.datapicker-container {
  .datapicker-input {
    position: relative;
    input {
      outline: none;
      height: 2.4em;
      width: 15em;
      padding-left: 2em;
    }
    .icon-left {
      position: absolute;
      left: 0.5em;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }
    .icon-right {
      font-size: 12px;
      position: absolute;
      right: 0.5em;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(153, 153, 153, 0.692);
      cursor: pointer;
    }
  }
}
.datapicker-content {
  width: 300px;
  height: 337px;
  &-header {
    padding-top: 0.5em;
    display: flex;
    height: 2em;
    justify-content: space-between;
    padding: 0 1em;
    &-center {
      width: 5.5em;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    &-left,
    &-right {
      color: #67686c;
      width: 2.5em;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
  }
  &-body {
    font-size: 12px;
    color: #67686c;
    border-bottom: 1px solid #ccc;
    &-week {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 0.5em;
      &-item {
        width: 14.285%;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &-day {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      &-item {
        width: 14.285%;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &-num {
          width: 2em;
          height: 2em;
          text-align: center;
          line-height: 2em;
        }
      }
    }
  }
  &-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 0.5em;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 3em;
    padding: 0 1em;
  }
}
.fh:hover {
  color: $color;
}
.current-data {
  color: $color;
  font-weight: bold;
}
.select-data {
  font-weight: bold;
  background: $color;
  color: white;
  font-weight: bold;
  &:hover {
    color: white;
  }
}
.other-data {
  color: #ccc;
  &:hover {
    color: #ccc;
  }
}
</style>