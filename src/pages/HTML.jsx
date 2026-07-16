import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HTML.css';

const HTML = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [editableCode, setEditableCode] = useState('');
  const [output, setOutput] = useState('');
  const iframeRef = useRef(null);

  const htmlTopics = [
    {
      title: 'HTML5 Basics',
      theory: 'HTML5 is the latest version of HyperText Markup Language. It provides semantic elements and improved APIs for building modern web applications.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome to HTML5</p>
</body>
</html>`,
      output: 'Hello World\nWelcome to HTML5'
    },
    {
      title: 'HTML5 Semantic Elements',
      theory: 'Semantic elements clearly describe their meaning to both the browser and developer. Examples include <header>, <nav>, <article>, <section>, <footer>.',
      code: `<header>
  <h1>Website Title</h1>
  <nav>Navigation Menu</nav>
</header>
<article>
  <h2>Article Title</h2>
  <p>Article content here...</p>
</article>
<footer>
  <p>&copy; 2024 My Website</p>
</footer>`,
      output: 'Website Title\nNavigation Menu\nArticle Title\nArticle content here...\n© 2024 My Website'
    },
    {
      title: 'HTML5 Forms & Validation',
      theory: 'HTML5 forms provide built-in validation and new input types like email, number, date, and more. This reduces the need for JavaScript validation.',
      code: `<form>
  <label>Email:</label>
  <input type="email" required>
  
  <label>Age:</label>
  <input type="number" min="18" max="100">
  
  <label>Date:</label>
  <input type="date">
  
  <button type="submit">Submit</button>
</form>`,
      output: 'Form with email, age, and date inputs\nValidation happens automatically'
    },
    {
      title: 'HTML5 Canvas & Graphics',
      theory: 'The Canvas element allows you to draw graphics using JavaScript. It provides a 2D drawing context for creating shapes, images, and animations.',
      code: `<canvas id="myCanvas" width="200" height="200"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 100, 100);
</script>`,
      output: 'Blue rectangle drawn on canvas'
    },
    {
      title: 'HTML5 Audio & Video',
      theory: 'HTML5 provides native support for audio and video elements without requiring plugins. You can embed media with simple tags.',
      code: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
</video>`,
      output: 'Audio player and video player displayed'
    },
    {
      title: 'HTML5 Geolocation API',
      theory: 'The Geolocation API allows web applications to access the user\'s geographical position with their permission.',
      code: `<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }
    );
  }
</script>`,
      output: 'User location coordinates displayed in console'
    },
    {
      title: 'HTML5 Local Storage',
      theory: 'Local Storage allows you to store data on the client side that persists even after the browser is closed.',
      code: `<script>
  // Store data
  localStorage.setItem('name', 'John');
  
  // Retrieve data
  const name = localStorage.getItem('name');
  console.log(name); // Output: John
  
  // Remove data
  localStorage.removeItem('name');
</script>`,
      output: 'Data stored and retrieved from Local Storage'
    },
    {
      title: 'HTML5 Web Workers',
      theory: 'Web Workers allow you to run JavaScript in the background without blocking the main thread.',
      code: `// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello Worker');
worker.onmessage = (e) => {
  console.log(e.data);
};

// worker.js
self.onmessage = (e) => {
  self.postMessage('Hello Main: ' + e.data);
};`,
      output: 'Background task executed without blocking UI'
    },
    {
      title: 'HTML5 Drag & Drop',
      theory: 'HTML5 Drag and Drop API allows users to drag elements and drop them in designated areas.',
      code: `<div id="drag" draggable="true">Drag me</div>
<div id="drop" style="border: 2px solid blue;">Drop here</div>

<script>
  document.getElementById('drag').ondragstart = (e) => {
    e.dataTransfer.setData('text', 'Dragged');
  };
  document.getElementById('drop').ondrop = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.getData('text'));
  };
</script>`,
      output: 'Drag and drop functionality enabled'
    }
  ];

  const handleTopicChange = (index) => {
    setSelectedTopic(index);
    setEditableCode(htmlTopics[index].code);
    setOutput('');
  };

  useEffect(() => {
    if (!editableCode && htmlTopics.length > 0) {
      setEditableCode(htmlTopics[0].code);
    }
  }, []);

  const handleRunCode = () => {
    try {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(editableCode);
      doc.close();

      // Capture console output
      const logs = [];
      const originalLog = iframe.contentWindow.console.log;
      iframe.contentWindow.console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog.apply(iframe.contentWindow.console, args);
      };

      setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="html-page">
      <Header />
      
      <main className="html-main">
        {/* Hero Section */}
        <section className="html-hero">
          <div className="hero-content">
            <div className="hero-number">1</div>
            <h1>HTML5 Courses</h1>
            <p>Master the foundation of web development with comprehensive HTML5 training</p>
          </div>
        </section>

        {/* Three Column Layout */}
        <section className="three-column-section">
          <div className="three-column-container">
            {/* Left: Topics */}
            <div className="topics-column">
              <h3>Topics</h3>
              <div className="topics-list">
                {htmlTopics.map((topic, index) => (
                  <button
                    key={index}
                    className={`topic-item ${selectedTopic === index ? 'active' : ''}`}
                    onClick={() => handleTopicChange(index)}
                  >
                    <span className="topic-number">{index + 1}</span>
                    <span className="topic-name">{topic.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Code & Theory */}
            <div className="code-theory-column">
              <div className="theory-section">
                <h3>Theory</h3>
                <p>{htmlTopics[selectedTopic].theory}</p>
              </div>
              <div className="code-section">
                <div className="code-header">
                  <h3>Code</h3>
                  <button className="run-button" onClick={handleRunCode}>
                    ▶ Run Code
                  </button>
                </div>
                <textarea
                  className="code-editor"
                  value={editableCode || htmlTopics[selectedTopic].code}
                  onChange={(e) => setEditableCode(e.target.value)}
                  placeholder="Edit your code here..."
                  spellCheck="false"
                />
              </div>
            </div>

            {/* Right: Output */}
            <div className="output-column">
              <h3>Output</h3>
              <div className="output-display">
                {output || htmlTopics[selectedTopic].output}
              </div>
              <iframe
                ref={iframeRef}
                className="output-iframe"
                title="Code Output"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HTML;
