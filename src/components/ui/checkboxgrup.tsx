'use client'
import { useFormContext, Controller } from "react-hook-form";

interface CheckboxGroupProps {
  name: string;
  options: { label: string; value: string }[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ name, options }) => {

  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-3">
      {options.map((option) => (
        <Controller
          key={option.value}
          name={name}
          control={control}
          render={({ field }) => (
            <label className="flex items-center space-x-2 text-sm font-medium">
              <input
                type="checkbox"
                value={option.value}
                checked={field.value.includes(option.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    field.onChange([...field.value, option.value]);
                  } else {
                    field.onChange(field.value.filter((val: string) => val !== option.value));
                  }
                }}
              />
              <span>{option.label}</span>
            </label>
          )}
        />
      ))}
    </div>
  );
};
