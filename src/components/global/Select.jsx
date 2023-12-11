import ReactSelect from "react-select";

export default function CustomSelect({
  options,
  placeHolder,
  customStyles,
  onChange,
  value,
}) {
  return (
    <ReactSelect
      options={options}
      styles={customStyles}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
}
