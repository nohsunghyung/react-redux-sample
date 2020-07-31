import React, { Component } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import addDays from "date-fns/addDays";
// import subDays from "date-fns/subDays";
import ko from "date-fns/locale/ko";
// import "./index.css";
import moment from "moment";

registerLocale("ko", ko);
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: this.convertDateFormat(new Date()),
      dateMode: "days",
      dateFormat: "yyyy/MM/dd",
      maxDate: this.convertDateFormat(new Date()),
      minDate: this.convertDateFormat(new Date("2020-5-05")),
      minDateMonth: this.convertDateFormat(new Date("2019-05")),
      minDateYear: this.convertDateFormat(new Date("2010")),
    };
  }

  // 날짜 변경
  handleChange = (date) => {
    this.setState({
      startDate: this.convertDateFormat(date),
    });
  };

  // moment로 날짜 포맷
  convertDateFormat = (date) => {
    return moment(date).toDate();
  };

  // 요일 변환 -> 토/일 표시를 위함
  getDayName = (date) => {
    return date
      .toLocaleDateString("ko-KR", {
        weekday: "long",
      })
      .substr(0, 1);
  };

  // 년도, 월, 일 변환
  setFormatName = (date) => {
    const year = date.toLocaleDateString("ko-KR", {
      year: "numeric",
    });

    const month = date.toLocaleDateString("ko-KR", {
      month: "numeric",
    });
    // console.log(date);

    if (this.state.dateMode === "year") {
      return `${year}`;
    } else {
      return `${year}${month}`;
    }
  };

  // 토,일 클래스 추가
  setDayAddClass = (date) => {
    return this.getDayName(date) === "토"
      ? "saturday"
      : this.getDayName(date) === "일"
      ? "sunday"
      : null;
  };

  // 날짜 타입 변경 이벤트
  onChangeDateType = (e) => {
    const type = e.currentTarget.name;
    let displayDateFormat = "";

    // console.log(
    //   "type -",
    //   this.state.dateMode,
    //   "startDate -",
    //   this.state.startDate
    // );

    // 기존 date타입과 선택한 type이 같을경우
    if (this.state.dateMode === type) return;

    // 타입 변경시 셋팅된 날짜 초기화
    this.setState({
      startDate: this.convertDateFormat(new Date()),
    });

    if (type === "year") {
      displayDateFormat = "yyyy";
      this.setState({
        dateMode: "year",
      });
    } else if (type === "month") {
      displayDateFormat = "yyyy/MM";
      this.setState({
        dateMode: "month",
      });
    } else if (type === "days") {
      displayDateFormat = "yyyy/MM/dd";
      this.setState({
        dateMode: "days",
      });
    }
    this.setState({
      dateFormat: displayDateFormat,
    });
  };

  // input 입력 막기
  handleInput = (e) => {
    e.preventDefault();
  };

  setYearHeader = () => {
    const YEAR_CLASS = ".react-datepicker-year-header";
    const MONTH_CLASS = ".react-datepicker__current-month";
    const dateMode = this.state.dateMode;

    if (dateMode === "days") {
      let monthEl = document.querySelector(MONTH_CLASS);
      const monthText = monthEl.innerText;
      console.log(monthText);
    } else if (dateMode === "month") {
      let yearEl = document.querySelector(YEAR_CLASS);
      const yearText = yearEl.innerText;
      const year = yearText.concat("년");
      yearEl.innerText = year;
    } else if (dateMode === "year") {
      let yearEl = document.querySelector(YEAR_CLASS);
      const yearText = yearEl.innerText;
      const yearArr = yearText.split("-");
      const year1 = yearArr[0].replace(/ /g, "").concat("년");
      const year2 = yearArr[1].replace(/ /g, "").concat("년");
      yearEl.innerText = `${year1} - ${year2}`;
    }

    // let yearEl = document.querySelector(".react-datepicker-year-header");
    // if (!yearEl) return;
    // const yearText = yearEl.innerText;
    // const yearArr = yearText.split("-");
    // const year1 = yearArr[0].replace(/ /g, "").concat("년");
    // const year2 = yearArr[1].replace(/ /g, "").concat("년");
    // yearEl.innerText = `${year1} - ${year2}`;
  };

  // custom 헤더 함수
  customHeader = (obj) => {
    const {
      date,
      decreaseMonth,
      decreaseYear,
      increaseMonth,
      increaseYear,
      nextMonthButtonDisabled,
      nextYearButtonDisabled,
      prevMonthButtonDisabled,
      prevYearButtonDisabled,
    } = obj;
    return (
      <div className="customer-header">
        <button
          onClick={
            this.state.dateMode === "days" ? decreaseMonth : decreaseYear
          }
          disabled={
            this.state.dateMode === "days"
              ? prevMonthButtonDisabled
              : prevYearButtonDisabled
          }
          className="react-datepicker__navigation react-datepicker__navigation--previous"
        >
          {"<"}
        </button>
        {this.setFormatName(date)}
        <button
          onClick={
            this.state.dateMode === "days" ? increaseMonth : increaseYear
          }
          disabled={
            this.state.dateMode === "days"
              ? nextMonthButtonDisabled
              : nextYearButtonDisabled
          }
          className="react-datepicker__navigation react-datepicker__navigation--next"
        >
          {">"}
        </button>
      </div>
    );
  };

  render() {
    const {
      startDate,
      maxDate,
      minDate,
      minDateYear,
      minDateMonth,
      dateFormat,
      dateMode,
    } = this.state;
    return (
      <div>
        <DatePicker
          locale="ko"
          selected={startDate}
          dateFormat={dateFormat}
          onChange={this.handleChange}
          onChangeRaw={this.handleInput}
          minDate={
            dateMode === "year"
              ? minDateYear
              : dateMode === "month"
              ? minDateMonth
              : minDate
          }
          maxDate={maxDate}
          showMonthYearPicker={dateMode === "month" && true}
          showYearPicker={dateMode === "year" && true}
          dayClassName={this.setDayAddClass}
          // renderCustomHeader={
          //   dateMode !== "year" ? this.customHeader : undefined
          // }
          // renderCustomHeader={this.customHeader}
          onCalendarOpen={this.setYearHeader}
          onYearChange={this.setYearHeader}
          onMonthChange={this.setYearHeader}
          // onYearChange={dateMode !== "days" ? this.setYearHeader : undefined}
          withPortal
        />

        <div>
          <button type="button" name="days" onClick={this.onChangeDateType}>
            일간
          </button>
          <button type="button" name="month" onClick={this.onChangeDateType}>
            월간
          </button>
          <button type="button" name="year" onClick={this.onChangeDateType}>
            연간
          </button>
        </div>
      </div>
    );
  }
}

export default App;
