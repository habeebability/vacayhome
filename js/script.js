let rootElement = document.querySelector('#scroll-top');

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
    // Show button
    scrollToTopBtn.classList.remove("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.add("showBtn")
  }
};

document.addEventListener('scroll', handleScroll)