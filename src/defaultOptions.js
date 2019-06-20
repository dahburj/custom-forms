const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme

module.exports = {
  input: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&::placeholder': {
      color: defaultTheme.colors.gray[500],
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
  },
  textarea: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&::placeholder': {
      color: defaultTheme.colors.gray[500],
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
  },
  multiselect: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
  },
  select: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-expand': {
      border: 'none', // The select padding is causing some whitespace around the chevron which looks weird with a border
      '@media not print': {
        display: 'none',
      },
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[10],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    iconColor: defaultTheme.colors.gray[500],
    backgroundPosition: `right ${defaultTheme.spacing[2]} center`,
    backgroundSize: `1.5em 1.5em`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
  },
  checkbox: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      }
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    height: '1em',
    width: '1em',
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    backgroundColor: defaultTheme.colors.white,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:checked': {
      backgroundColor: defaultTheme.colors.blue[500],
      borderColor: defaultTheme.colors.blue[500],
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      iconColor: defaultTheme.colors.white,
    },
  },
  radio: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      }
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    borderRadius: '100%',
    height: '1em',
    width: '1em',
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    backgroundColor: defaultTheme.colors.white,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:checked': {
      backgroundColor: defaultTheme.colors.blue[500],
      borderColor: defaultTheme.colors.blue[500],
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      iconColor: defaultTheme.colors.white,
    },
  }
}