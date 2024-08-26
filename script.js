function getDimensions() {
  const container = document.querySelector('.gameContainer');
  return {
    container,
    containerWidth: container.offsetWidth,
    containerHeight: container.offsetHeight,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };
}

function moveContainer(x, y) {
  const { container } = getDimensions();
  container.style.position = 'absolute';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
}

function yesAction() {
  const {
    container,
    containerWidth,
    containerHeight,
    windowWidth,
    windowHeight,
  } = getDimensions();

  const centerX = (windowWidth - containerWidth) / 2;
  const centerY = (windowHeight - containerHeight) / 2;

  moveContainer(centerX, centerY);

  container.innerHTML = '<p class="positiveAnswer">As I always thought!</p>';
}

function noAction() {
  const { containerWidth, containerHeight, windowWidth, windowHeight } =
    getDimensions();

  const randomX = Math.random() * (windowWidth - containerWidth);
  const randomY = Math.random() * (windowHeight - containerHeight);

  moveContainer(randomX, randomY);
}
