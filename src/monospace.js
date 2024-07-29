let lastClientX;
let lastClientY;
let cursorVisible = false;

const showCursor = (e = {}) => {
  const { clientX, clientY, pointerType } = e;

  if (pointerType === "mouse") {
    cursorVisible = true;
  }

  if (pointerType && pointerType !== "mouse") {
    cursorVisible = false;
    document.documentElement.style = "";
  }

  if (!cursorVisible) {
    return;
  }

  lastClientX = clientX ?? lastClientX;
  lastClientY = clientY ?? lastClientY;

  const { x: bodyX, y: bodyY } = document.body.getBoundingClientRect();
  const x = lastClientX - bodyX;
  const y = lastClientY - bodyY;

  document.documentElement.style = `--cursorX: ${x}px; --cursorY: ${y}px; --custom-cursor-switch: ;`;
};

const hideCursor = () => {
  cursorVisible = false;
  document.documentElement.style = "";
};

const onScroll = (e) => {
  document.body.style = `--scrollTop: ${e.target.scrollingElement.scrollTop}px;`;
  showCursor();
};

const init = () => {
  document.addEventListener("scroll", onScroll);
  document.addEventListener("pointermove", showCursor);
  document.addEventListener("pointerout", hideCursor);
};

document.addEventListener("DOMContentLoaded", init);
