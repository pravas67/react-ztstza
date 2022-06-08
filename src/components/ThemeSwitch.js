import React from 'react';
function ThemeSwitch(props) {
  // let theme = 'Light';
  let [theme, setTheme] = React.useState('light');
  // mounting
  React.useState(() => {
    console.log('Side effect called');
  }, []);
  // updating
  React.useState(() => {
    console.log('Theme effect called', theme);
    document.body.className = 'bg-' + theme;
  }, [theme]);
  if (theme === 'light') {
    return (
      <button
        onClick={() => {
          props.changeTheme('dark');
          setTheme('dark');
        }}
      >
        Dark
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        props.changeTheme('light');
        setTheme('light');
      }}
    >
      Light
    </button>
  );
}
export default ThemeSwitch;
