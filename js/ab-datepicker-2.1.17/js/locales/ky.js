(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select date ...",
		        "buttonLabel": "Click or press the Enter key or the spacebar to open the calendar",
		        "prevButtonLabel": "Go to previous month",
		        "nextButtonLabel": "Go to next month",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "Close the calendar",
		        "prevMonthButtonLabel": "Go to the previous year",
		        "prevYearButtonLabel": "Go to the previous twenty years",
		        "nextMonthButtonLabel": "Go to the next year",
		        "nextYearButtonLabel": "Go to the next twenty years",
		        "changeMonthButtonLabel": "Click or press the Enter key or the spacebar to change the month",
		        "changeYearButtonLabel": "Click or press the Enter key or the spacebar to change the year",
		        "changeRangeButtonLabel": "Click or press the Enter key or the spacebar to go to the next twenty years",
		        "calendarHelp": "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "январь",
		        "февраль",
		        "март",
		        "апрель",
		        "май",
		        "июнь",
		        "июль",
		        "август",
		        "сентябрь",
		        "октябрь",
		        "ноябрь",
		        "декабрь"
		    ],
		    "month_names_abbreviated": [
		        "янв.",
		        "фев.",
		        "мар.",
		        "апр.",
		        "май",
		        "июн.",
		        "июл.",
		        "авг.",
		        "сен.",
		        "окт.",
		        "ноя.",
		        "дек."
		    ],
		    "month_names_narrow": [
		        "Я",
		        "Ф",
		        "М",
		        "А",
		        "М",
		        "И",
		        "И",
		        "А",
		        "С",
		        "О",
		        "Н",
		        "Д"
		    ],
		    "day_names": [
		        "жекшемби",
		        "дүйшөмбү",
		        "шейшемби",
		        "шаршемби",
		        "бейшемби",
		        "жума",
		        "ишемби"
		    ],
		    "day_names_abbreviated": [
		        "жек.",
		        "дүй.",
		        "шейш.",
		        "шарш.",
		        "бейш.",
		        "жума",
		        "ишм."
		    ],
		    "day_names_short": [
		        "жек.",
		        "дүй.",
		        "шейш.",
		        "шарш.",
		        "бейш.",
		        "жума",
		        "ишм."
		    ],
		    "day_names_narrow": [
		        "Ж",
		        "Д",
		        "Ш",
		        "Ш",
		        "Б",
		        "Ж",
		        "И"
		    ],
		    "day_periods": {
		        "am": "таңкы",
		        "noon": "чак түш",
		        "pm": "түштөн кийин"
		    },
		    "day_periods_abbreviated": {
		        "am": "таңкы",
		        "noon": "чак түш",
		        "pm": "түштөн кийин"
		    },
		    "day_periods_narrow": {
		        "am": "тң",
		        "noon": "чт",
		        "pm": "тк"
		    },
		    "quarter_names": [
		        "1-чейрек",
		        "2-чейрек",
		        "3-чейрек",
		        "4-чейрек"
		    ],
		    "quarter_names_abbreviated": [
		        "1-чей.",
		        "2-чей.",
		        "3-чей.",
		        "4-чей."
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "биздин заманга чейин",
		        "биздин заман"
		    ],
		    "era_names_abbreviated": [
		        "б.з.ч.",
		        "б.з."
		    ],
		    "era_names_narrow": [
		        "б.з.ч.",
		        "б.з."
		    ],
		    "full_format": "EEEE, d-MMMM, y-'ж'.",
		    "long_format": "y MMMM d",
		    "medium_format": "y MMM d",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 0
		};
	}
})();