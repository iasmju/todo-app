function expand() {
    slider.className = 'expanded';
    setTimeout(function() {
      input.focus();
    }, 500);
  }
  
  function collapse() {
    slider.className = 'collapsed';
    input.blur();
  }
  
  toggle.onclick = expand;
  
  input.onblur = function() {
    setTimeout(collapse, 100);
  }
  
  buttonWithText.onsubmit = function(e) {
    e.preventDefault();
    alert("New username: " + input.value);
    collapse();
  }