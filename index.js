const itemList = document.querySelector('.scrolling-list');
const listHeight = itemList.offsetHeight * 2;  // Get the height of the list

itemList.addEventListener('transitionend', () => {
  itemList.style.transition = 'none';  // Disable transition temporarily
  itemList.style.transform = 'translateY(0)';  // Reset position to top
  listHeight;  // Trigger reflow to ensure styles take effect
//   itemList.style.transition = 'transform 5s linear';  // Re-enable transition
});


