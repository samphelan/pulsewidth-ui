import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  CSSProperties,
} from "react";
import styles from "./slider.module.css";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  style?: CSSProperties;
}

export const Slider = forwardRef(function Slider(
  {
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange,
    className,
    style,
  }: SliderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const internalMax = (max - min) / step;
  const internalMin = 0;
  const [internalValue, setInternalValue] = useState(value || min);
  const handleChange = () => {
    if (onChange) onChange(internalValue);
  };

  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const multiplier = 100 / (max - min);

  // Function to update slider value based on mouse position
  const updatePosition = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newValue = Math.round(
        ((clientX - rect.left) / rect.width) * (internalMax - internalMin) +
          internalMin
      );

      const newPosition = Math.max(min, Math.min(max, newValue * step + min));
      const formattedPosition = Math.round(newPosition * 10) / 10;
      setInternalValue(formattedPosition);
      if (onChange) onChange(formattedPosition);
    }
  };

  // Function to handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    updatePosition(e.clientX);
  };

  // Update value on change
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }, 1);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Allow control via arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (buttonRef.current !== document.activeElement) {
        return;
      }

      const current = internalValue;

      const increment = () => {
        const newVal = current + step > max ? max : current + step;
        setInternalValue(newVal);
        if (onChange) onChange(newVal);
      };

      const decrement = () => {
        const newVal = current - step < min ? min : current - step;
        setInternalValue(newVal);
        if (onChange) onChange(newVal);
      };

      switch (event.key) {
        case "ArrowUp":
          increment();
          break;
        case "ArrowRight":
          increment();
          break;
        case "ArrowDown":
          decrement();
          break;
        case "ArrowLeft":
          decrement();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [internalValue]);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const val =
    internalValue > max ? max : internalValue < min ? min : internalValue;

  return (
    <div
      className={[styles["wrapper"], className].join(" ")}
      style={style}
      ref={ref}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        aria-label="Custom Slider"
        style={{ display: "none" }}
      />
      <div
        className={styles["custom"]}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <div className={styles["customTrack"]}></div>
        <div
          className={styles["trackFill"]}
          style={{ width: `calc(${(val - min) * multiplier}% - 10px)` }}
        ></div>
        <button
          ref={buttonRef}
          className={styles["customThumb"]}
          style={{
            left: `calc(${(val - min) * multiplier}% - 10px)`,
          }}
        ></button>
      </div>
      <div style={{ textAlign: "center" }}>{val}</div>
    </div>
  );
});
