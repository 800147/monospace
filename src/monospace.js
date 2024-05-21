let lastClientX;
let lastClientY;

const showCursor = ({ clientX, clientY } = {}) => {
  lastClientX = clientX ?? lastClientX;
  lastClientY = clientY ?? lastClientY;

  const { x: bodyX, y: bodyY } = document.body.getBoundingClientRect();
  const x = lastClientX - bodyX;
  const y = lastClientY - bodyY;

  document.documentElement.style = `--cursorX: ${x}px; --cursorY: ${y}px; --custom-cursor: ;`;
};

const hideCursor = () => {
  document.documentElement.style = "";
};

const onScroll = (e) => {
  document.body.style = `--scrollTop: ${e.target.scrollingElement.scrollTop}px;`;
  showCursor();
};

const init = () => {
  document.addEventListener("scroll", onScroll);
  document.addEventListener("mousemove", showCursor);
  document.addEventListener("mouseout", hideCursor);
};

document.addEventListener("DOMContentLoaded", init);
