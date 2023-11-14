import { useState } from "react";

export default function OnOff() {
  const [isOn, setIsOn] = useState(true);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>;
}
