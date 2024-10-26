import { useState, useCallback, useMemo } from "react";
import { Colors, Radius, Variant } from "../types";
import { Button } from "../Button/Button";
import styles from "./calendar.module.css";
import { Flex } from "../Flex/Flex";

export type SelectionMode = "single" | "range" | "multiple";

interface CalendarProps {
  selectionMode?: SelectionMode;
  onDateSelect?: (dates: Date[]) => void;
  className?: string;
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
}

export const Calendar = ({
  variant = "solid",
  colorVariant = "blue",
  radius = 3,
  selectionMode = "single",
  onDateSelect,
  className = "",
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: Date[] = [];
    const startPadding = firstDay.getDay();

    // Add padding days from previous month
    for (let i = startPadding - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }

    // Add days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    // Add padding days for next month
    const endPadding = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= endPadding; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  }, [currentMonth]);

  const handleDateClick = useCallback(
    (date: Date) => {
      switch (selectionMode) {
        case "single":
          setRangeStart(date); // This will allow the "range" selection mode to behave as expected if it is activated after a single date has been selected.
          setSelectedDates([date]);
          onDateSelect?.([date]);
          break;

        case "multiple":
          const dateExists = selectedDates.some(
            (d) =>
              d.getFullYear() === date.getFullYear() &&
              d.getMonth() === date.getMonth() &&
              d.getDate() === date.getDate()
          );

          const newDates = dateExists
            ? selectedDates.filter(
                (d) =>
                  d.getFullYear() !== date.getFullYear() ||
                  d.getMonth() !== date.getMonth() ||
                  d.getDate() !== date.getDate()
              )
            : [...selectedDates, date];

          // Allow the "range" selection mode to behave as expected if it is activated after a single date has been selected.
          if (newDates.length === 1) {
            setRangeStart(date);
          } else {
            setRangeStart(null);
          }

          setSelectedDates(newDates);
          onDateSelect?.(newDates);
          break;

        case "range":
          if (!rangeStart) {
            setRangeStart(date);
            setSelectedDates([date]);
            onDateSelect?.([date]);
          } else {
            const start = rangeStart < date ? rangeStart : date;
            const end = rangeStart < date ? date : rangeStart;
            const range: Date[] = [];

            for (
              let d = new Date(start);
              d <= end;
              d.setDate(d.getDate() + 1)
            ) {
              range.push(new Date(d));
            }

            setSelectedDates(range);
            setRangeStart(null);
            onDateSelect?.(range);
          }
          break;
      }
    },
    [selectionMode, selectedDates, rangeStart, onDateSelect]
  );

  const isSelected = useCallback(
    (date: Date) => {
      return selectedDates.some(
        (d) =>
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate()
      );
    },
    [selectedDates]
  );

  const isCurrentMonth = useCallback(
    (date: Date) => {
      return date.getMonth() === currentMonth.getMonth();
    },
    [currentMonth]
  );

  const navigateMonth = useCallback((direction: 1 | -1) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + direction, 1)
    );
  }, []);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Flex justify="space-between" align="center" className="mb4">
        <Button onClick={() => navigateMonth(-1)}>←</Button>
        <h4>
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h4>
        <Button onClick={() => navigateMonth(1)}>→</Button>
      </Flex>

      <div
        className={["grid", "grid-cols-7", "gap-1"]
          .map((c) => styles[c])
          .join(" ")}
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className={`${styles["text-center"]} ${styles["text-sm"]} ${styles["font-medium"]} ${styles["py-2"]}`}
          >
            {day}
          </div>
        ))}

        {daysInMonth.map((date, index) => (
          <Button
            key={index}
            onClick={() => handleDateClick(date)}
            className={`
              ${["text-sm"].map((c) => styles[c]).join(" ")}
            `}
            colorVariant={isSelected(date) ? colorVariant : "gray"}
            variant={isSelected(date) ? variant : "plain"}
            radius={radius}
            disabled={!isCurrentMonth(date)}
          >
            {date.getDate()}
          </Button>
        ))}
      </div>
    </div>
  );
};
