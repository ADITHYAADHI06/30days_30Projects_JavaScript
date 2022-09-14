let input=document.getElementById("input");

function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.call(this, ...args);
      }, timeout);
    };
  }
  function fetchResults(e) {
    console.log(" is Fetching input suggestions for "+ e.target.value);
  }
  const processChange = debounce(fetchResults);

  input.addEventListener('input',processChange);