import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.scss']
})
export class TypedComponent implements OnInit {
@ViewChild('outputFrame', { static: false }) outputFrame!: ElementRef<HTMLIFrameElement>;

  htmlCode: string = `

  <style>
    body {
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: sans-serif;
    }
    .flag {
      width: 300px;
      height: 200px;
      background: linear-gradient(orange 33%, white 33%, white 66%, green 66%);
      border: 2px solid #000;
      animation: wave 2s infinite ease-in-out;
    }
    .ashoka {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      border: 2px solid navy;
      border-radius: 50%;
    }
    @keyframes wave {
      0%, 100% { transform: rotate(0deg) }
      50% { transform: rotate(2deg) }
    }
  </style>

  <div class="flag">
    <div class="ashoka"></div>
  </div>`;

textToPrint = `
    'These are the default values... \n',
    'You know what you should do?',
    // 'Use your own!',
    // 'Have a great day!',
  `;
  constructor() { }

  ngOnInit(): void {
  }

  // stringsElement or strings only 1 thing work at a time
  ngAfterViewInit(): void {
  // var typed = new Typed('#element', {
      // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      // strings: [`  users: User[] = [];,
      //   enable = false;,
      //   enableEditmode = false;,
      //   userData: User = {} as User;
      //   title = '';
      //   body = '';
      //   addNewUser = false;
      //   constructor(private api: ApiService) { }
      
      //   ngOnInit(): void {
      //     this.viewList();
      //   }`],

      //    stringsElement: '#typed-strings',

  // Waits 1000ms after typing "First"
  // strings: ['First ^1000 sentence.', 'Second sentence.'],

  //   strings: ['This is a JavaScript library', 'This is an ES6 module'],
  // smartBackspace: true, // Default value

    // strings: ['git push --force ^1000\n `pushed to origin with option force`'],

    //   typeSpeed: 50,
    // });

//     var typedCustomization = new Typed('#element', {
//   /**
//    * @property {array} strings strings to be typed
//    * @property {string} stringsElement ID of element containing string children
//    */
//   strings: [
//     'These are the default values... \n',
//     'You know what you should do?',
//     // 'Use your own!',
//     // 'Have a great day!',
//   ],
//   stringsElement: undefined,

//   /**
//    * @property {number} typeSpeed type speed in milliseconds
//    */
//   typeSpeed: 50,

//   /**
//    * @property {number} startDelay time before typing starts in milliseconds
//    */
//   startDelay: 0,

//   /**
//    * @property {number} backSpeed backspacing speed in milliseconds
//    */
//   backSpeed: 0,

//   /**
//    * @property {boolean} smartBackspace only backspace what doesn't match the previous string
//    */
//   smartBackspace: true,

//   /**
//    * @property {boolean} shuffle shuffle the strings
//    */
//   shuffle: false,

//   /**
//    * @property {number} backDelay time before backspacing in milliseconds
//    */
//   backDelay: 700,

//   /**
//    * @property {boolean} fadeOut Fade out instead of backspace
//    * @property {string} fadeOutClass css class for fade animation
//    * @property {boolean} fadeOutDelay Fade out delay in milliseconds
//    */
//   fadeOut: false,
//   fadeOutClass: 'typed-fade-out',
//   fadeOutDelay: 500,

//   /**
//    * @property {boolean} loop loop strings
//    * @property {number} loopCount amount of loops
//    */
//   loop: false,
//   loopCount: Infinity,

//   /**
//    * @property {boolean} showCursor show cursor
//    * @property {string} cursorChar character for cursor
//    * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
//    */
//   showCursor: true,
//   cursorChar: '|',
//   autoInsertCss: true,

//   /**
//    * @property {string} attr attribute for typing
//    * Ex: input placeholder, value, or just HTML text
//    */
//   attr: undefined,

//   /**
//    * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
//    */
//   bindInputFocusEvents: false,

//   /**
//    * @property {string} contentType 'html' or 'null' for plaintext
//    */
//   contentType: 'html',

//   /**
//    * Before it begins typing
//    * @param {Typed} self
//    */
//   onBegin: (self) => {},

//   /**
//    * All typing is complete
//    * @param {Typed} self
//    */
//   onComplete: (self) => {},

//   /**
//    * Before each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   preStringTyped: (arrayPos, self) => {},

//   /**
//    * After each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStringTyped: (arrayPos, self) => {},

//   /**
//    * During looping, after last string is typed
//    * @param {Typed} self
//    */
//   onLastStringBackspaced: (self) => {},

//   /**
//    * Typing has been stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingPaused: (arrayPos, self) => {},

//   /**
//    * Typing has been started after being stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingResumed: (arrayPos, self) => {},

//   /**
//    * After reset
//    * @param {Typed} self
//    */
//   onReset: (self) => {},

//   /**
//    * After stop
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStop: (arrayPos, self) => {},

//   /**
//    * After start
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStart: (arrayPos, self) => {},

//   /**
//    * After destroy
//    * @param {Typed} self
//    */
//   onDestroy: (self) => {},
// });

 const typed = new Typed('#element', {
      strings: [this.htmlCode],
      typeSpeed: 10,
          contentType: 'null', // Show as plain text, not HTML

      showCursor: false,
      cursorChar: '|',
      onComplete: () => {
        // Render the HTML in the iframe after typing is done
        if (this.outputFrame && this.outputFrame.nativeElement) {
          this.outputFrame.nativeElement.srcdoc = this.htmlCode;
        }
      }
    });

    
  }
}
