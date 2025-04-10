import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface CustomTimePickerProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

export default function CustomTimePicker({
  value,
  onChange,
}: CustomTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        onChange={onChange}
        sx={{ width: 120 }} // Ajusta el tamaño según necesites
      />
    </LocalizationProvider>
  );
}
