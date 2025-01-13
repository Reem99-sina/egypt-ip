import { Radio } from "@material-tailwind/react";

export function RadioExample({
  id,
  name,
  label,
}: {
  id: string;
  name: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <Radio
        id={id}
        name={name}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <label htmlFor={id} className="text-textMain">
        {label}
      </label>
    </div>
  );
}
