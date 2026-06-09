// terminal.js — Typewriter effect for terminal widget
(function () {
  var container = document.getElementById('terminal-output');
  if (!container) return;

  var lines = [
    { type: 'cmd', text: '$ cat profile.json' },
    { type: 'raw', text: '{' },
    { type: 'kv', k: '"name"', v: '"九天"' },
    { type: 'kv', k: '"role"', v: '"Kernel Engineer"' },
    { type: 'kv', k: '"focus"', v: '["Chromium", "Android", "Perf"]' },
    { type: 'kv', k: '"stack"', v: '["C++", "Java", "Python"]' },
    { type: 'kv', k: '"uptime"', v: '"8+ years"' },
    { type: 'raw', text: '}' },
    { type: 'cmd', text: '$ _' }
  ];

  var lineIndex = 0;
  var charIndex = 0;
  var currentLine = null;

  function getLineHTML(line) {
    if (line.type === 'cmd') {
      var parts = line.text.split('$ ');
      return '<span class="prompt">$</span> ' + parts[1];
    } else if (line.type === 'kv') {
      return '  <span class="str">' + line.k + '</span><span class="key">:</span> <span class="val">' + line.v + '</span>,';
    } else {
      return line.text;
    }
  }

  function typeLine() {
    if (lineIndex >= lines.length) {
      // Add blinking cursor at end
      var lastLine = container.lastElementChild;
      if (lastLine) {
        lastLine.innerHTML = '<span class="prompt">$</span> <span class="cursor"></span>';
      }
      return;
    }

    var line = lines[lineIndex];
    var fullHTML = getLineHTML(line);

    if (charIndex === 0) {
      currentLine = document.createElement('div');
      container.appendChild(currentLine);
    }

    // Type character by character for cmd lines, instant for data
    if (line.type === 'cmd' && lineIndex === 0) {
      var plainText = line.text;
      charIndex++;
      if (charIndex <= plainText.length) {
        var partial = plainText.substring(0, charIndex);
        if (partial.indexOf('$ ') === 0) {
          currentLine.innerHTML = '<span class="prompt">$</span> ' + partial.substring(2) + '<span class="cursor"></span>';
        } else {
          currentLine.textContent = partial;
        }
        setTimeout(typeLine, 35 + Math.random() * 25);
        return;
      }
      // Remove cursor from typed line
      currentLine.innerHTML = '<span class="prompt">$</span> ' + plainText.substring(2);
    } else {
      currentLine.innerHTML = fullHTML;
    }

    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, line.type === 'cmd' ? 300 : 60);
  }

  // Start after page load
  setTimeout(typeLine, 1600);
})();
