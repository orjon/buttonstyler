import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import getCSSText from '../helpers/getCSSText';
import '../styles/CodeBlock.scss';

const CodeBlock = ({ buttonStyle }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [buttonStyle]);

  const handleCopy = () => {
    navigator.clipboard.writeText(getCSSText(buttonStyle));
    setCopied(true);
  };

  const {
    height,
    width,
    backgroundColor,
    color,
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    boxShadow,
    textShadow,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    fontSize,
    fontFamily,
  } = buttonStyle;

  const ObjectCode = ({ type, value }) => {
    //convert array of values to hold numbers only
    const numberValues = value.map((value) =>
      parseInt(value.replace(/\D/g, ''))
    );

    console.log();

    // If all numbers are 0 - return (thus don't display attribute)
    if (!numberValues.some((value) => value !== 0)) return;

    let values = <span className='valueNumber'> {value[0]}</span>;

    if (!value.every((val, i, arr) => val === arr[0])) {
      values = value.map((value) => (
        <span key={uuid()} className='valueNumber'>
          {' '}
          {value}
        </span>
      ));
    }

    return (
      <div>
        <span className='key'> {type}</span>
        <span className='punct'>:</span>
        {values}
        <span className='punct'>;</span>
      </div>
    );
  };

  return (
    <div className='CodeBlock'>
      <div className='windowTitle'>CSS</div>
      <div className='codeContainer'>
        <button className={`copyButton${copied ? ' copied' : ''}`} onClick={handleCopy}>
          <ContentCopyIcon fontSize='inherit' />
          {copied ? 'Copied' : 'Copy'}
        </button>
        <div className='CSSCode'>
          <div>
            <span className='name'>button </span>
            <span className='bracket'>&#123;</span>
          </div>
          {ObjectCode({ type: 'height', value: [height] })}
          {ObjectCode({ type: 'width', value: [width] })}
          {ObjectCode({ type: 'background-color', value: [backgroundColor] })}
          {ObjectCode({ type: 'font-family', value: [fontFamily] })}
          {ObjectCode({ type: 'color', value: [color] })}
          {ObjectCode({ type: 'font-size', value: [fontSize] })}
          {ObjectCode({
            type: 'border-radius',
            value: [
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomLeftRadius,
              borderBottomRightRadius,
            ],
          })}
          {ObjectCode({
            type: 'border-color',
            value: [
              borderTopColor,
              borderRightColor,
              borderBottomColor,
              borderLeftColor,
            ],
          })}
          {ObjectCode({
            type: 'border-style',
            value: [
              borderTopStyle,
              borderRightStyle,
              borderBottomStyle,
              borderLeftStyle,
            ],
          })}
          {ObjectCode({
            type: 'border-width',
            value: [
              borderTopWidth,
              borderRightWidth,
              borderBottomWidth,
              borderLeftWidth,
            ],
          })}
          {ObjectCode({
            type: 'box-shadow',
            value: [boxShadow],
          })}
          {ObjectCode({
            type: 'text-shadow',
            value: [textShadow],
          })}
          {ObjectCode({
            type: 'margin',
            value: [marginTop, marginRight, marginBottom, marginLeft],
          })}
          {ObjectCode({
            type: 'padding',
            value: [paddingTop, paddingRight, paddingBottom, paddingLeft],
          })}

          <div>
            <span className='bracket'>&#125;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, null)(CodeBlock);
