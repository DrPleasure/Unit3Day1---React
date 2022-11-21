import { createRoot } from "react-dom/client";

const ButtonComponent = (props) => {
  return <button>This is a button, {props.name}</button>;
};

export default ButtonComponent;
// EXPORTING IT MEANS YOU CAN IMPORT IT
