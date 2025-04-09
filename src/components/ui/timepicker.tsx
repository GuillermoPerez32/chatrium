import { useRef, useState } from "react";

type Time = {
  hours: number | null;
  minutes: number | null;
};

type TimeRangeProps = {
  timeRange: { start: Time; end: Time };
  setTimeRange: (newRange: { start: Time; end: Time }) => void;
  is24HourFormat: boolean;
};

export default function AdvancedTimeRangePicker({
  timeRange,
  setTimeRange,
  is24HourFormat,
}: TimeRangeProps) {
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const [startInputValue, setStartInputValue] = useState("");
  const [endInputValue, setEndInputValue] = useState("");

  // Maneja el cambio de la entrada manual para start o end
  const handleTimeChange = (field: "start" | "end", value: string) => {
    console.log("Field:", field, "Value:", value);

    if (field === "start") setStartInputValue(value);
    else setEndInputValue(value);

    // Separar la entrada en partes: HH:MM y AM/PM (si existe)
    const parts = value.trim().split(" ");
    const timePart = parts[0] || "";
    const period = parts[1]?.toUpperCase() || "";

    const [hoursStr, minutesStr] = timePart.split(":");
    let hours = hoursStr === "" ? null : parseInt(hoursStr);
    const minutes =
      minutesStr === undefined || minutesStr === ""
        ? null
        : parseInt(minutesStr);

    console.log("Parsed before AM/PM:", { hours, minutes, period });

    // Ajustar horas según AM/PM solo si no es formato 24h
    if (!is24HourFormat && hours !== null && period) {
      if (period === "PM" && hours < 12) {
        hours += 12; // Convertir a 24h (ejemplo: 1 PM → 13)
      } else if (period === "AM" && hours === 12) {
        hours = 0; // Medianoche
      }
    }

    // Validar horas según el formato
    const maxHours = is24HourFormat ? 23 : 12;
    const adjustedHours =
      hours === null
        ? null
        : hours > maxHours && !period // Solo limitar si no hay AM/PM explícito
        ? maxHours
        : hours < 0
        ? 0
        : hours;
    const adjustedMinutes =
      minutes === null ? null : minutes > 59 ? 59 : minutes < 0 ? 0 : minutes;

    console.log("Parsed after AM/PM:", {
      hours: adjustedHours,
      minutes: adjustedMinutes,
    });

    setTimeRange({
      ...timeRange,
      [field]: { hours: adjustedHours, minutes: adjustedMinutes },
    });
  };

  // Formatea la hora para mostrarla inicialmente o al perder el foco
  const formatTime = (hours: number | null, minutes: number | null) => {
    if (hours === null && minutes === null) return "";
    const displayHours =
      hours === null
        ? "00"
        : is24HourFormat
        ? hours
        : hours === 0
        ? 12
        : hours > 12
        ? hours - 12
        : hours;
    const displayMinutes = minutes === null ? "00" : minutes;
    const amPm = is24HourFormat
      ? ""
      : hours !== null && hours >= 12
      ? " PM"
      : " AM";
    return `${displayHours.toString().padStart(2, "0")}:${displayMinutes
      .toString()
      .padStart(2, "0")}${amPm}`.trim();
  };

  // Sincroniza el valor del input al perder el foco
  const handleBlur = (field: "start" | "end") => {
    const value = field === "start" ? startInputValue : endInputValue;
    const parts = value.trim().split(" ");
    const timePart = parts[0] || "";
    const period = parts[1]?.toUpperCase() || "";

    const [hoursStr, minutesStr] = timePart.split(":");
    let hours = hoursStr === "" ? null : parseInt(hoursStr);
    const minutes =
      minutesStr === undefined || minutesStr === ""
        ? null
        : parseInt(minutesStr);

    // Ajustar horas según AM/PM solo si no es formato 24h
    if (!is24HourFormat && hours !== null && period) {
      if (period === "PM" && hours < 12) {
        hours += 12; // Convertir a 24h
      } else if (period === "AM" && hours === 12) {
        hours = 0; // Medianoche
      }
    }

    // Validar horas según el formato
    const maxHours = is24HourFormat ? 23 : 12;
    const adjustedHours =
      hours === null
        ? null
        : hours > maxHours && !period // Solo limitar si no hay AM/PM explícito
        ? maxHours
        : hours < 0
        ? 0
        : hours;
    const adjustedMinutes =
      minutes === null ? null : minutes > 59 ? 59 : minutes < 0 ? 0 : minutes;

    setTimeRange({
      ...timeRange,
      [field]: { hours: adjustedHours, minutes: adjustedMinutes },
    });

    if (field === "start") {
      setStartInputValue(formatTime(adjustedHours, adjustedMinutes));
    } else {
      setEndInputValue(formatTime(adjustedHours, adjustedMinutes));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center gap-1">
        <label
          htmlFor="start-time-picker"
          className="text-xs font-medium text-gray-700"
        >
          Inicio
        </label>
        <input
          ref={startInputRef}
          id="start-time-picker"
          type="text"
          value={
            startInputValue ||
            formatTime(timeRange.start.hours, timeRange.start.minutes)
          }
          onChange={(e) => handleTimeChange("start", e.target.value)}
          onBlur={() => handleBlur("start")}
          placeholder={is24HourFormat ? "HH:MM" : "HH:MM AM/PM"}
          maxLength={is24HourFormat ? 5 : 11} // 11 para "HH:MM AM/PM"
          className="w-24 p-1 text-xs text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <label
          htmlFor="end-time-picker"
          className="text-xs font-medium text-gray-700"
        >
          Cierre
        </label>
        <input
          ref={endInputRef}
          id="end-time-picker"
          type="text"
          value={
            endInputValue ||
            formatTime(timeRange.end.hours, timeRange.end.minutes)
          }
          onChange={(e) => handleTimeChange("end", e.target.value)}
          onBlur={() => handleBlur("end")}
          placeholder={is24HourFormat ? "HH:MM" : "HH:MM AM/PM"}
          maxLength={is24HourFormat ? 5 : 11} // 11 para "HH:MM AM/PM"
          className="w-24 p-1 text-xs text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
