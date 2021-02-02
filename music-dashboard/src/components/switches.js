import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);
  const [message, setMessage] = React.useState(false)

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setMessage((prev) => !prev)
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} message={console.log("test text")}/>}
        label="Dashboard Control"
      />
    </FormGroup>
  );
}
export default SwitchesSize;
