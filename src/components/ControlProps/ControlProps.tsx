import { useState } from "react";

type ToogleProps = {
  isToggled?: boolean;
  onToggle?: (value: boolean) => void
}

export const Toggle: React.FC<ToogleProps> = ({ isToggled = false, onToggle}) => {
  const [internalToggle, setInternalToggle] = useState(isToggled);


  const toggle =() => {
    const newToggle = !internalToggle;

    setInternalToggle(newToggle);

    if (onToggle) {
      onToggle(newToggle);
    }
  }

  return (
    <button onClick={toggle}>
      {internalToggle ? 'ON' : 'OFF'}
    </button>
  );
};

export const ParentComponent = () => {
  const [toggleSate, setToggleState] = useState(false);
  return (
    <div>
      <p>Toogle is {toggleSate ? 'ON' : 'OFF'}</p>
      <Toggle isToggled={toggleSate} onToggle={setToggleState} />
    </div>
  );
};
