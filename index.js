<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <style>
  body { background: linear-gradient(#132d4e, #4f7d90) no-repeat #4f7d90; height: 500px; }

.terminal { position: absolute; border-radius: 2px; padding: 2% 0 0 2%; }

.terminal:before { position: absolute; content: ''; width: 100%; height: 5px; left: 0; top: 0; background-color: #ddd; border-radius: 2px 2px 0 0;}

#terminal-1 { width: 50%; height: 300px; background-color: #000; top: 20%; left: 25%; color: #fff; font: 10px "Courier new", courier, monospace; }

@-webkit-keyframes blink {
  0% { opacity: 0; }
  49% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes blink {
  0% { opacity: 0; }
  49% { opacity: 0; } 
  50% { opacity: 1; }
}

span.blink { 
    animation: blink 1s infinite; 
    -webkit-animation:blink 1s infinite;
}

@-webkit-keyframes type {
  from { width: 0; }
}

@keyframes type {
  from { width: 0; } 
}

span.type { 
    overflow: hidden; 
    height: 8px;
    width: 9em;
    width: 12ch;
    display: inline-block; 
    animation: type 10s steps(12, end) infinite alternate;
    -webkit-animation: type 10s steps(12,end) infinite alternate;
    white-space: nowrap;
}

@-moz-document url-prefix() { 
  span.type {
     height: 9px;
  }
}
  </style>
</head>
<body>
  <div id="terminal-1" class="terminal">
    <span class="standard">></span>
    <span class="type">Página em Construção</span>
    <span class="blink">_</span>
</div>
</body>
</html>
