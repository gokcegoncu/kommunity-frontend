import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'button inline-block text-center cursor-pointer border border-transparent border-box rounded-lg',
  container: {
    danger: 'text-white bg-red',
    outline: 'text-gray bg-white hover:bg-xlgray border-lgray',
    plain: 'text-blue hover:text-darkblue bg-transparent',
    primary: 'text-white bg-blue',
    secondary: 'text-white bg-gray',
  },
  label: {
    large: 'px-8 py-3 text-lg',
    medium: 'px-6 py-2 text-base leading-base',
    small: 'px-6 py-2 text-sm',
  },
};

const UIButton = (props) => {
  const {
    disabled, extraClassName, size, type, label, onClick,
  } = props;
  const className = cls(style.common, style.label[size], style.container[type], {
    'cursor-not-allowed': disabled,
    'hover:opacity-80': !disabled && ['primary', 'secondary'].indexOf(type) > -1,
    'opacity-20': disabled && type !== 'plain',
    'text-lgray hover:text-lgray': disabled && type === 'plain',
  });
  return (
    <div onClick={onClick} className={cls(className, extraClassName)}>
      {label}
    </div>
  );
};

UIButton.defaultProps = {
  disabled: false,
  size: 'medium',
  type: 'primary',
};

UIButton.propTypes = {
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'plain']).isRequired,
};

export default UIButton;
