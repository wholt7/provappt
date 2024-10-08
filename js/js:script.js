bplist00�_WebMainResource�	
_WebResourceTextEncodingName^WebResourceURL_WebResourceFrameName_WebResourceData_WebResourceMIMETypeUutf-8_file:///index.htmlPOX<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2022.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let currentSlide = 0;</p>
<p class="p1">let slides = [];</p>
<p class="p2"><br></p>
<p class="p1">document.addEventListener('DOMContentLoaded', function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('load-button').addEventListener('click', loadPresentation);</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('prev-button').addEventListener('click', prevSlide);</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('next-button').addEventListener('click', nextSlide);</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">function loadPresentation() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const fileInput = document.getElementById('file-input');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const file = fileInput.files[0];</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (file) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const reader = new FileReader();</p>
<p class="p1"><span class="Apple-converted-space">        </span>reader.onload = function(e) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>const arrayBuffer = e.target.result;</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>pptxjs.parsePresentation(arrayBuffer).then(function(pres) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>slides = pres.slides;</p>
<p class="p1"><span class="Apple-converted-space">                </span>currentSlide = 0;</p>
<p class="p1"><span class="Apple-converted-space">                </span>showSlide(currentSlide);</p>
<p class="p1"><span class="Apple-converted-space">            </span>});</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>reader.readAsArrayBuffer(file);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function showSlide(index) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const slideContainer = document.getElementById('slide-container');</p>
<p class="p1"><span class="Apple-converted-space">    </span>slideContainer.innerHTML = '';</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (slides[index]) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const slide = slides[index];</p>
<p class="p2"><span class="Apple-converted-space">        </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>slide.shapes.forEach(function(shape) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (shape.type === 'text') {</p>
<p class="p1"><span class="Apple-converted-space">                </span>const textElement = document.createElement('div');</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.innerHTML = shape.text;</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.style.position = 'absolute';</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.style.left = `${shape.x}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.style.top = `${shape.y}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.style.width = `${shape.width}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>textElement.style.height = `${shape.height}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>slideContainer.appendChild(textElement);</p>
<p class="p1"><span class="Apple-converted-space">            </span>} else if (shape.type === 'image') {</p>
<p class="p1"><span class="Apple-converted-space">                </span>const imgElement = document.createElement('img');</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.src = shape.image;</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.style.position = 'absolute';</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.style.left = `${shape.x}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.style.top = `${shape.y}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.style.width = `${shape.width}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>imgElement.style.height = `${shape.height}%`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>slideContainer.appendChild(imgElement);</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function nextSlide() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (currentSlide &lt; slides.length - 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>currentSlide++;</p>
<p class="p1"><span class="Apple-converted-space">        </span>showSlide(currentSlide);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function prevSlide() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (currentSlide &gt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>currentSlide--;</p>
<p class="p1"><span class="Apple-converted-space">        </span>showSlide(currentSlide);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
</body>
</html>
Ytext/html    ( F U l ~ � � � �                           