//Селектор выбора даты
import { bind, memoize } from "decko/dist/decko";
import Config from "const/Config";
import FormElement from "lib/common/ui/form/FormElement";
import React from "react";
import moment from "moment";

export default class DateSelect extends FormElement {
  constructor(props, context) {
    super(props, context);
    const { min, max } = this.props;
    if (min === undefined || max === undefined) {
      throw new Error("Props 'min' and 'max' are required for every DateSelect component");
    }
    this.daySelect = React.createRef();
    this.monthSelect = React.createRef();
    this.yearSelect = React.createRef();
  }

  @memoize
  getLists([defaultDate, minDate, maxDate]) {
    const currentYearIsMax = defaultDate.year() === maxDate.year();
    const currentMonthIsMax = currentYearIsMax && defaultDate.month() === maxDate.month();
    const currentYearIsMin = defaultDate.year() === minDate.year();
    const currentMonthIsMin = currentYearIsMin && defaultDate.month() === minDate.month();
    return {
      days: new Array(defaultDate.daysInMonth())
        .fill()
        .map((value, index) => {
          if ((currentMonthIsMax && index >= maxDate.date()) || (currentMonthIsMin && index + 1 < minDate.date())) return null;
          return index + 1;
        })
        .filter((value) => !!value),
      months: new Array(Config.MONTHS_IN_YEAR)
        .fill()
        .map((value, index) => {
          if ((currentYearIsMax && index > maxDate.month()) || (currentYearIsMin && index < minDate.month())) return null;
          return index + 1;
        })
        .filter((value) => !!value),
      years: new Array(maxDate.year() - minDate.year() + 1)
        .fill()
        .map((value, index) => minDate.year() + index)
    };
  }

  render() {
    const { form: { formState } } = this.context;
    const { name, min, max, innerRef, ...restProps } = this.props;
    const minDate = moment(min);
    const maxDate = moment(max);
    let defaultDate = moment(formState[name]);
    defaultDate = defaultDate.isValid() ? defaultDate : minDate;
    const lists = this.getLists([defaultDate, minDate, maxDate]);
    return (
      <span {...restProps} role="listbox" data-type="date" ref={innerRef}>
        <select value={defaultDate.date()} ref={this.daySelect} onChange={this.handleSelectChange}>
          {lists.days.map((day) => {
            return <option key={day} value={day}>{day < Config.DECIMAL_BASE_NUMBER ? `0${day}` : day}</option>;
          })}
        </select>
        <select value={defaultDate.month() + 1} ref={this.monthSelect} onChange={this.handleSelectChange}>
          {lists.months.map((month) => {
            return <option key={month} value={month}>{month < Config.DECIMAL_BASE_NUMBER ? `0${month}` : month}</option>;
          })}
        </select>
        <select value={defaultDate.year()} ref={this.yearSelect} onChange={this.handleSelectChange}>
          {lists.years.map((year) => {
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
      </span>
    );
  }

  @bind
  handleSelectChange() {
    const { current: daySelect } = this.daySelect;
    const { current: monthSelect } = this.monthSelect;
    const { current: yearSelect } = this.yearSelect;
    const { form } = this.context;
    const { name } = this.props;
    const resultDate = moment([yearSelect.value, monthSelect.value - 1]);
    resultDate.date(Math.min(daySelect.value, resultDate.daysInMonth()));
    const value = resultDate.format(Config.DATE_FORMAT);
    form.onChange({ currentTarget: { name, value } });
  }
}
