import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const sliderChange = (e, newValue) => {
    if (value >= 80) {
      props.parentFunc({ slider: true });
    }
    if (value < 80) {
      props.parentFunc({ slider: false });
    }
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Volume Control
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
        onChange={sliderChange}
      />
    </div>
  );
}
