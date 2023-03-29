// descr: these styles are placed in a single function
// because they are used in the ExpandableList and HeaderLink components
// and should be the same

const createHoverStyles = () => ({
  '::before': {
    content: "' '",

    position: 'absolute',
    transform: 'scale(1.2)',

    width: '100%',
    height: '100%',

    background: 'black',
    borderRadius: '8px',
    opacity: '0.1',
  },
});

export { createHoverStyles };
