const getCSSText = (buttonStyle) => {
  const {
    height, width, backgroundColor, color,
    borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle,
    borderTopColor, borderRightColor, borderBottomColor, borderLeftColor,
    borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth,
    borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius,
    boxShadow, textShadow,
    marginTop, marginRight, marginBottom, marginLeft,
    paddingTop, paddingRight, paddingBottom, paddingLeft,
    fontSize, fontFamily,
  } = buttonStyle;

  const lines = ['button {'];

  const addProp = (type, value) => {
    const numberValues = value.map((v) => parseInt(v.replace(/\D/g, '')));
    if (!numberValues.some((v) => v !== 0)) return;
    const val = value.every((v, i, arr) => v === arr[0]) ? value[0] : value.join(' ');
    lines.push(`  ${type}: ${val};`);
  };

  addProp('height', [height]);
  addProp('width', [width]);
  addProp('background-color', [backgroundColor]);
  addProp('font-family', [fontFamily]);
  addProp('color', [color]);
  addProp('font-size', [fontSize]);
  addProp('border-radius', [borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius]);
  addProp('border-color', [borderTopColor, borderRightColor, borderBottomColor, borderLeftColor]);
  addProp('border-style', [borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle]);
  addProp('border-width', [borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth]);
  addProp('box-shadow', [boxShadow]);
  addProp('text-shadow', [textShadow]);
  addProp('margin', [marginTop, marginRight, marginBottom, marginLeft]);
  addProp('padding', [paddingTop, paddingRight, paddingBottom, paddingLeft]);

  lines.push('}');
  return lines.join('\n');
};

export default getCSSText;
