import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
} from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentShadow = ({
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
}) => {
  const [seeMargin, toggleSeeMargin] = useToggle(false);
  const [lockMargins, toggleLockMargins] = useToggle(true);

  // box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;

  return (
    <section className='adjustSection'>
      <RangeSlider
        field='marginTop'
        changeHandler={setMarginTop}
        label='Top'
        initial={0}
        min={0}
        max={50}
      />
      <RangeSlider
        field='marginRight'
        changeHandler={setMarginRight}
        label='Right'
        initial={0}
        min={0}
        max={50}
      />
      <RangeSlider
        field='marginBottom'
        changeHandler={setMarginBottom}
        label='Bottom'
        initial={0}
        min={0}
        max={50}
      />
      <RangeSlider
        field='marginLeft'
        changeHandler={setMarginLeft}
        label='Left'
        initial={0}
        min={0}
        max={50}
      />
    </section>
  );
};

export default connect(null, {
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
})(AdjustmentShadow);
