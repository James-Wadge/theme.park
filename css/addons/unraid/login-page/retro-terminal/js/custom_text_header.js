
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  __  __         __            __         __    ___ ___
 / / / /__  ____/ /  ___ _____/ /____ ___/ /___/ _ <  /
/ /_/ / _ \/ __/ _ \/ _ `/ __/ __/ -_) _  /___/ // / / 
\____/_//_/\__/_//_/\_,_/_/  \__/\__/\_,_/    \___/_/  
                                                       
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
