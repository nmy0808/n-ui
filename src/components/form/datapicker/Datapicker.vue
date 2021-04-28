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
        <div class="datapicker-content-header">
          <div class="datapicker-content-header-left">
            <div class="fh" @click="onChangeShowYear('prev')">
              <n-icon icon="i-arrow-first" />
            </div>
            <div class="fh" @click="onChangeShowMonth('prev')">
              <n-icon icon="i-arrow-left" />
            </div>
          </div>
          <div
            class="datapicker-content-header-center fh"
            @click="onChangeMode"
          >
            {{ `${showDate.year}年${showDate.month + 1}月` }}
          </div>
          <div class="datapicker-content-header-right">
            <div class="fh" @click="onChangeShowMonth('next')">
              <n-icon icon="i-arrow-right" />
            </div>
            <div class="fh" @click="onChangeShowYear('next')">
              <n-icon icon="i-arrow-last" />
            </div>
          </div>
        </div>
        <div class="datapicker-content" :class="{ scoped: mode === 'scoped' }">
          <template v-if="mode === 'scoped'">
            <div class="datapicker-content-year">
              <div>选择年</div>
              <select size="5" v-model="showDate.year">
                <template v-for="year in calcScopedYears">
                  <option :key="year" :value="year">{{ year + '年' }}</option>
                </template>
              </select>
            </div>
            <div class="datapicker-content-month">
              <div>选择月份</div>
              <select size="5" v-model="showDate.month">
                <template v-for="(it, i) in calcScopedMonth">
                  <option :key="it" :value="i">{{ months[it] }}</option>
                </template>
              </select>
            </div>
          </template>
          <template v-else-if="mode === 'day'">
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
                  @click="onChangeShowDay(date, $event)"
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
          </template>
          <div class="datapicker-content-footer">
            <n-button v-if="mode === 'scoped'" @click.native.stop="onChangeMode"
              >返回</n-button
            >
            <n-button v-else @click.native.stop="onClosePopover">关闭</n-button>
            <n-button-group>
              <n-button @click.native="onUpdateDefaultDate">今天</n-button>
              <n-button @click.native="onInitShowDate">重置</n-button>
            </n-button-group>
          </div>
        </div>
      </template>
      <div class="datapicker-input">
        <div class="input">{{ calcDefaultDateStr }}</div>
        <n-icon icon="i-date" class="icon-left" />
      </div>
    </n-popover>
  </div>
</template>

<script>
import { timeUtil } from '../../../utils';
import NPopover from '../../viewport/popover/Popover.vue';
import NIcon from '../../basic/icon/Icon.vue';
import NButtonGroup from '../../basic/button/ButtonGroup.vue';
import NButton from '../../basic/button/Button.vue';

export default {
  name: 'NDatapicker',
  components: {
    NPopover,
    NIcon,
    NButton,
    NButtonGroup,
  },
  props: {
    minScoped: {
      type: Date,
      default: () => new Date('1000-1-1'),
    },
    maxScoped: {
      type: Date,
      default: () => new Date('2999-1-1'),
    },
    defaultDate: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      mode: 'day',
      popoverComponent: null,
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      months: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
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
    calcScopedYears() {
      const min = this.minScoped.getFullYear();
      const max = this.maxScoped.getFullYear();
      const months = [];
      for (let i = min; i <= max; i += 1) {
        months.push(i);
      }
      return months;
    },
    calcScopedMonth() {
      const scopedMonths = [];
      const min = timeUtil.getFirstDayMonth(this.minScoped);
      const max = timeUtil.getLastDayMonth(this.maxScoped);
      const showYear = this.showDate.year;
      for (let i = 0; i < 12; i += 1) {
        const date = new Date(showYear, i, 1);
        if (date > min && date < max) {
          scopedMonths.push(i);
        }
      }
      return scopedMonths;
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
    onClosePopover() {
      this.popoverComponent.show = false;
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
        'no-scoped-data':
          targetDate < this.minScoped || targetDate > this.maxScoped,
      };
    },
    onChangeMode() {
      if (this.mode === 'scoped') {
        this.mode = 'day';
      } else {
        this.mode = 'scoped';
      }
    },
    onUpdateDefaultDate() {
      this.updateDefaultDate();
    },
    onChangeShowYear(params) {
      let year;
      const min = this.minScoped.getFullYear() || -1;
      const max = this.maxScoped.getFullYear() || 9999;
      if (params === 'prev') {
        year = this.showDate.year - 1;
      } else {
        year = this.showDate.year + 1;
      }
      if (year < min) {
        return;
      }
      if (year > max) {
        return;
      }
      this.showDate = { ...this.showDate, year };
    },
    onChangeShowMonth(params) {
      let { year } = this.showDate;
      let month;
      // calcScopedMonth
      if (params === 'prev') {
        month = this.showDate.month - 1;
        if (month < 0) {
          month = 11;
          year -= 1;
        }
      } else {
        month = this.showDate.month + 1;
        if (month > 11) {
          month = 0;
          year += 1;
        }
      }
      const min = timeUtil.getFirstDayMonth(this.minScoped);
      const max = timeUtil.getLastDayMonth(this.maxScoped);
      const date = new Date(year, month, 1);
      if (date > min && date < max) {
        this.showDate = { ...this.showDate, month, year };
      }
    },
    onChangeShowDay(date, { target }) {
      // 如果超出范围不会改变任何数据
      if (
        target.classList.contains('no-scoped-data')
        || target.querySelector('.no-scoped-data')
      ) {
        return;
      }
      this.updateDefaultDate(date);
      this.onClosePopover();
    },
    onInitShowDate() {
      this.updateShowDate();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';
$color: $primary;
.datapicker-container {
  .datapicker-input {
    position: relative;
    .input {
      outline: none;
      height: 2.4em;
      width: 15em;
      padding-left: 2em;
      display: flex;
      align-items: center;
      border: 1px solid $gray;
      border-radius: $base-radius;
      cursor: pointer;
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
      z-index: 1;
      transform: translateY(-50%);
      color: rgba(153, 153, 153, 0.692);
      cursor: pointer;
    }
  }
}
.datapicker-content {
  user-select: none;
  width: 300px;
  height: 300px;
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
          font-size: 14px;
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
    justify-content: space-between;
    align-items: center;
    height: 3em;
    padding: 0 1em;
  }
  &-year,
  &-month {
    flex-grow: 1;
    padding-top: 1em;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &.scoped {
    display: flex;
    padding: 0 1.5em;
  }
  select {
    font-size: 14px;
    margin-top: 1em;
    height: 12em;
    border: 1px solid rgba(204, 204, 204, 0.24);
    outline: none;
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
    color: $color;
  }
}
.no-scoped-data {
  cursor: no-drop;
  color: #ccc;
  text-decoration: line-through;
  font-weight: lighter;
  &:hover {
    color: #ccc;
  }
}
</style>
