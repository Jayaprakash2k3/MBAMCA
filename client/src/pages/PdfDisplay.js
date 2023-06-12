import React, { useEffect, useState } from 'react';
import LogoDark2x from "../images/logo-dark2x.png";
import {backendURL} from "../backendurl";
const PdfDisplay = () => {
const css=`<style>
  *,
::before,
::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from  so users can set them as a class directly on the element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured font family by default.
2. Correct the odd font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::-ms-input-placeholder, textarea::-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the hidden attribute.
*/

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 540px) {

  .container {
    max-width: 540px;
  }
}

@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}

@media (min-width: 992px) {

  .container {
    max-width: 992px;
  }
}

@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}

body{
  overflow-x: hidden !important;
}

body[data-layout-mode="dark"] .top-icon, body[data-layout-mode="light"] .top-icon {
  font-size: 1.5rem;
  line-height: 2rem;
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

/*TODO: Make this a loop!! */

input[type="checkbox"]:checked~ .progress_bar{
  padding-right: 75%;
}

input[type="checkbox"]:checked~ .progress_bar> .progress_inner {
  background: -webkit-gradient(linear, left bottom, right top, from(#845ec2), color-stop(#8163ce), color-stop(#7d68da), color-stop(#766de6), to(#6d73f2));
  background: linear-gradient(to right top, #845ec2, #8163ce, #7d68da, #766de6, #6d73f2);
}

input[type="checkbox"]:checked~ .progress_bar> .progress_inner:after {
  content: "20% - get out of my house !";
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked{
  padding-right: 50%;
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked> .progress_inner{
  background: -webkit-gradient(linear, left bottom, right top, from(#845ec2), color-stop(#8163ce), color-stop(#7d68da), color-stop(#766de6), to(#6d73f2));
  background: linear-gradient(to right top, #845ec2, #8163ce, #7d68da, #766de6, #6d73f2);
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked> .progress_inner:after {
  content: "40% - you can do better !";
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar{
  padding-right: 25%;
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar> .progress_inner{
  background: -webkit-gradient(linear, left bottom, right top, from(#845ec2), color-stop(#8163ce), color-stop(#7d68da), color-stop(#766de6), to(#6d73f2));
  background: linear-gradient(to right top, #845ec2, #8163ce, #7d68da, #766de6, #6d73f2);
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar> .progress_inner:after {
  content: "60% - 60% does not work every time !";
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar{
  padding-right: 0;
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar> .progress_inner{
  background: -webkit-gradient(linear, left bottom, right top, from(#845ec2), color-stop(#8163ce), color-stop(#7d68da), color-stop(#766de6), to(#6d73f2));
  background: linear-gradient(to right top, #845ec2, #8163ce, #7d68da, #766de6, #6d73f2);
}

input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ input[type="checkbox"]:checked~ .progress_bar> .progress_inner:after {
  content: "80% - better than my password, probably !";
}

.progress_bar {  
  height: 8px;
  border-radius: 30px;
  text-align: center;
  font-size: 12px;
  line-height: 2rem;
  padding-right: 100%;
  overflow: hidden;
  -webkit-transition: padding-right .5s ease;
  transition: padding-right .5s ease;
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.dark .progress_bar {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.progress_bar .progress_inner {
  content: "";
  -webkit-transition: background-color .6s linear;
  transition: background-color .6s linear;
}

@media (max-width: 540px) {
  nav .dropdown-menu{
    position: static !important;
    -webkit-transform: none!important;
            transform: none!important;
  }
}

.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}

.icon-demo-content i {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.25rem;
  display: block;
  text-align: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.modal.icon-demo-content i .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.dark .pln{
  color: #c8d3dd;
}

.dark .tag {
  color: #6a6ae7;
}

.dark .atn {
  color: #894e6c;
}

.dark .typ {
  color: #894e6c;
}

.navbar li button {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.navbar li button:hover {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.navbar li.active button {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.navbar li .dropdown-menu ul li .nav-link {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dark .navbar li .dropdown-menu ul li .nav-link {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

@media (min-width: 768px) {

  .navbar li .dropdown-menu ul li .nav-link {
    --tw-text-opacity: 1;
    color: rgb(51 65 85 / var(--tw-text-opacity));
  }
}

.navbar li.active .dropdown-menu ul li .nav-link.active {
  background-color: rgb(15 23 42 / 0.3);
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.dark .navbar li.active .dropdown-menu ul li .nav-link.active {
  background-color: rgb(30 41 59 / 0.7);
}

@media (min-width: 768px) {

  .navbar li.active .dropdown-menu ul li .nav-link.active {
    --tw-bg-opacity: 1;
    background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  }
}

.dropdown-menu {
  position: absolute;
  z-index: 50;
  margin: 0px;
}

.dropdown-menu.dropdown-menu-right {
  position: absolute;
  right: 0px;
}

.form-control {
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  padding: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.modal.form-control .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.form-control:focus {
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}

.dark .form-control {
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .form-control::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.dark .form-control::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.dark .form-control:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.dark .form-control::-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.dark .form-control::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.dark .form-control:focus {
  --tw-border-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-border-opacity));
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(129 140 248 / var(--tw-ring-opacity));
}

.dark .form-control:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.label {
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.modal.label .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.dark .label {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.btn {
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

/* selecter */

.selectr-options-container, .selectr-selected {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.dark .selectr-options-container, .dark .selectr-selected {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.selectr-tag-input {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  padding: 0px;
}

.selectr-tag-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dark .selectr-tag-input {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.selectr-option.selected {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.dark .selectr-option.selected {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.selectr-input {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.dark .selectr-input {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.dark .selectr-input:focus {
  --tw-border-opacity: 1;
  border-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.dark .selectr-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.selectr-container.open .selectr-selected {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-top-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-border-opacity: 1;
  border-left-color: rgb(241 245 249 / var(--tw-border-opacity));
  border-bottom-color: transparent;
}

.dark .selectr-container.open .selectr-selected {
  border-top-color: rgb(15 23 42 / var(--tw-border-opacity));
  --tw-border-opacity: 1;
  border-left-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.selectr-tag {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}

.selectr-tag-remove::after, 
.selectr-tag-remove::before{
  width: 1px;
}

.taggable .selectr-selected{
  padding: 7px 28px 7px 14px;
}

/*  Datepicker */

.datepicker.active {
  display: inline-block;
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.dark .datepicker.active {
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.datepicker-dropdown.datepicker-orient-top {
  padding-bottom: 0px;
}

.datepicker-header .datepicker-controls .button {
  font-weight: 500;
}

.dark .datepicker-header .datepicker-controls .button {
  background-color: rgb(15 23 42 / 0.2);
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.datepicker-controls .button {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.datepicker-view .dow {
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
}

.dark .datepicker-view .dow {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.dark .datepicker-view .days .datepicker-cell {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dark .datepicker-cell.next:not(.disabled), .dark .datepicker-cell.prev:not(.disabled) {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.datepicker-picker {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.dark .datepicker-picker {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.datepicker-picker  span {
  border-radius: 0.5rem;
}

.datepicker-cell.focused:not(.selected), .datepicker-cell:not(.disabled):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.dark .datepicker-cell.focused:not(.selected), .dark .datepicker-cell:not(.disabled):hover {
  background-color: rgb(15 23 42 / 0.2);
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

/* Form Validation */

#form-validation small {
  display: none;
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

#form-validation small.error {
  display: block;
}

.modal#form-validation small.error .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.form-control.error {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.form-control.success {
  --tw-border-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.custom-checkbox .checked, 
.custom-checkbox input[type=checkbox] {
  display: none;
}

.custom-checkbox input[type=checkbox]:checked~.unchecked {
  display: none;
}

.custom-checkbox input[type=checkbox]:checked~.checked {
  display: inline-block;
}

/* Form Upload */

.dark .uppy-Dashboard-inner {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  background-color: rgb(15 23 42 / 0.2);
}

.dark [data-uppy-drag-drop-supported=true] .uppy-Dashboard-AddFiles, .dark .uppy-Dashboard-dropFilesHereHint {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.dark .uppy-Dashboard-AddFiles-title {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

/* Modal */

.modal {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 50;
  display: none;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

/* .modal .modal-dialog {
    @apply translate-x-0 translate-y-12;
} */

@-webkit-keyframes ModalSlide {

  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }

  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@keyframes ModalSlide {

  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }

  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

.modal.fade {
  -webkit-animation: ModalSlide .3s ease-in-out;
          animation: ModalSlide .3s ease-in-out;
}

.modal-dialog {
  pointer-events: none;
  position: relative;
  width: auto;
}

@media (min-width: 640px) {

  .modal-dialog {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 32rem;
  }
}

.modal-dialog {
    z-index: 9999 !important;
}

.modal-content {
  pointer-events: auto;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  background-clip: padding-box;
}

.dark .modal-content {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.modal-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-width: 1px;
  padding: 1rem;
}

.dark .modal-header {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.modal-title {
  margin-bottom: 0px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.dark .modal-title {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.dark .modal-body {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top-width: 1px;
  padding: 0.75rem;
}

.dark .modal-footer {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.modal-header .btn-close {
  margin-left: auto;
  cursor: pointer;
  -ms-flex-item-align: center;
      align-self: center;
  padding: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  line-height: 0;
  opacity: 0.5;
}

.modal-header .btn-close:hover {
  opacity: 0.75;
}

.dark .modal-header .btn-close {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.modal-filled {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.dark .modal-filled {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.modal-danger {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity)) !important;
}

.btn-close {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  background-color: transparent;
  padding: 0.25rem;
  opacity: 0.5;
}

/* Model Sizes */

@media (min-width: 640px) {

  .modal-sm {
    max-width: 20rem;
  }
}

@media (min-width: 1024px) {

  .modal-lg {
    max-width: 56rem;
  }
}

@media (min-width: 1280px) {

  .modal-xl {
    max-width: 72rem;
  }
}

.modal-fullwidth {
  width: 94%;
  max-width: none;
}

/* .modal-dialog-scrollable {
     @apply h-120 !important ; 
} */

.modal-dialog-scrollable {
  height: 24rem;
  max-height: 100%;
  overflow-y: auto;
}

.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

/* Modal Direction */

.modal-right {
  position: fixed;
  top: 0px;
  right: 0px;
  margin: 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 16rem;
  -webkit-animation: none;
          animation: none;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.dark .modal-right {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.modal.block .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.modal-bottom {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.modal-top {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.modal-dialog-center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
    height: calc(100% - 3.5rem);
}

.modal-overlay {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  z-index: 40;
  display: none;
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  opacity: 0.7;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 1000ms;
          transition-duration: 1000ms;
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.dark .modal-overlay {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.modal-enabled .modal-overlay {
  display: block;
}

.modal.modal-enabled .modal-overlay .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

/*   */

/*  _tables.scss */

/*   */

/* Sticky Header */

.fixed-solution .sticky-table-header {
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  top: 70px !important;
}

.table-responsive[data-pattern="priority-columns"]{
  border: 1px solid #e2e8f0;
}

.attendance-table .table thead tr th{
  padding: 5px;
}

.dataTable-table > thead > tr > th{
  border: none;
}

.dataTable-selector, .dataTable-input {
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.dataTable-selector:focus-visible, .dataTable-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dark .dataTable-selector, .dark .dataTable-input {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.dataTable-selector,
.dataTable-input{
  border-radius: 0.25rem;
  padding-right: 2.5rem;
}

.dark .dataTable-info, .dark .dataTable-dropdown label {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dataTable-table > tbody > tr > td, 
.dataTable-table > tbody > tr > th, 
.dataTable-table > tfoot > tr > td, 
.dataTable-table > tfoot > tr > th, 
.dataTable-table > thead > tr > td, 
.dataTable-table > thead > tr > th{
  padding:  16px 20px;
}

.dataTable-wrapper.no-footer .dataTable-container {
  border-bottom-width: 1px;
  border-style: dashed;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.dark .dataTable-wrapper.no-footer .dataTable-container {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.dataTable-pagination .active a, 
.dataTable-pagination .active a:focus, 
.dataTable-pagination .active a:hover{
  background-color: #f1f5f9;
}

/*  _form.scss */

.mce-panel {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.mce-label {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
  text-shadow: none !important;
}

.mce-tinymce {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.mce-btn {
  background-color: transparent;
}

.mce-flow-layout, .mce-top-part::before {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.mce-caret {
  border-width: 4px;
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity));
  opacity: .7 !important;
}

.mce-menubar .mce-caret {
  --tw-border-opacity: 1;
  border-top-color: rgb(71 85 105 / var(--tw-border-opacity));
  opacity: .7 !important;
}

.mce-menubar .mce-menubtn button span, .mce-btn .mce-txt, .mce-ico {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.mce-btn.mce-disabled button, 
.mce-btn.mce-disabled:hover button{
  opacity: .7 !important;
}

.mce-menu-item.mce-disabled, .mce-menu-item.mce-disabled:hover, .mce-menu-item:hover, .mce-menu-item:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.dark .tox .tox-edit-area__iframe {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dark .mce-content-body {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dark .tox .tox-mbtn__select-label,
.dark .mce-content-body{
  color: #fff !important;
}

.dark .tox:not(.tox-tinymce-inline) .tox-editor-header{
  background-color: #272e3e !important;
}

.dark .tox .tox-toolbar-overlord,
.dark .tox .tox-mbtn{
  background-color: #272e3e !important;
}

/* .dark .tox :not(svg):not(rect){
  background-color: #212836 !important;
  color: #fff !important;
} */

.dark .tox .tox-statusbar__branding svg,
.dark .tox .tox-collection__item-checkmark svg, 
.dark .tox .tox-collection__item-icon svg,
.dark .tox .tox-tbtn svg{
  fill: #76819b !important;
}

.dark .tox .tox-statusbar__path-item,
.dark .tox-collection__item-label{
  color: #ddd !important;
}

.dark .tox .tox-statusbar,
.dark .tox-tinymce{
  border-color: #262c3a !important;
}

.dark .tox .tox-menu,
.dark .tox .tox-toolbar-overlord .tox-toolbar__primary,
.dark .tox .tox-menubar{
  background-color: #212836 !important;
  color: #fff !important;
}

.dark .tox .tox-collection--list .tox-collection__item--active{
  background-color: #212836 !important;
  color: #fff !important;
}

.dark .tox .tox-collection--list .tox-collection__group{
  border-color: #ddd !important;
}

.dark .tox .tox-statusbar{
  background-color: #212836 !important;
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border-width: 0 !important;
}

.pointer-events-none {
  pointer-events: none !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.static {
  position: static !important;
}

.fixed {
  position: fixed !important;
}

.absolute {
  position: absolute !important;
}

.relative {
  position: relative !important;
}

.inset-0 {
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
}

.inset-y-0 {
  top: 0px !important;
  bottom: 0px !important;
}

.left-0 {
  left: 0px !important;
}

.bottom-0 {
  bottom: 0px !important;
}

.left-2 {
  left: 0.5rem !important;
}

.right-2 {
  right: 0.5rem !important;
}

.-top-2 {
  top: -0.5rem !important;
}

.-left-1 {
  left: -0.25rem !important;
}

.-top-3 {
  top: -0.75rem !important;
}

.left-28 {
  left: 7rem !important;
}

.right-\[-52px\] {
  right: -52px !important;
}

.top-\[23px\] {
  top: 23px !important;
}

.-top-1 {
  top: -0.25rem !important;
}

.right-0 {
  right: 0px !important;
}

.top-0 {
  top: 0px !important;
}

.top-3 {
  top: 0.75rem !important;
}

.top-1 {
  top: 0.25rem !important;
}

.-left-6 {
  left: -1.5rem !important;
}

.-top-4 {
  top: -1rem !important;
}

.-left-4 {
  left: -1rem !important;
}

.left-auto {
  left: auto !important;
}

.left-7 {
  left: 1.75rem !important;
}

.left-8 {
  left: 2rem !important;
}

.top-5 {
  top: 1.25rem !important;
}

.right-5 {
  right: 1.25rem !important;
}

.z-10 {
  z-index: 10 !important;
}

.z-20 {
  z-index: 20 !important;
}

.z-50 {
  z-index: 50 !important;
}

.z-\[2\] {
  z-index: 2 !important;
}

.z-\[1\] {
  z-index: 1 !important;
}

.z-0 {
  z-index: 0 !important;
}

.-z-10 {
  z-index: -10 !important;
}

.z-\[5\] {
  z-index: 5 !important;
}

.order-2 {
  -webkit-box-ordinal-group: 3 !important;
      -ms-flex-order: 2 !important;
          order: 2 !important;
}

.order-1 {
  -webkit-box-ordinal-group: 2 !important;
      -ms-flex-order: 1 !important;
          order: 1 !important;
}

.order-3 {
  -webkit-box-ordinal-group: 4 !important;
      -ms-flex-order: 3 !important;
          order: 3 !important;
}

.col-span-6 {
  grid-column: span 6 / span 6 !important;
}

.col-span-12 {
  grid-column: span 12 / span 12 !important;
}

.col-span-1 {
  grid-column: span 1 / span 1 !important;
}

.col-span-4 {
  grid-column: span 4 / span 4 !important;
}

.col-span-2 {
  grid-column: span 2 / span 2 !important;
}

.col-span-3 {
  grid-column: span 3 / span 3 !important;
}

.col-span-8 {
  grid-column: span 8 / span 8 !important;
}

.col-span-10 {
  grid-column: span 10 / span 10 !important;
}

.col-start-4 {
  grid-column-start: 4 !important;
}

.col-end-13 {
  grid-column-end: 13 !important;
}

.float-right {
  float: right !important;
}

.float-left {
  float: left !important;
}

.float-none {
  float: none !important;
}

.m-auto {
  margin: auto !important;
}

.m-0 {
  margin: 0px !important;
}

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.my-6 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.mx-0 {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}

.my-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.mx-1 {
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important;
}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-8 {
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
}

.my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-5 {
  margin-top: 1.25rem !important;
  margin-bottom: 1.25rem !important;
}

.mx-3 {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important;
}

.-mx-1\.5 {
  margin-left: -0.375rem !important;
  margin-right: -0.375rem !important;
}

.-my-1\.5 {
  margin-top: -0.375rem !important;
  margin-bottom: -0.375rem !important;
}

.-mx-1 {
  margin-left: -0.25rem !important;
  margin-right: -0.25rem !important;
}

.-my-1 {
  margin-top: -0.25rem !important;
  margin-bottom: -0.25rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mt-6 {
  margin-top: 1.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.ml-auto {
  margin-left: auto !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mr-3 {
  margin-right: 0.75rem !important;
}

.ml-0\.5 {
  margin-left: 0.125rem !important;
}

.ml-0 {
  margin-left: 0px !important;
}

.mb-0 {
  margin-bottom: 0px !important;
}

.-mt-1 {
  margin-top: -0.25rem !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.mb-5 {
  margin-bottom: 1.25rem !important;
}

.mt-5 {
  margin-top: 1.25rem !important;
}

.mb-3 {
  margin-bottom: 0.75rem !important;
}

.mb-4 {
  margin-bottom: 1rem !important;
}

.mt-0 {
  margin-top: 0px !important;
}

.-mb-1 {
  margin-bottom: -0.25rem !important;
}

.-mb-\[2px\] {
  margin-bottom: -2px !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.-mb-px {
  margin-bottom: -1px !important;
}

.mr-4 {
  margin-right: 1rem !important;
}

.-mt-8 {
  margin-top: -2rem !important;
}

.mr-0\.5 {
  margin-right: 0.125rem !important;
}

.mr-0 {
  margin-right: 0px !important;
}

.mr-auto {
  margin-right: auto !important;
}

.mb-8 {
  margin-bottom: 2rem !important;
}

.ml-3 {
  margin-left: 0.75rem !important;
}

.mb-6 {
  margin-bottom: 1.5rem !important;
}

.mt-3 {
  margin-top: 0.75rem !important;
}

.-mb-\[3px\] {
  margin-bottom: -3px !important;
}

.mb-10 {
  margin-bottom: 2.5rem !important;
}

.ml-8 {
  margin-left: 2rem !important;
}

.-mt-20 {
  margin-top: -5rem !important;
}

.mb-7 {
  margin-bottom: 1.75rem !important;
}

.-ml-8 {
  margin-left: -2rem !important;
}

.-ml-4 {
  margin-left: -1rem !important;
}

.mt-7 {
  margin-top: 1.75rem !important;
}

.mt-8 {
  margin-top: 2rem !important;
}

.block {
  display: block !important;
}

.inline-block {
  display: inline-block !important;
}

.inline {
  display: inline !important;
}

.flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.inline-flex {
  display: -webkit-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}

.table {
  display: table !important;
}

.flow-root {
  display: flow-root !important;
}

.grid {
  display: grid !important;
}

.hidden {
  display: none !important;
}

.h-14 {
  height: 3.5rem !important;
}

.h-32 {
  height: 8rem !important;
}

.h-6 {
  height: 1.5rem !important;
}

.h-8 {
  height: 2rem !important;
}

.h-52 {
  height: 13rem !important;
}

.h-20 {
  height: 5rem !important;
}

.h-full {
  height: 100% !important;
}

.h-1 {
  height: 0.25rem !important;
}

.h-10 {
  height: 2.5rem !important;
}

.h-2 {
  height: 0.5rem !important;
}

.h-40 {
  height: 10rem !important;
}

.h-16 {
  height: 4rem !important;
}

.h-\[188px\] {
  height: 188px !important;
}

.h-5 {
  height: 1.25rem !important;
}

.h-9 {
  height: 2.25rem !important;
}

.h-80 {
  height: 20rem !important;
}

.h-\[675px\] {
  height: 675px !important;
}

.h-4 {
  height: 1rem !important;
}

.h-\[725px\] {
  height: 725px !important;
}

.h-24 {
  height: 6rem !important;
}

.h-60 {
  height: 15rem !important;
}

.h-72 {
  height: 18rem !important;
}

.h-12 {
  height: 3rem !important;
}

.h-3 {
  height: 0.75rem !important;
}

.h-\[510px\] {
  height: 510px !important;
}

.h-96 {
  height: 24rem !important;
}

.h-36 {
  height: 9rem !important;
}

.h-3\.5 {
  height: 0.875rem !important;
}

.h-7 {
  height: 1.75rem !important;
}

.min-h-screen {
  min-height: 100vh !important;
}

.min-h-\[calc\(100vh-138px\)\] {
  min-height: calc(100vh - 138px) !important;
}

.w-full {
  width: 100% !important;
}

.w-14 {
  width: 3.5rem !important;
}

.w-32 {
  width: 8rem !important;
}

.w-8 {
  width: 2rem !important;
}

.w-64 {
  width: 16rem !important;
}

.w-6 {
  width: 1.5rem !important;
}

.w-20 {
  width: 5rem !important;
}

.w-10 {
  width: 2.5rem !important;
}

.w-40 {
  width: 10rem !important;
}

.w-96 {
  width: 24rem !important;
}

.w-16 {
  width: 4rem !important;
}

.w-\[170px\] {
  width: 170px !important;
}

.w-1\/3 {
  width: 33.333333% !important;
}

.w-2\/3 {
  width: 66.666667% !important;
}

.w-9 {
  width: 2.25rem !important;
}

.w-4 {
  width: 1rem !important;
}

.w-24 {
  width: 6rem !important;
}

.w-1 {
  width: 0.25rem !important;
}

.w-1\/4 {
  width: 25% !important;
}

.w-1\/2 {
  width: 50% !important;
}

.w-12 {
  width: 3rem !important;
}

.w-60 {
  width: 15rem !important;
}

.w-3 {
  width: 0.75rem !important;
}

.w-56 {
  width: 14rem !important;
}

.w-5 {
  width: 1.25rem !important;
}

.w-auto {
  width: auto !important;
}

.w-\[30\%\] {
  width: 30% !important;
}

.w-3\.5 {
  width: 0.875rem !important;
}

.w-72 {
  width: 18rem !important;
}

.w-7 {
  width: 1.75rem !important;
}

.w-11\/12 {
  width: 91.666667% !important;
}

.w-44 {
  width: 11rem !important;
}

.min-w-0 {
  min-width: 0px !important;
}

.min-w-full {
  min-width: 100% !important;
}

.max-w-full {
  max-width: 100% !important;
}

.max-w-xs {
  max-width: 20rem !important;
}

.max-w-xl {
  max-width: 36rem !important;
}

.max-w-md {
  max-width: 28rem !important;
}

.max-w-4xl {
  max-width: 56rem !important;
}

.flex-1 {
  -webkit-box-flex: 1 !important;
      -ms-flex: 1 1 0% !important;
          flex: 1 1 0% !important;
}

.flex-shrink {
  -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
}

.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
}

.shrink-0 {
  -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
}

.flex-grow {
  -webkit-box-flex: 1 !important;
      -ms-flex-positive: 1 !important;
          flex-grow: 1 !important;
}

.table-auto {
  table-layout: auto !important;
}

.origin-\[0\] {
  -webkit-transform-origin: 0 !important;
          transform-origin: 0 !important;
}

.-translate-y-6 {
  --tw-translate-y: -1.5rem !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.-translate-y-1\/2 {
  --tw-translate-y: -50% !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.translate-y-1\/4 {
  --tw-translate-y: 25% !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.rotate-45 {
  --tw-rotate: 45deg !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.rotate-2 {
  --tw-rotate: 2deg !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.rotate-180 {
  --tw-rotate: 180deg !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.scale-75 {
  --tw-scale-x: .75 !important;
  --tw-scale-y: .75 !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.transform {
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

@-webkit-keyframes spin {

  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spin {

  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.animate-spin {
  -webkit-animation: spin 1s linear infinite !important;
          animation: spin 1s linear infinite !important;
}

.cursor-pointer {
  cursor: pointer !important;
}

.cursor-not-allowed {
  cursor: not-allowed !important;
}

.cursor-text {
  cursor: text !important;
}

.resize {
  resize: both !important;
}

.list-inside {
  list-style-position: inside !important;
}

.list-none {
  list-style-type: none !important;
}

.list-disc {
  list-style-type: disc !important;
}

.list-decimal {
  list-style-type: decimal !important;
}

.appearance-none {
  -webkit-appearance: none !important;
     -moz-appearance: none !important;
          appearance: none !important;
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
}

.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
}

.flex-col {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
      -ms-flex-direction: column !important;
          flex-direction: column !important;
}

.flex-wrap {
  -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
}

.place-content-stretch {
  place-content: stretch !important;
}

.content-between {
  -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
}

.items-start {
  -webkit-box-align: start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important;
}

.items-end {
  -webkit-box-align: end !important;
      -ms-flex-align: end !important;
          align-items: flex-end !important;
}

.items-center {
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
}

.justify-start {
  -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
          justify-content: flex-start !important;
}

.justify-end {
  -webkit-box-pack: end !important;
      -ms-flex-pack: end !important;
          justify-content: flex-end !important;
}

.justify-center {
  -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
          justify-content: center !important;
}

.justify-between {
  -webkit-box-pack: justify !important;
      -ms-flex-pack: justify !important;
          justify-content: space-between !important;
}

.gap-4 {
  gap: 1rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 0.75rem !important;
}

.gap-0 {
  gap: 0px !important;
}

.gap-5 {
  gap: 1.25rem !important;
}

.gap-6 {
  gap: 1.5rem !important;
}

.gap-x-8 {
  -webkit-column-gap: 2rem !important;
     -moz-column-gap: 2rem !important;
          column-gap: 2rem !important;
}

.gap-y-4 {
  row-gap: 1rem !important;
}

.space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0px * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse))) !important;
}

.-space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(-1rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(-1rem * calc(1 - var(--tw-space-x-reverse))) !important;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(1rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))) !important;
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))) !important;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(1rem * var(--tw-space-y-reverse)) !important;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse)) !important;
}

.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse))) !important;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse))) !important;
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse)) !important;
}

.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(-1px * var(--tw-space-x-reverse)) !important;
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse))) !important;
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0 !important;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse))) !important;
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse)) !important;
}

.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0 !important;
  border-right-width: calc(1px * var(--tw-divide-x-reverse)) !important;
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse))) !important;
}

.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity)) !important;
}

.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity)) !important;
}

.self-center {
  -ms-flex-item-align: center !important;
      align-self: center !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.truncate {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}

.whitespace-nowrap {
  white-space: nowrap !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-md {
  border-radius: 0.375rem !important;
}

.rounded-lg {
  border-radius: 0.5rem !important;
}

.rounded-full {
  border-radius: 9999px !important;
}

.rounded-none {
  border-radius: 0px !important;
}

.rounded-t {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-l {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-r {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-t-lg {
  border-top-left-radius: 0.5rem !important;
  border-top-right-radius: 0.5rem !important;
}

.rounded-t-md {
  border-top-left-radius: 0.375rem !important;
  border-top-right-radius: 0.375rem !important;
}

.rounded-l-lg {
  border-top-left-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem !important;
  border-top-right-radius: 0.75rem !important;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}

.rounded-r-lg {
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
}

.rounded-tr-md {
  border-top-right-radius: 0.375rem !important;
}

.rounded-tl-md {
  border-top-left-radius: 0.375rem !important;
}

.rounded-bl-none {
  border-bottom-left-radius: 0px !important;
}

.rounded-br-none {
  border-bottom-right-radius: 0px !important;
}

.rounded-tl {
  border-top-left-radius: 0.25rem !important;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-tr {
  border-top-right-radius: 0.25rem !important;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-tl-\[33\%\] {
  border-top-left-radius: 33% !important;
}

.rounded-tr-\[50\%\] {
  border-top-right-radius: 50% !important;
}

.rounded-bl-\[50\%\] {
  border-bottom-left-radius: 50% !important;
}

.rounded-br-\[15\%\] {
  border-bottom-right-radius: 15% !important;
}

.border {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-0 {
  border-width: 0px !important;
}

.border-\[0\.5px\] {
  border-width: 0.5px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-b {
  border-bottom-width: 1px !important;
}

.border-l-0 {
  border-left-width: 0px !important;
}

.border-b-2 {
  border-bottom-width: 2px !important;
}

.border-t {
  border-top-width: 1px !important;
}

.border-r {
  border-right-width: 1px !important;
}

.border-r-0 {
  border-right-width: 0px !important;
}

.border-b-0 {
  border-bottom-width: 0px !important;
}

.border-t-0 {
  border-top-width: 0px !important;
}

.border-l {
  border-left-width: 1px !important;
}

.border-t-4 {
  border-top-width: 4px !important;
}

.border-dashed {
  border-style: dashed !important;
}

.border-none {
  border-style: none !important;
}

.border-gray-200 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(229 231 235 / var(--tw-border-opacity)) !important;
}

.border-gray-800 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(31 41 55 / var(--tw-border-opacity)) !important;
}

.border-slate-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(51 65 85 / var(--tw-border-opacity)) !important;
}

.border-slate-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(100 116 139 / var(--tw-border-opacity)) !important;
}

.border-gray-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(55 65 81 / var(--tw-border-opacity)) !important;
}

.border-gray-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(209 213 219 / var(--tw-border-opacity)) !important;
}

.border-white {
  --tw-border-opacity: 1 !important;
  border-color: rgb(255 255 255 / var(--tw-border-opacity)) !important;
}

.border-gray-100 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(243 244 246 / var(--tw-border-opacity)) !important;
}

.border-slate-200 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(226 232 240 / var(--tw-border-opacity)) !important;
}

.border-slate-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(203 213 225 / var(--tw-border-opacity)) !important;
}

.border-transparent {
  border-color: transparent !important;
}

.border-orange-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(253 186 116 / var(--tw-border-opacity)) !important;
}

.border-cyan-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(6 182 212 / var(--tw-border-opacity)) !important;
}

.border-yellow-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(250 204 21 / var(--tw-border-opacity)) !important;
}

.border-purple-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(192 132 252 / var(--tw-border-opacity)) !important;
}

.border-pink-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(236 72 153 / var(--tw-border-opacity)) !important;
}

.border-green-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(34 197 94 / var(--tw-border-opacity)) !important;
}

.border-primary-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(99 102 241 / var(--tw-border-opacity)) !important;
}

.border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity)) !important;
}

.border-blue-600 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(37 99 235 / var(--tw-border-opacity)) !important;
}

.border-cyan-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(103 232 249 / var(--tw-border-opacity)) !important;
}

.border-blue-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(147 197 253 / var(--tw-border-opacity)) !important;
}

.border-slate-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(148 163 184 / var(--tw-border-opacity)) !important;
}

.border-gray-50 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(249 250 251 / var(--tw-border-opacity)) !important;
}

.border-yellow-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(234 179 8 / var(--tw-border-opacity)) !important;
}

.border-purple-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(168 85 247 / var(--tw-border-opacity)) !important;
}

.border-\[\#E8E8E8\] {
  --tw-border-opacity: 1 !important;
  border-color: rgb(232 232 232 / var(--tw-border-opacity)) !important;
}

.border-gray-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(107 114 128 / var(--tw-border-opacity)) !important;
}

.border-blue-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(29 78 216 / var(--tw-border-opacity)) !important;
}

.border-blue-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(59 130 246 / var(--tw-border-opacity)) !important;
}

.border-green-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(21 128 61 / var(--tw-border-opacity)) !important;
}

.border-red-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(185 28 28 / var(--tw-border-opacity)) !important;
}

.border-purple-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(126 34 206 / var(--tw-border-opacity)) !important;
}

.border-opacity-20 {
  --tw-border-opacity: 0.2 !important;
}

.bg-gray-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity)) !important;
}

.bg-white {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
}

.bg-slate-900 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity)) !important;
}

.bg-blue-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity)) !important;
}

.bg-gray-900 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
}

.bg-gray-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity)) !important;
}

.bg-pink-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(236 72 153 / var(--tw-bg-opacity)) !important;
}

.bg-purple-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity)) !important;
}

.bg-yellow-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity)) !important;
}

.bg-orange-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity)) !important;
}

.bg-teal-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(20 184 166 / var(--tw-bg-opacity)) !important;
}

.bg-slate-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity)) !important;
}

.bg-gray-50\/5 {
  background-color: rgb(249 250 251 / 0.05) !important;
}

.bg-gray-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity)) !important;
}

.bg-slate-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity)) !important;
}

.bg-gray-700 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity)) !important;
}

.bg-gray-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity)) !important;
}

.bg-slate-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity)) !important;
}

.bg-pink-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(252 231 243 / var(--tw-bg-opacity)) !important;
}

.bg-primary-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity)) !important;
}

.bg-green-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity)) !important;
}

.bg-cyan-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity)) !important;
}

.bg-green-500\/10 {
  background-color: rgb(34 197 94 / 0.1) !important;
}

.bg-green-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity)) !important;
}

.bg-blue-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity)) !important;
}

.bg-red-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity)) !important;
}

.bg-orange-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 247 237 / var(--tw-bg-opacity)) !important;
}

.bg-yellow-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity)) !important;
}

.bg-purple-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity)) !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-green-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(240 253 244 / var(--tw-bg-opacity)) !important;
}

.bg-red-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity)) !important;
}

.bg-red-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity)) !important;
}

.bg-slate-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity)) !important;
}

.bg-red-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity)) !important;
}

.bg-cyan-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(236 254 255 / var(--tw-bg-opacity)) !important;
}

.bg-blue-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity)) !important;
}

.bg-blue-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity)) !important;
}

.bg-purple-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(243 232 255 / var(--tw-bg-opacity)) !important;
}

.bg-yellow-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity)) !important;
}

.bg-slate-300 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity)) !important;
}

.bg-primary-500\/20 {
  background-color: rgb(99 102 241 / 0.2) !important;
}

.bg-slate-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity)) !important;
}

.bg-green-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity)) !important;
}

.bg-gray-300 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity)) !important;
}

.bg-yellow-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity)) !important;
}

.bg-blue-700 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity)) !important;
}

.bg-indigo-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity)) !important;
}

.bg-\[\#3b5998\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(59 89 152 / var(--tw-bg-opacity)) !important;
}

.bg-\[\#1da1f2\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(29 161 242 / var(--tw-bg-opacity)) !important;
}

.bg-\[\#24292F\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(36 41 47 / var(--tw-bg-opacity)) !important;
}

.bg-\[\#4285F4\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(66 133 244 / var(--tw-bg-opacity)) !important;
}

.bg-\[\#050708\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(5 7 8 / var(--tw-bg-opacity)) !important;
}

.bg-blue-400 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity)) !important;
}

.bg-slate-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity)) !important;
}

.bg-primary-50 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity)) !important;
}

.bg-gray-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity)) !important;
}

.bg-blue-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.bg-opacity-10 {
  --tw-bg-opacity: 0.1 !important;
}

.bg-opacity-60 {
  --tw-bg-opacity: 0.6 !important;
}


.bg-gradient-to-r {
  background-image: -webkit-gradient(linear, left top, right top, from(var(--tw-gradient-stops))) !important;
  background-image: linear-gradient(to right, var(--tw-gradient-stops)) !important;
}

.bg-gradient-to-br {
  background-image: -webkit-gradient(linear, left top, right bottom, from(var(--tw-gradient-stops))) !important;
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important;
}

.from-blue-700 {
  --tw-gradient-from: #1d4ed8 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(29 78 216 / 0)) !important;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(59 130 246 / 0)) !important;
}

.from-green-400 {
  --tw-gradient-from: #4ade80 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(74 222 128 / 0)) !important;
}

.from-cyan-400 {
  --tw-gradient-from: #22d3ee !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(34 211 238 / 0)) !important;
}

.from-teal-400 {
  --tw-gradient-from: #2dd4bf !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(45 212 191 / 0)) !important;
}

.from-lime-200 {
  --tw-gradient-from: #d9f99d !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(217 249 157 / 0)) !important;
}

.from-red-400 {
  --tw-gradient-from: #f87171 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(248 113 113 / 0)) !important;
}

.from-pink-400 {
  --tw-gradient-from: #f472b6 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(244 114 182 / 0)) !important;
}

.from-purple-500 {
  --tw-gradient-from: #a855f7 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 85 247 / 0)) !important;
}

.from-purple-600 {
  --tw-gradient-from: #9333ea !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(147 51 234 / 0)) !important;
}

.from-cyan-500 {
  --tw-gradient-from: #06b6d4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0)) !important;
}

.from-pink-500 {
  --tw-gradient-from: #ec4899 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 72 153 / 0)) !important;
}

.from-teal-200 {
  --tw-gradient-from: #99f6e4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(153 246 228 / 0)) !important;
}

.from-red-200 {
  --tw-gradient-from: #fecaca !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 202 202 / 0)) !important;
}

.from-teal-300 {
  --tw-gradient-from: #5eead4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(94 234 212 / 0)) !important;
}

.via-indigo-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #4f46e5, var(--tw-gradient-to, rgb(79 70 229 / 0)) !important;
}

.via-blue-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #2563eb, var(--tw-gradient-to, rgb(37 99 235 / 0)) !important;
}

.via-green-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #22c55e, var(--tw-gradient-to, rgb(34 197 94 / 0)) !important;
}

.via-cyan-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to, rgb(6 182 212 / 0)) !important;
}

.via-teal-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #14b8a6, var(--tw-gradient-to, rgb(20 184 166 / 0)) !important;
}

.via-lime-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to, rgb(163 230 53 / 0)) !important;
}

.via-red-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgb(239 68 68 / 0)) !important;
}

.via-pink-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #ec4899, var(--tw-gradient-to, rgb(236 72 153 / 0)) !important;
}

.via-purple-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #9333ea, var(--tw-gradient-to, rgb(147 51 234 / 0)) !important;
}

.via-red-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fca5a5, var(--tw-gradient-to, rgb(252 165 165 / 0)) !important;
}

.to-purple-600 {
  --tw-gradient-to: #9333ea !important;
}

.to-blue-700 {
  --tw-gradient-to: #1d4ed8 !important;
}

.to-green-600 {
  --tw-gradient-to: #16a34a !important;
}

.to-cyan-600 {
  --tw-gradient-to: #0891b2 !important;
}

.to-teal-600 {
  --tw-gradient-to: #0d9488 !important;
}

.to-lime-500 {
  --tw-gradient-to: #84cc16 !important;
}

.to-red-600 {
  --tw-gradient-to: #dc2626 !important;
}

.to-pink-600 {
  --tw-gradient-to: #db2777 !important;
}

.to-purple-700 {
  --tw-gradient-to: #7e22ce !important;
}

.to-blue-500 {
  --tw-gradient-to: #3b82f6 !important;
}

.to-blue-600 {
  --tw-gradient-to: #2563eb !important;
}

.to-pink-500 {
  --tw-gradient-to: #ec4899 !important;
}

.to-orange-400 {
  --tw-gradient-to: #fb923c !important;
}

.to-lime-200 {
  --tw-gradient-to: #d9f99d !important;
}

.to-yellow-200 {
  --tw-gradient-to: #fef08a !important;
}

.to-lime-300 {
  --tw-gradient-to: #bef264 !important;
}

.bg-contain {
  background-size: contain !important;
}

.bg-right-bottom {
  background-position: right bottom !important;
}

.bg-center {
  background-position: center !important;
}

.bg-no-repeat {
  background-repeat: no-repeat !important;
}

.object-cover {
  -o-object-fit: cover !important;
     object-fit: cover !important;
}

.object-center {
  -o-object-position: center !important;
     object-position: center !important;
}

.p-6 {
  padding: 1.5rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-5 {
  padding: 1.25rem !important;
}

.p-2\.5 {
  padding: 0.625rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.p-0 {
  padding: 0px !important;
}

.p-\[6px\] {
  padding: 6px !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-8 {
  padding: 2rem !important;
}

.p-14 {
  padding: 3.5rem !important;
}

.p-10 {
  padding: 2.5rem !important;
}

.p-1\.5 {
  padding: 0.375rem !important;
}

.p-0\.5 {
  padding: 0.125rem !important;
}

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.px-2\.5 {
  padding-left: 0.625rem !important;
  padding-right: 0.625rem !important;
}

.py-2\.5 {
  padding-top: 0.625rem !important;
  padding-bottom: 0.625rem !important;
}

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-\[2px\] {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}

.py-0\.5 {
  padding-top: 0.125rem !important;
  padding-bottom: 0.125rem !important;
}

.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.px-6 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}

.px-5 {
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important;
}

.py-1\.5 {
  padding-top: 0.375rem !important;
  padding-bottom: 0.375rem !important;
}

.py-3\.5 {
  padding-top: 0.875rem !important;
  padding-bottom: 0.875rem !important;
}

.py-12 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.py-8 {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}

.px-0\.5 {
  padding-left: 0.125rem !important;
  padding-right: 0.125rem !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-4 {
  padding-bottom: 1rem !important;
}

.pl-3 {
  padding-left: 0.75rem !important;
}

.pl-10 {
  padding-left: 2.5rem !important;
}

.pb-14 {
  padding-bottom: 3.5rem !important;
}

.pl-4 {
  padding-left: 1rem !important;
}

.pt-4 {
  padding-top: 1rem !important;
}

.pl-12 {
  padding-left: 3rem !important;
}

.pt-0 {
  padding-top: 0px !important;
}

.pr-10 {
  padding-right: 2.5rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 0.75rem !important;
}

.pr-4 {
  padding-right: 1rem !important;
}

.text-left {
  text-align: left !important;
}

.text-center {
  text-align: center !important;
}

.text-right {
  text-align: right !important;
}

.text-xl {
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
}

.text-xs {
  font-size: 0.75rem !important;
  line-height: 1rem !important;
}

.text-7xl {
  font-size: 4.5rem !important;
  line-height: 1 !important;
}

.text-lg {
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
}

.text-base {
  font-size: 1rem !important;
  line-height: 1.5rem !important;
}

.text-2xl {
  font-size: 1.5rem !important;
  line-height: 2rem !important;
}

.text-sm {
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
}

.text-\[11px\] {
  font-size: 11px !important;
}

.text-4xl {
  font-size: 2.25rem !important;
  line-height: 2.5rem !important;
}

.text-3xl {
  font-size: 1.875rem !important;
  line-height: 2.25rem !important;
}

.text-\[12px\] {
  font-size: 12px !important;
}

.text-\[20px\] {
  font-size: 20px !important;
}

.text-\[10px\] {
  font-size: 10px !important;
}

.text-\[15px\] {
  font-size: 15px !important;
}

.text-\[0\.688rem\] {
  font-size: 0.688rem !important;
}

.text-5xl {
  font-size: 3rem !important;
  line-height: 1 !important;
}

.text-\[18px\] {
  font-size: 18px !important;
}

.text-\[16px\] {
  font-size: 16px !important;
}

.text-\[40px\] {
  font-size: 40px !important;
}

.text-6xl {
  font-size: 3.75rem !important;
  line-height: 1 !important;
}

.font-semibold {
  font-weight: 600 !important;
}

.font-bold {
  font-weight: 700 !important;
}

.font-medium {
  font-weight: 500 !important;
}

.font-normal {
  font-weight: 400 !important;
}

.font-extrabold {
  font-weight: 800 !important;
}

.font-thin {
  font-weight: 100 !important;
}

.font-extralight {
  font-weight: 200 !important;
}

.font-light {
  font-weight: 300 !important;
}

.font-black {
  font-weight: 900 !important;
}

.uppercase {
  text-transform: uppercase !important;
}

.italic {
  font-style: italic !important;
}

.leading-6 {
  line-height: 1.5rem !important;
}

.leading-\[8px\] {
  line-height: 8px !important;
}

.leading-8 {
  line-height: 2rem !important;
}

.leading-tight {
  line-height: 1.25 !important;
}

.leading-none {
  line-height: 1 !important;
}

.leading-4 {
  line-height: 1rem !important;
}

.leading-snug {
  line-height: 1.375 !important;
}

.leading-normal {
  line-height: 1.5 !important;
}

.leading-relaxed {
  line-height: 1.625 !important;
}

.leading-loose {
  line-height: 2 !important;
}

.tracking-wide {
  letter-spacing: 0.025em !important;
}

.tracking-tight {
  letter-spacing: -0.025em !important;
}

.tracking-wider {
  letter-spacing: 0.05em !important;
}

.tracking-widest {
  letter-spacing: 0.1em !important;
}

.text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.text-slate-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-text-opacity)) !important;
}

.text-slate-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(203 213 225 / var(--tw-text-opacity)) !important;
}

.text-pink-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(236 72 153 / var(--tw-text-opacity)) !important;
}

.text-blue-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(59 130 246 / var(--tw-text-opacity)) !important;
}

.text-purple-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(168 85 247 / var(--tw-text-opacity)) !important;
}

.text-yellow-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(234 179 8 / var(--tw-text-opacity)) !important;
}

.text-orange-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(249 115 22 / var(--tw-text-opacity)) !important;
}

.text-teal-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(20 184 166 / var(--tw-text-opacity)) !important;
}

.text-slate-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139 / var(--tw-text-opacity)) !important;
}

.text-gray-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-text-opacity)) !important;
}

.text-gray-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(209 213 219 / var(--tw-text-opacity)) !important;
}

.text-gray-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(31 41 55 / var(--tw-text-opacity)) !important;
}

.text-gray-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(107 114 128 / var(--tw-text-opacity)) !important;
}

.text-gray-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}

.text-gray-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(55 65 81 / var(--tw-text-opacity)) !important;
}

.text-blue-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(37 99 235 / var(--tw-text-opacity)) !important;
}

.text-indigo-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(67 56 202 / var(--tw-text-opacity)) !important;
}

.text-slate-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(71 85 105 / var(--tw-text-opacity)) !important;
}

.text-red-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(239 68 68 / var(--tw-text-opacity)) !important;
}

.text-green-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(34 197 94 / var(--tw-text-opacity)) !important;
}

.text-slate-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(51 65 85 / var(--tw-text-opacity)) !important;
}

.text-cyan-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(6 182 212 / var(--tw-text-opacity)) !important;
}

.text-primary-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(99 102 241 / var(--tw-text-opacity)) !important;
}

.text-gray-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(75 85 99 / var(--tw-text-opacity)) !important;
}

.text-slate-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(30 41 59 / var(--tw-text-opacity)) !important;
}

.text-green-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-text-opacity)) !important;
}

.text-blue-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(29 78 216 / var(--tw-text-opacity)) !important;
}

.text-pink-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(190 24 93 / var(--tw-text-opacity)) !important;
}

.text-red-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-text-opacity)) !important;
}

.text-slate-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(15 23 42 / var(--tw-text-opacity)) !important;
}

.text-slate-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(241 245 249 / var(--tw-text-opacity)) !important;
}

.text-green-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(20 83 45 / var(--tw-text-opacity)) !important;
}

.text-green-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(22 163 74 / var(--tw-text-opacity)) !important;
}

.text-red-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(127 29 29 / var(--tw-text-opacity)) !important;
}

.text-red-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(220 38 38 / var(--tw-text-opacity)) !important;
}

.text-yellow-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(250 204 21 / var(--tw-text-opacity)) !important;
}

.text-slate-50 {
  --tw-text-opacity: 1 !important;
  color: rgb(248 250 252 / var(--tw-text-opacity)) !important;
}

.text-primary-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(129 140 248 / var(--tw-text-opacity)) !important;
}

.text-slate-200 {
  --tw-text-opacity: 1 !important;
  color: rgb(226 232 240 / var(--tw-text-opacity)) !important;
}

.text-sky-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(14 165 233 / var(--tw-text-opacity)) !important;
}

.text-green-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(74 222 128 / var(--tw-text-opacity)) !important;
}

.text-dark {
  --tw-text-opacity: 1 !important;
  color: rgb(60 72 88 / var(--tw-text-opacity)) !important;
}

.text-yellow-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(161 98 7 / var(--tw-text-opacity)) !important;
}

.text-blue-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(30 64 175 / var(--tw-text-opacity)) !important;
}

.text-red-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(153 27 27 / var(--tw-text-opacity)) !important;
}

.text-green-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(22 101 52 / var(--tw-text-opacity)) !important;
}

.text-yellow-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(133 77 14 / var(--tw-text-opacity)) !important;
}

.text-indigo-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(55 48 163 / var(--tw-text-opacity)) !important;
}

.text-purple-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(107 33 168 / var(--tw-text-opacity)) !important;
}

.text-pink-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(157 23 77 / var(--tw-text-opacity)) !important;
}

.text-purple-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(126 34 206 / var(--tw-text-opacity)) !important;
}

.text-primary-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(224 231 255 / var(--tw-text-opacity)) !important;
}

.text-blue-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(219 234 254 / var(--tw-text-opacity)) !important;
}

.text-amber-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(245 158 11 / var(--tw-text-opacity)) !important;
}

.text-lime-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(132 204 22 / var(--tw-text-opacity)) !important;
}

.text-emerald-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(16 185 129 / var(--tw-text-opacity)) !important;
}

.text-indigo-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(99 102 241 / var(--tw-text-opacity)) !important;
}

.text-violet-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(139 92 246 / var(--tw-text-opacity)) !important;
}

.text-fuchsia-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(217 70 239 / var(--tw-text-opacity)) !important;
}

.text-rose-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(244 63 94 / var(--tw-text-opacity)) !important;
}

.text-indigo-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(79 70 229 / var(--tw-text-opacity)) !important;
}

.text-black {
  --tw-text-opacity: 1 !important;
  color: rgb(22 28 45 / var(--tw-text-opacity)) !important;
}

.text-opacity-100 {
  --tw-text-opacity: 1 !important;
}

.underline {
  -webkit-text-decoration-line: underline !important;
          text-decoration-line: underline !important;
}

.overline {
  -webkit-text-decoration-line: overline !important;
          text-decoration-line: overline !important;
}

.line-through {
  -webkit-text-decoration-line: line-through !important;
          text-decoration-line: line-through !important;
}

.no-underline {
  -webkit-text-decoration-line: none !important;
          text-decoration-line: none !important;
}

.antialiased {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

.placeholder-gray-400::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-gray-400::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-green-700::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-green-700::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-green-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-green-700::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-green-700::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-red-700::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-red-700::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-red-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-red-700::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity)) !important;
}

.placeholder-red-700::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity)) !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.shadow-lg {
  --tw-shadow: 0 10px 25px -3px rgb(60 72 88 / 0.15) !important;
  --tw-shadow-colored: 0 10px 25px -3px var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-sm {
  --tw-shadow: 0 2px 4px 0 rgb(60 72 88 / 0.15) !important;
  --tw-shadow-colored: 0 2px 4px 0 var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow {
  --tw-shadow: 0 0 3px rgb(60 72 88 / 0.15) !important;
  --tw-shadow-colored: 0 0 3px var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-md {
  --tw-shadow: 0 5px 13px rgb(60 72 88 / 0.20) !important;
  --tw-shadow-colored: 0 5px 13px var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-none {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-\[0_0_0_3px\] {
  --tw-shadow: 0 0 0 3px !important;
  --tw-shadow-colored: 0 0 0 3px var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1) !important;
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow-primary-500 {
  --tw-shadow-color: #6366f1 !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.shadow-pink-500 {
  --tw-shadow-color: #ec4899 !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.shadow-green-500 {
  --tw-shadow-color: #22c55e !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.shadow-cyan-500 {
  --tw-shadow-color: #06b6d4 !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.shadow-yellow-500 {
  --tw-shadow-color: #eab308 !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.shadow-orange-500 {
  --tw-shadow-color: #f97316 !important;
  --tw-shadow: var(--tw-shadow-colored) !important;
}

.outline-none {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.outline {
  outline-style: solid !important;
}

.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.ring-slate-300\/50 {
  --tw-ring-color: rgb(203 213 225 / 0.5) !important;
}

.ring-white {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity)) !important;
}

.ring-slate-200 {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(226 232 240 / var(--tw-ring-opacity)) !important;
}

.ring-offset-0 {
  --tw-ring-offset-width: 0px !important;
}

.ring-offset-2 {
  --tw-ring-offset-width: 2px !important;
}

.blur {
  --tw-blur: blur(8px) !important;
  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}

.filter {
  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}

.transition-colors {
  -webkit-transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color !important;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color !important;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  -webkit-transition-duration: 150ms !important;
          transition-duration: 150ms !important;
}

.transition {
  -webkit-transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
  transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  -webkit-transition-duration: 150ms !important;
          transition-duration: 150ms !important;
}

.transition-all {
  -webkit-transition-property: all !important;
  transition-property: all !important;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  -webkit-transition-duration: 150ms !important;
          transition-duration: 150ms !important;
}

.duration-200 {
  -webkit-transition-duration: 200ms !important;
          transition-duration: 200ms !important;
}

.duration-500 {
  -webkit-transition-duration: 500ms !important;
          transition-duration: 500ms !important;
}

.duration-300 {
  -webkit-transition-duration: 300ms !important;
          transition-duration: 300ms !important;
}

.duration-75 {
  -webkit-transition-duration: 75ms !important;
          transition-duration: 75ms !important;
}

.ease-in-out {
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.ease-out {
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
}

.ease-in {
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
}

[data-simplebar] {
  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.simplebar-wrapper {
  overflow: hidden;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
}

.simplebar-mask {
  direction: inherit;
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto !important;
  height: auto !important;
  z-index: 0;
}

.simplebar-offset {
  direction: inherit !important;
  -webkit-box-sizing: inherit !important;
          box-sizing: inherit !important;
  resize: none !important;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

.simplebar-content-wrapper {
  direction: inherit;
  -webkit-box-sizing: border-box !important;
          box-sizing: border-box !important;
  position: relative;
  display: block;
  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */
  width: auto;
  max-width: 100%; /* Not required for horizontal scroll to trigger */
  max-height: 100%; /* Needed for vertical scroll to trigger */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.simplebar-content-wrapper::-webkit-scrollbar,
.simplebar-hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.simplebar-content:before,
.simplebar-content:after {
  content: " ";
  display: table;
}

.simplebar-placeholder {
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  pointer-events: none;
}

.simplebar-height-auto-observer-wrapper {
  -webkit-box-sizing: inherit !important;
          box-sizing: inherit !important;
  height: 100%;
  width: 100%;
  max-width: 1px;
  position: relative;
  float: left;
  max-height: 1px;
  overflow: hidden;
  z-index: -1;
  padding: 0;
  margin: 0;
  pointer-events: none;
  -webkit-box-flex: inherit;
      -ms-flex-positive: inherit;
          flex-grow: inherit;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -ms-flex-preferred-size: 0;
      flex-basis: 0;
}

.simplebar-height-auto-observer {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 1000%;
  width: 1000%;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.simplebar-track {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

[data-simplebar].simplebar-dragging .simplebar-content {
  pointer-events: none;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  -webkit-user-select: none;
}

[data-simplebar].simplebar-dragging .simplebar-track {
  pointer-events: all;
}

.simplebar-scrollbar {
  position: absolute;
  left: 0;
  right: 0;
  min-height: 10px;
}

.simplebar-scrollbar:before {
  position: absolute;
  content: "";
  background: #64748b;
  border-radius: 7px;
  left: 2px;
  right: 2px;
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}

.simplebar-scrollbar.simplebar-visible:before {
  /* When hovered, remove all transitions from drag handle */
  opacity: 0.2;
  -webkit-transition: opacity 0s linear;
  transition: opacity 0s linear;
}

.simplebar-track.simplebar-vertical {
  top: 0;
  width: 9px;
}

.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
  top: 2px;
  bottom: 2px;
}

.simplebar-track.simplebar-horizontal {
  left: 0;
  height: 11px;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
  height: 100%;
  left: 2px;
  right: 2px;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  right: auto;
  left: 0;
  top: 2px;
  height: 7px;
  min-height: 0;
  min-width: 10px;
  width: auto;
}

/* Rtl support */

[data-simplebar-direction="rtl"] .simplebar-track.simplebar-vertical {
  right: auto;
  left: 0;
}

.hs-dummy-scrollbar-size {
  direction: rtl;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  height: 500px;
  width: 500px;
  overflow-y: hidden;
  overflow-x: scroll;
}

.simplebar-hide-scrollbar {
  position: fixed;
  left: 0;
  visibility: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Calendar */

.fc-event {
  border-radius: 2px;
  border: none;
  cursor: move;
  font-size: 13px;
  margin: 5px;
  padding: 7px 5px;
  text-align: center;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.18; 
  color: #3b82f6;
}

.fc .fc-header-toolbar.fc-toolbar .fc-toolbar-chunk h2 {
  font-weight: 500;
}

.dark .fc .fc-header-toolbar.fc-toolbar .fc-toolbar-chunk h2 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.fc .fc-header-toolbar.fc-toolbar .fc-toolbar-chunk h2{
  font-size: 16px;
  text-transform: uppercase;  
}

.fc .fc-toolbar.fc-header-toolbar{
  margin-bottom: 1rem;
}

.dark .fc .fc-col-header-cell-cushion {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.fc .fc-col-header-cell-cushion{
  padding: 10px 0;
}

.dark .fc .fc-daygrid-day-number {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.fc .fc-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.fc .fc-button-primary {
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(219 234 254 / var(--tw-border-opacity));
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.08;
}

.dark .fc .fc-button-primary {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.fc .fc-button-primary{
  color: #3b82f6;
  text-transform: capitalize;
  text-shadow: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.fc .fc-button-primary:hover {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.dark .fc .fc-button-primary:hover {
  --tw-border-opacity: 1;
  border-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.fc .fc-button-primary:hover{
    background: #3b82f6;
    color: #fff;
}

.fc .fc-button-primary.active,
.fc .fc-button-primary.focus,
.fc .fc-button-primary:active{
  text-shadow: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.fc .fc-button-primary:disabled {
  --tw-border-opacity: 1;
  border-color: rgb(219 234 254 / var(--tw-border-opacity));
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.08;
}

.dark .fc .fc-button-primary:disabled {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.fc .fc-button-primary:disabled {
  color: #3b82f6;
  opacity: 1;
}

.fc .fc-button-primary:not(:disabled):active,
.fc .fc-button-primary:not(:disabled).fc-button-active{
  background: #3b82f6;
  color: #fff;
  border-color: #fff;
}

.fc .fc-button-primary:not(:disabled):active:focus,
.fc .fc-button-primary:not(:disabled).fc-button-active:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.fc .fc-button-primary
.fc .fc-button-primary

.fc .fc-scrollgrid{
  border-collapse: collapse;
}

.fc-license-message{
  display: none;
}

.fc-theme-standard .fc-scrollgrid, .fc-theme-standard th, .fc-theme-standard td {
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.dark .fc-theme-standard .fc-scrollgrid, .dark .fc-theme-standard th, .dark .fc-theme-standard td {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.fc-theme-standard .fc-scrollgrid,
.fc-theme-standard th,
.fc-theme-standard td{
  border: 1px solid #e2e8f0;
}

.fc-day-other{
  background-image: linear-gradient(-45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #f1f5f9 75%, transparent 75%, transparent);
  background-size: 10px 10px;
}

.dark .fc-day-other{
  background-image: linear-gradient(-45deg, #334155 25%, transparent 25%, transparent 50%, #1e293b 50%, #1e293b 75%, transparent 75%, transparent);
  background-size: 10px 10px;
}

.fc-h-event .fc-event-main{
  color: #94a3b8;
}

/* Lightpick */

.litepicker{
  -webkit-box-shadow: none;
          box-shadow: none;
  background-color: #fff;
  border: 1px solid #cbd5e1;
  z-index: 99;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.litepicker .container__main{
  width: 100%;
}

.litepicker .container__main .month-item{
  width: 100%;
}

.litepicker .container__months{
    width: 100%;
    -webkit-box-shadow: none;
            box-shadow: none;
    background-color: #fff;
}

.litepicker .container__months .month-item-weekdays-row > div{
  font-size: 12px;
  font-weight: 500;
  color: #f1f5f9;
}

.litepicker .container__months .month-item-header div > .month-item-name,
.litepicker .container__months .month-item-header div > .month-item-year{
  color: #f1f5f9;
}

.litepicker .container__days  > div,
.litepicker .container__days  > a{
  width: calc(100% / 7);
  padding: 12px 0;
}

.litepicker .container__days .day-item {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.dark .litepicker .container__days .day-item {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.litepicker .container__days .day-item{
  font-size: 12px;
  -webkit-transition: none;
  transition: none;
}

.litepicker .container__days.is-today {
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.08;
  color: #3b82f6;
}

.litepicker .container__days:hover{
  -webkit-box-shadow: none;
          box-shadow: none;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.08;
  color: #3b82f6;
}

.fc-theme-standard, th {
  font-weight: 500;
}

.fc-daygrid-block-event .fc-event-title{
  color: #3b82f6;
  font-weight: 500;
}

/* UI Slider */

.noUi-target {
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}

.dark .noUi-target {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.noUi-target {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px #f8fafc, 0 3px 6px -5px #e2e8f0;
          box-shadow: inset 0 1px 1px #f8fafc, 0 3px 6px -5px #e2e8f0;
}

.dark .noUi-target{
  -webkit-box-shadow: inset 0 1px 1px #0f172a, 0 3px 6px -5px #334155;
          box-shadow: inset 0 1px 1px #0f172a, 0 3px 6px -5px #334155;
}

.noUi-horizontal .noUi-handle {
  width: 16px;
  height: 16px;
  right: -8px;
  top: -6px;
}

.noUi-horizontal {
  height: 7px;
}

/* Handle stripes;
 */

.noUi-handle {
  border-width: 2px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.dark .noUi-handle {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.noUi-handle{
  border-radius: 50px;
  background: #3b82f6;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.noUi-handle:before,
.noUi-handle:after{
  height: 4px;
   width: 1px;
   background: #fff;
   left: 4px;
   top: 4px;
}

.noUi-handle:after {
   left: 7px;
 }

.noUi-connect {
  background: #3b82f6;
}

.noUi-vertical{
  width: 7px;
}

.noUi-vertical .noUi-handle {
  width: 16px;
  height: 16px;
  right: -5.5px;
  bottom: -6px;
}

.noUi-vertical .noUi-handle:before,
.noUi-vertical .noUi-handle:after{
  width: 5px;
  height: 1px;
  left: 3px;
  top: 7px;
}

.noUi-vertical .noUi-handle:after {
  width: 5px;
  height: 1px;
  left: 3px;
  top: 4px;
}

.noUi-marker {
  position: absolute;
  background-color: rgb(100 116 139 / 0.2);
}

.noUi-marker-sub {
  background-color: rgb(100 116 139 / 0.3);
}

.noUi-marker-large {
  background-color: rgb(100 116 139 / 0.3);
}

.noUi-marker-horizontal.noUi-marker-large{
  height: 12px;
}

.example-val:before {
  content: "Value: ";
}

.noUi-tooltip {
  display: none;
}

.noUi-active .noUi-tooltip {
  display: block;
}

.noUi-tooltip {
  border: 1px solid #e2e8f0;
  background-color: rgb(226 232 240 / 0.3);
  color: #475569;
  padding: 2px 4px;
  font-size: 10px;
}

/* Charts */

.chart-demo {
  height: 370px;
  margin: 20px auto;
}

.chart {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 110px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.chart canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.chart.chart-widget-pie {
  margin-top: 5px;
  margin-bottom: 5px;
}

.percent {
  display: inline-block;
  line-height: 110px;
  z-index: 2;
}

.percent:after {
  content: "%";
  margin-left: 0.1em;
  font-size: 0.8em;
}

/*== Apex Chart ==*/

.apexcharts-ycrosshairs, .apexcharts-gridline, .apexcharts-gridlines-horizontal, .apexcharts-gridlines-vertical, .apexcharts-grid, .apexcharts-gridline, .apexcharts-xaxis-tick, .apexcharts-xaxis line, .apexcharts-gridline line {
  pointer-events: none;
  stroke: #f1f5f9;
}

.dark .apexcharts-ycrosshairs, .dark .apexcharts-gridline, .dark .apexcharts-gridlines-horizontal, .dark .apexcharts-gridlines-vertical, .dark .apexcharts-grid, .dark .apexcharts-gridline, .dark .apexcharts-xaxis-tick, .dark .apexcharts-xaxis line, .dark .apexcharts-gridline line {
  stroke: #334155;
}

.apexcharts-radar-series line, .apexcharts-area-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events, .apexcharts-line-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {
  pointer-events: none;
  stroke: #f1f5f9;
}

.dark .apexcharts-radar-series line, .dark .apexcharts-area-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events, .dark .apexcharts-line-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events, .dark .apexcharts-radar-series path, .dark .apexcharts-radar-series polygon {
  stroke: #334155;
}

.apexcharts-legend-series .apexcharts-legend-text {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.dark .apexcharts-legend-series .apexcharts-legend-text {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.apexcharts-pie-label {
  fill: #fff;
}

.apexcharts-datalabels text, .apexcharts-data-labels, .apexcharts-xaxis text, .apexcharts-yaxis text {
  fill: #94a3b8;
}

.apexcharts-yaxis-annotation-label {
  color: #94a3b8 !important;
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.apexcharts-bar-series.apexcharts-plot-series
  .apexcharts-datalabels
  .apexcharts-data-labels
  text, .apexcharts-series .apexcharts-datalabels .apexcharts-data-labels text {
  fill: #94a3b8;
  font-size: 11px;
}

.apexcharts-point-annotations text, .apexcharts-xaxis-annotations text, .apexcharts-yaxis-annotations text {
  fill: #fff;
}

.britechart,
.tick text {
  font-size: 0.75rem;
}

.extended-x-line, .extended-y-line, .horizontal-grid-line, .vertical-grid-line {
  stroke: #94a3b8;
}

.bar-chart .percentage-label, .donut-text, .legend-entry-name, .legend-entry-value, .tick text {
  fill: #94a3b8;
}

.apex-charts {
  min-height: 10px !important;
}

.apexcharts-tooltip.apexcharts-theme-light {
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.dark .apexcharts-tooltip.apexcharts-theme-light {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.dark .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}

.dark .apexcharts-tooltip-series-group.apexcharts-active, .dark .apexcharts-tooltip-series-group:last-child {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}

.dash-apex-chart .apexcharts-toolbar {
  display: none !important;
}

.apexcharts-tooltip {
  white-space: normal;
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark .apexcharts-tooltip {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.apexcharts-xaxistooltip {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.dark .apexcharts-xaxistooltip {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}

.apexcharts-xaxistooltip-top:before, .apexcharts-xaxistooltip-top:after {
  --tw-border-opacity: 1;
  border-top-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.dark .apexcharts-xaxistooltip-top:before, .dark .apexcharts-xaxistooltip-top:after {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.apexcharts-xaxistooltip-bottom:before, .apexcharts-xaxistooltip-bottom:after {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.dark .apexcharts-xaxistooltip-bottom:before, .dark .apexcharts-xaxistooltip-bottom:after {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.apexcharts-xaxistooltip:before, .apexcharts-xaxistooltip:after {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.dark .apexcharts-xaxistooltip:before, .dark .apexcharts-xaxistooltip:after {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.apexcharts-title-text, .apexcharts-datalabel-label {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.dark .apexcharts-title-text, .dark .apexcharts-datalabel-label {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.apexcharts-datalabel-value {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.dark .apexcharts-datalabel-value {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.apexcharts-legend-marker {
  margin-right: 6px;
  height: 5px !important;
  vertical-align: middle;
}

.apexcharts-yaxis > line,
.apexcharts-yaxis > line{
  stroke-width: 0;
}

.apexcharts-text.apexcharts-xaxis-label,
.apexcharts-xaxistooltip.apexcharts-xaxistooltip-bottom.apexcharts-theme-light,
.apexcharts-xaxis .apexcharts-yaxis-texts-g .apexcharts-text.apexcharts-yaxis-label,
.apexcharts-xaxis .apexcharts-yaxis-texts-g .apexcharts-text.apexcharts-xaxis-label,
.apexcharts-xaxis .apexcharts-xaxis-texts-g .apexcharts-text.apexcharts-yaxis-label,
.apexcharts-xaxis .apexcharts-xaxis-texts-g .apexcharts-text.apexcharts-xaxis-label{
    font-weight: 400 !important;
    fill: #94a3b8;
  }

.apexcharts-text.apexcharts-yaxis-label,
.apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-text.apexcharts-yaxis-label,
.apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-text.apexcharts-xaxis-label,
.apexcharts-yaxis .apexcharts-xaxis-texts-g .apexcharts-text.apexcharts-yaxis-label,
.apexcharts-yaxis .apexcharts-xaxis-texts-g .apexcharts-text.apexcharts-xaxis-label{
    font-weight: 400 !important;
    fill: #94a3b8;
  }

.apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-value, .apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-label {
  fill: #94a3b8;
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

/* Sweet Alert */

.swal2-popup{
  background: #fff;
}

.dark .swal2-container.swal2-center>.swal2-popup{
 background: #1e293b;
}

.swal2-popup .swal2-title {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.dark .swal2-popup .swal2-title {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.swal2-popup .swal2-title{
  font-size: 20px;
  font-weight: 500;
}

.dark .swal2-html-container{
  color: #64748b;
}

.swal2-popup .swal2-content{
  color: #64748b;
  font-size: 15px;
}

.swal2-popup.swal2-toast{
  background-color: #fff;
  -webkit-box-shadow: 0 0 0.625em #e2e8f0;
          box-shadow: 0 0 0.625em #e2e8f0;
}

.swal2-popup .swal2-styled{
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  border: none;
  padding: .375rem .75rem;
  font-size: .8125rem;
  border-radius: .25rem;
}

.swal2-popup .swal2-styled:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.swal2-popup .swal2-styled.swal2-confirm{
    font-size: 14px;
    background-color: #22c55e;
}

.swal2-popup .swal2-styled.swal2-confirm:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.swal2-popup .swal2-styled.swal2-deny {
  background-color: #6366f1;
  font-size: 14px;
}

.swal2-popup .swal2-styled.swal2-deny:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.swal2-popup .swal2-styled.swal2-cancel{
  font-size: 14px;
  background-color: #ef4444;
}

.swal2-popup .swal2-styled.swal2-cancel:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.dark swal2-popup swal2-toast{
  background: #fff;
}

.swal2-close:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.swal2-footer{
  border-top: 1px solid #e2e8f0;
}

.dark .swal2-footer{
  border-top-color: #334155;
  color: #64748b;
}

.swal2-actions .btn-success,
.swal2-actions .btn-danger{
  border: none;
}

.swal2-actions .btn-success:focus,
.swal2-actions .btn-danger:focus{
  -webkit-box-shadow: none;
          box-shadow: none;
}

.swal2-icon{
  width: 3em;
  height: 3em;
  margin: 1em auto 1em;
}

.swal2-icon.swal2-error [class^=swal2-x-mark-line] {
  top: 22px;
  width: 30px;
}

.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {
  left: 9px;
}

.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {
  right: 9px;
}

.swal2-icon .swal2-icon-content {
  font-size: 40px;
}

.swal2-icon.swal2-success [class^=swal2-success-circular-line] {
  width: 40px;
  height: 70px;
}

.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {
  top: -23px;
  left: -13px;
}

.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {
  top: -12px;
  left: 36px;
}

.swal2-icon.swal2-success .swal2-success-fix {
  top: 0px;
  left: 12px;
  width: 6px;
  height: 60px;
}

.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {
  top: 28px;
  left: 6px;
  width: 18px;
}

.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {
  top: 23px;
  right: 4px;
  width: 30px;
}

@-webkit-keyframes swal2-animate-success-line-tip {
  0% {
    top: 1.1875em;
    left: 0.0625em;
    width: 0;
  }
  54% {
    top: 24px;
    left: 4px;
    width: 0
  }
  70% {
    top: 27px;
    left: 0px;
    width: 22px
  }
  84% {
    top: 30px;
    left: 8px;
    width: 16px
  }
  100% {
    top: 28px;
    left: 6px;
    width: 18px
  }
}

@keyframes swal2-animate-success-line-tip {
  0% {
    top: 1.1875em;
    left: 0.0625em;
    width: 0;
  }
  54% {
    top: 24px;
    left: 4px;
    width: 0
  }
  70% {
    top: 27px;
    left: 0px;
    width: 22px
  }
  84% {
    top: 30px;
    left: 8px;
    width: 16px
  }
  100% {
    top: 28px;
    left: 6px;
    width: 18px
  }
}

@-webkit-keyframes swal2-animate-success-line-long {
  0% {
    top: 26px;
    right: 10px;
    width: 0;
  }
  65% {
    top: 26px;
    right: 10px;
    width: 0;
  }
  84% {
    top: 22px;
    right: 0;
    width: 34px;
  }
  100% {
    top: 23px;
    right: 4px;
    width: 30px;
  }
}

@keyframes swal2-animate-success-line-long {
  0% {
    top: 3.375em;
    right: 2.875em;
    width: 0;
  }
  65% {
    top: 40px;
    right: 30px;
    width: 0;
  }
  84% {
    top: 22px;
    right: 0;
    width: 34px;
  }
  100% {
    top: 23px;
    right: 4px;
    width: 30px;
  }
}

/*  ************************************ */

.dropdown-menu-item, .nav-link {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.modal.dropdown-menu-item .modal-right, .modal.nav-link .modal-right {
  --tw-translate-x: 0px !important;
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.dropdown-menu-item:hover, .nav-link:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.dark .dropdown-menu-item, .dark .nav-link {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.dark .dropdown-menu-item:hover, .dark .nav-link:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

@media (min-width: 1024px) {

  .dropdown-menu-item, .nav-link {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Button */

.btn-primary {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  --tw-shadow: 0 5px 13px rgb(60 72 88 / 0.20);
  --tw-shadow-colored: 0 5px 13px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.btn-primary:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.btn-primary:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));
  --tw-ring-opacity: 0.75;
}

/*  Card */

.card {
  position: relative;
  width: 100%;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-shadow: 0 0 3px rgb(60 72 88 / 0.15);
  --tw-shadow-colored: 0 0 3px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark .card {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.card-header {
  border-bottom-width: 1px;
  border-style: dashed;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  padding: 1rem;
}

.dark .card-header {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.card-title {
  font-weight: 500;
}

.card-body {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
}

/* ************************************ */

/*  ************************************ */

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}

[role="tab"].active{
    color: #2563eb !important;
    border-color: #2563eb !important; 
}

[role="tab"].active:hover{
  color: #2563eb !important;
  border-color: #2563eb !important; 
}

[role="tab-pill"].active{
  color: #475569 !important;
  border-color: #cbd5e1 !important; 
}

.dark [role="tab-pill"].active{
  color: #cbd5e1 !important;
  border-color: #334155 !important; 
}

[role="tab-pill"].active:hover{
  color: #475569 !important;
  border-color: #cbd5e1 !important; 
}

.dark [role="tab-pill"].active:hover{
  color: #e2e8f0 !important;
  border-color: #475569 !important; 
}

.custom-label input:checked + i {
  display: block !important;
}

.custom-switch {
  -webkit-transition: .4s;
  transition: .4s;
}

.custom-switch::before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 17px;
  top: 1px;
  -webkit-transition: .4s;
  transition: .4s;
  background: #94a3b8;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.15);
          box-shadow: 0 0 1px rgba(0,0,0,0.15);
}

input:checked + .custom-switch {
  background: #6366f1 !important;
}

input:checked + .custom-switch.switch-green {
  background: #22c55e !important;
}

input:checked + .custom-switch:before {
  -webkit-transform: translateX(-16px);
          transform: translateX(-16px);
  background: #fff;
}

/* Custom */

/* Plugins  */

.before\:absolute::before {
  content: var(--tw-content) !important;
  position: absolute !important;
}

.before\:right-\[50px\]::before {
  content: var(--tw-content) !important;
  right: 50px !important;
}

.before\:h-2::before {
  content: var(--tw-content) !important;
  height: 0.5rem !important;
}

.before\:w-10::before {
  content: var(--tw-content) !important;
  width: 2.5rem !important;
}

.before\:rounded-t-\[8px\]::before {
  content: var(--tw-content) !important;
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}

.before\:rounded-tr-\[8px\]::before {
  content: var(--tw-content) !important;
  border-top-right-radius: 8px !important;
}

.before\:bg-primary-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity)) !important;
}

.before\:bg-pink-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(219 39 119 / var(--tw-bg-opacity)) !important;
}

.before\:bg-green-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity)) !important;
}

.before\:bg-cyan-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(8 145 178 / var(--tw-bg-opacity)) !important;
}

.before\:bg-yellow-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity)) !important;
}

.before\:bg-orange-600::before {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity)) !important;
}

.before\:content-\[\'\'\]::before {
  --tw-content: '' !important;
  content: var(--tw-content) !important;
}

.after\:absolute::after {
  content: var(--tw-content) !important;
  position: absolute !important;
}

.after\:right-0::after {
  content: var(--tw-content) !important;
  right: 0px !important;
}

.after\:top-\[50px\]::after {
  content: var(--tw-content) !important;
  top: 50px !important;
}

.after\:h-10::after {
  content: var(--tw-content) !important;
  height: 2.5rem !important;
}

.after\:w-2::after {
  content: var(--tw-content) !important;
  width: 0.5rem !important;
}

.after\:rounded-br-\[8px\]::after {
  content: var(--tw-content) !important;
  border-bottom-right-radius: 8px !important;
}

.after\:rounded-tr-\[8px\]::after {
  content: var(--tw-content) !important;
  border-top-right-radius: 8px !important;
}

.after\:bg-primary-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity)) !important;
}

.after\:bg-pink-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(219 39 119 / var(--tw-bg-opacity)) !important;
}

.after\:bg-green-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity)) !important;
}

.after\:bg-cyan-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(8 145 178 / var(--tw-bg-opacity)) !important;
}

.after\:bg-yellow-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity)) !important;
}

.after\:bg-orange-600::after {
  content: var(--tw-content) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity)) !important;
}

.after\:content-\[\'\'\]::after {
  --tw-content: '' !important;
  content: var(--tw-content) !important;
}

.odd\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
}

.even\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity)) !important;
}

.checked\:border-primary-500:checked {
  --tw-border-opacity: 1 !important;
  border-color: rgb(99 102 241 / var(--tw-border-opacity)) !important;
}

.hover\:z-10:hover {
  z-index: 10 !important;
}

.hover\:border-gray-300:hover {
  --tw-border-opacity: 1 !important;
  border-color: rgb(209 213 219 / var(--tw-border-opacity)) !important;
}

.hover\:bg-blue-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-gray-100:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-gray-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-400:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-slate-50:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-slate-100:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-slate-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-red-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-primary-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-slate-700:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-primary-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-white:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-gray-50:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-red-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-green-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-yellow-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-gray-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-800:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-gray-900:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-green-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-yellow-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-purple-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-green-800:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 101 52 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-red-800:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-purple-800:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-\[\#3b5998\]\/90:hover {
  background-color: rgb(59 89 152 / 0.9) !important;
}

.hover\:bg-\[\#1da1f2\]\/90:hover {
  background-color: rgb(29 161 242 / 0.9) !important;
}

.hover\:bg-\[\#24292F\]\/90:hover {
  background-color: rgb(36 41 47 / 0.9) !important;
}

.hover\:bg-\[\#4285F4\]\/90:hover {
  background-color: rgb(66 133 244 / 0.9) !important;
}

.hover\:bg-\[\#050708\]\/90:hover {
  background-color: rgb(5 7 8 / 0.9) !important;
}

.hover\:bg-slate-900:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-green-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-red-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-purple-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-blue-100:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity)) !important;
}

.hover\:bg-opacity-50:hover {
  --tw-bg-opacity: 0.5 !important;
}

.hover\:bg-gradient-to-br:hover {
  background-image: -webkit-gradient(linear, left top, right bottom, from(var(--tw-gradient-stops))) !important;
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important;
}

.hover\:bg-gradient-to-bl:hover {
  background-image: -webkit-gradient(linear, right top, left bottom, from(var(--tw-gradient-stops))) !important;
  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)) !important;
}

.hover\:bg-gradient-to-l:hover {
  background-image: -webkit-gradient(linear, right top, left top, from(var(--tw-gradient-stops))) !important;
  background-image: linear-gradient(to left, var(--tw-gradient-stops)) !important;
}

.hover\:from-teal-200:hover {
  --tw-gradient-from: #99f6e4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(153 246 228 / 0)) !important;
}

.hover\:to-lime-200:hover {
  --tw-gradient-to: #d9f99d !important;
}

.hover\:text-blue-700:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(29 78 216 / var(--tw-text-opacity)) !important;
}

.hover\:text-black:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(22 28 45 / var(--tw-text-opacity)) !important;
}

.hover\:text-gray-600:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(75 85 99 / var(--tw-text-opacity)) !important;
}

.hover\:text-gray-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(107 114 128 / var(--tw-text-opacity)) !important;
}

.hover\:text-gray-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}

.hover\:text-slate-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139 / var(--tw-text-opacity)) !important;
}

.hover\:text-blue-600:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(37 99 235 / var(--tw-text-opacity)) !important;
}

.hover\:text-red-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(239 68 68 / var(--tw-text-opacity)) !important;
}

.hover\:text-sky-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(14 165 233 / var(--tw-text-opacity)) !important;
}

.hover\:text-orange-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(249 115 22 / var(--tw-text-opacity)) !important;
}

.hover\:text-white:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.hover\:text-blue-800:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(30 64 175 / var(--tw-text-opacity)) !important;
}

.hover\:text-red-800:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(153 27 27 / var(--tw-text-opacity)) !important;
}

.hover\:text-green-800:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(22 101 52 / var(--tw-text-opacity)) !important;
}

.hover\:text-yellow-800:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(133 77 14 / var(--tw-text-opacity)) !important;
}

.hover\:text-gray-800:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(31 41 55 / var(--tw-text-opacity)) !important;
}

.hover\:text-gray-700:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(55 65 81 / var(--tw-text-opacity)) !important;
}

.hover\:underline:hover {
  -webkit-text-decoration-line: underline !important;
          text-decoration-line: underline !important;
}

.focus\:z-10:focus {
  z-index: 10 !important;
}

.focus\:border-gray-700:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(55 65 81 / var(--tw-border-opacity)) !important;
}

.focus\:border-blue-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(59 130 246 / var(--tw-border-opacity)) !important;
}

.focus\:border-blue-600:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(37 99 235 / var(--tw-border-opacity)) !important;
}

.focus\:border-green-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(34 197 94 / var(--tw-border-opacity)) !important;
}

.focus\:border-red-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity)) !important;
}

.focus\:border-transparent:focus {
  border-color: transparent !important;
}

.focus\:border-primary-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(99 102 241 / var(--tw-border-opacity)) !important;
}

.focus\:border-indigo-300:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(165 180 252 / var(--tw-border-opacity)) !important;
}

.focus\:border-black:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(22 28 45 / var(--tw-border-opacity)) !important;
}

.focus\:border-gray-300:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(209 213 219 / var(--tw-border-opacity)) !important;
}

.focus\:border-gray-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(107 114 128 / var(--tw-border-opacity)) !important;
}

.focus\:bg-blue-600:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.focus\:bg-gray-300:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity)) !important;
}

.focus\:bg-white:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
}

.focus\:bg-gray-200:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity)) !important;
}

.focus\:bg-opacity-50:focus {
  --tw-bg-opacity: 0.5 !important;
}

.focus\:bg-none:focus {
  background-image: none !important;
}

.focus\:text-black:focus {
  --tw-text-opacity: 1 !important;
  color: rgb(22 28 45 / var(--tw-text-opacity)) !important;
}

.focus\:text-gray-500:focus {
  --tw-text-opacity: 1 !important;
  color: rgb(107 114 128 / var(--tw-text-opacity)) !important;
}

.focus\:text-blue-700:focus {
  --tw-text-opacity: 1 !important;
  color: rgb(29 78 216 / var(--tw-text-opacity)) !important;
}

.focus\:text-gray-900:focus {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}

.focus\:underline:focus {
  -webkit-text-decoration-line: underline !important;
          text-decoration-line: underline !important;
}

.focus\:placeholder-gray-400:focus::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.focus\:placeholder-gray-400:focus::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.focus\:placeholder-gray-400:focus:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.focus\:placeholder-gray-400:focus::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.focus\:placeholder-gray-400:focus::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.focus\:shadow-none:focus {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.focus\:outline-hidden:focus {
  outline-style: hidden !important;
}

.focus\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\:ring-gray-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-gray-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-indigo-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(67 56 202 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-blue-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-blue-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(29 78 216 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-slate-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(226 232 240 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-green-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-red-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-transparent:focus {
  --tw-ring-color: transparent !important;
}

.focus\:ring-primary-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-blue-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-red-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-green-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(74 222 128 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-yellow-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(250 204 21 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-gray-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-blue-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-gray-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-green-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(134 239 172 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-red-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(252 165 165 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-yellow-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(253 224 71 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-purple-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(216 180 254 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-cyan-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-teal-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(94 234 212 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-lime-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-pink-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(249 168 212 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-green-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(187 247 208 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-purple-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(233 213 255 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-pink-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(251 207 232 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-lime-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-red-100:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(254 226 226 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-cyan-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-\[\#3b5998\]\/50:focus {
  --tw-ring-color: rgb(59 89 152 / 0.5) !important;
}

.focus\:ring-\[\#1da1f2\]\/50:focus {
  --tw-ring-color: rgb(29 161 242 / 0.5) !important;
}

.focus\:ring-\[\#24292F\]\/50:focus {
  --tw-ring-color: rgb(36 41 47 / 0.5) !important;
}

.focus\:ring-\[\#4285F4\]\/50:focus {
  --tw-ring-color: rgb(66 133 244 / 0.5) !important;
}

.focus\:ring-\[\#050708\]\/50:focus {
  --tw-ring-color: rgb(5 7 8 / 0.5) !important;
}

.focus\:ring-gray-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-indigo-200:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-black:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(22 28 45 / var(--tw-ring-opacity)) !important;
}

.focus\:ring-opacity-50:focus {
  --tw-ring-opacity: 0.5 !important;
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px !important;
}

.focus\:ring-offset-0:focus {
  --tw-ring-offset-width: 0px !important;
}

.focus-visible\:outline-none:focus-visible {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.active\:bg-primary-500:active {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity)) !important;
}

.active\:text-white:active {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.group:hover .group-hover\:block {
  display: block !important;
}

.group:hover .group-hover\:bg-opacity-0 {
  --tw-bg-opacity: 0 !important;
}

.group:hover .group-hover\:from-purple-600 {
  --tw-gradient-from: #9333ea !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(147 51 234 / 0)) !important;
}

.group:hover .group-hover\:from-cyan-500 {
  --tw-gradient-from: #06b6d4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0)) !important;
}

.group:hover .group-hover\:from-green-400 {
  --tw-gradient-from: #4ade80 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(74 222 128 / 0)) !important;
}

.group:hover .group-hover\:from-purple-500 {
  --tw-gradient-from: #a855f7 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 85 247 / 0)) !important;
}

.group:hover .group-hover\:from-pink-500 {
  --tw-gradient-from: #ec4899 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 72 153 / 0)) !important;
}

.group:hover .group-hover\:from-teal-300 {
  --tw-gradient-from: #5eead4 !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(94 234 212 / 0)) !important;
}

.group:hover .group-hover\:from-red-200 {
  --tw-gradient-from: #fecaca !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 202 202 / 0)) !important;
}

.group:hover .group-hover\:via-red-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fca5a5, var(--tw-gradient-to, rgb(252 165 165 / 0)) !important;
}

.group:hover .group-hover\:to-blue-500 {
  --tw-gradient-to: #3b82f6 !important;
}

.group:hover .group-hover\:to-blue-600 {
  --tw-gradient-to: #2563eb !important;
}

.group:hover .group-hover\:to-pink-500 {
  --tw-gradient-to: #ec4899 !important;
}

.group:hover .group-hover\:to-orange-400 {
  --tw-gradient-to: #fb923c !important;
}

.group:hover .group-hover\:to-lime-300 {
  --tw-gradient-to: #bef264 !important;
}

.group:hover .group-hover\:to-yellow-200 {
  --tw-gradient-to: #fef08a !important;
}

.group:hover .group-hover\:text-blue-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(96 165 250 / var(--tw-text-opacity)) !important;
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:translate-y-0 {
  --tw-translate-y: 0px !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:-ms-input-placeholder ~ .peer-placeholder-shown\:translate-y-0 {
  --tw-translate-y: 0px !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:placeholder-shown ~ .peer-placeholder-shown\:translate-y-0 {
  --tw-translate-y: 0px !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:-ms-input-placeholder ~ .peer-placeholder-shown\:scale-100 {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:focus ~ .peer-focus\:left-0 {
  left: 0px !important;
}

.peer:focus ~ .peer-focus\:-translate-y-6 {
  --tw-translate-y: -1.5rem !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:focus ~ .peer-focus\:scale-75 {
  --tw-scale-x: .75 !important;
  --tw-scale-y: .75 !important;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.peer:focus ~ .peer-focus\:text-blue-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(37 99 235 / var(--tw-text-opacity)) !important;
}

.dark .dark\:block {
  display: block !important;
}

.dark .dark\:hidden {
  display: none !important;
}

.dark .dark\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity)) !important;
}

.dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity)) !important;
}

.dark .dark\:border-slate-700\/50 {
  border-color: rgb(51 65 85 / 0.5) !important;
}

.dark .dark\:border-slate-600 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(71 85 105 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-gray-800 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(31 41 55 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-slate-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(51 65 85 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-gray-700 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(55 65 81 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-slate-800 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(30 41 59 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-gray-600 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-green-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(74 222 128 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-red-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(248 113 113 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-blue-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(59 130 246 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-slate-900 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(15 23 42 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-blue-800 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(30 64 175 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-green-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(34 197 94 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-yellow-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(253 224 71 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-purple-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(192 132 252 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-slate-400 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(148 163 184 / var(--tw-border-opacity)) !important;
}

.dark .dark\:border-opacity-95 {
  --tw-border-opacity: 0.95 !important;
}

.dark .dark\:bg-gray-900 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-slate-800\/60 {
  background-color: rgb(30 41 59 / 0.6) !important;
}

.dark .dark\:bg-slate-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-slate-700 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-gray-700 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-slate-900\/20 {
  background-color: rgb(15 23 42 / 0.2) !important;
}

.dark .dark\:bg-gray-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-gray-900\/20 {
  background-color: rgb(17 24 39 / 0.2) !important;
}

.dark .dark\:bg-pink-500\/10 {
  background-color: rgb(236 72 153 / 0.1) !important;
}

.dark .dark\:bg-slate-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-green-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-red-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-green-900 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(20 83 45 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-gray-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-pink-900\/50 {
  background-color: rgb(131 24 67 / 0.5) !important;
}

.dark .dark\:bg-slate-900 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-purple-900\/50 {
  background-color: rgb(88 28 135 / 0.5) !important;
}

.dark .dark\:bg-slate-900\/95 {
  background-color: rgb(15 23 42 / 0.95) !important;
}

.dark .dark\:bg-blue-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-red-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-green-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-yellow-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-blue-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-indigo-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(199 210 254 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-purple-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(233 213 255 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-pink-200 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-blue-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-green-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-red-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-purple-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-blue-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:bg-gray-300 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity)) !important;
}


.dark .dark\:text-slate-200 {
  --tw-text-opacity: 1 !important;
  color: rgb(226 232 240 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-slate-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(209 213 219 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-200 {
  --tw-text-opacity: 1 !important;
  color: rgb(229 231 235 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-slate-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(241 245 249 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-slate-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(203 213 225 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-slate-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-blue-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(96 165 250 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-green-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(22 163 74 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(243 244 246 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-blue-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(37 99 235 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-pink-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(219 39 119 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-red-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(248 113 113 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-red-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(220 38 38 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-blue-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(59 130 246 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-green-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(34 197 94 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-red-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(239 68 68 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(75 85 99 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-slate-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(30 41 59 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-yellow-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(202 138 4 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-purple-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(147 51 234 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-blue-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(30 64 175 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-red-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(153 27 27 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-green-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(22 101 52 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-yellow-800 {
  --tw-text-opacity: 1 !important;
  color: rgb(133 77 14 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-red-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(127 29 29 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-green-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(20 83 45 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-yellow-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(113 63 18 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-indigo-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(49 46 129 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-purple-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(88 28 135 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-pink-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(131 24 67 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-yellow-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(253 224 71 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-purple-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(192 132 252 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-primary-600 {
  --tw-text-opacity: 1 !important;
  color: rgb(79 70 229 / var(--tw-text-opacity)) !important;
}

.dark .dark\:text-gray-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(107 114 128 / var(--tw-text-opacity)) !important;
}

.dark .dark\:placeholder-gray-400::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-gray-400::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-slate-400::-webkit-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-slate-400::-moz-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-slate-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-slate-400::-ms-input-placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:placeholder-slate-400::placeholder {
  --tw-placeholder-opacity: 1 !important;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity)) !important;
}

.dark .dark\:ring-slate-700\/50 {
  --tw-ring-color: rgb(51 65 85 / 0.5) !important;
}

.dark .dark\:ring-slate-800 {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(30 41 59 / var(--tw-ring-opacity)) !important;
}

.dark .odd\:dark\:bg-slate-800:nth-child(odd) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity)) !important;
}

.dark .even\:dark\:bg-slate-700:nth-child(even) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:border-gray-600:hover {
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;
}

.dark .dark\:hover\:border-gray-700:hover {
  --tw-border-opacity: 1 !important;
  border-color: rgb(55 65 81 / var(--tw-border-opacity)) !important;
}

.dark .dark\:hover\:bg-slate-800\/70:hover {
  background-color: rgb(30 41 59 / 0.7) !important;
}

.dark .dark\:hover\:bg-gray-900\/20:hover {
  background-color: rgb(17 24 39 / 0.2) !important;
}

.dark .dark\:hover\:bg-gray-700:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-gray-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-slate-700:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-gray-800:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-slate-900\/20:hover {
  background-color: rgb(15 23 42 / 0.2) !important;
}

.dark .dark\:hover\:bg-slate-900:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-slate-700\/50:hover {
  background-color: rgb(51 65 85 / 0.5) !important;
}

.dark .dark\:hover\:bg-blue-300:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-red-300:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-green-300:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(134 239 172 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-yellow-300:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-blue-900:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-blue-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-green-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-red-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-purple-600:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-blue-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-yellow-400:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-purple-500:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:bg-\[\#050708\]\/30:hover {
  background-color: rgb(5 7 8 / 0.3) !important;
}

.dark .dark\:hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:hover\:text-white:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-slate-200:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(226 232 240 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-gray-300:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(209 213 219 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-slate-100:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(241 245 249 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-slate-300:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(203 213 225 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-blue-400:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(96 165 250 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-blue-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(30 58 138 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-red-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(127 29 29 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-green-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(20 83 45 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-yellow-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(113 63 18 / var(--tw-text-opacity)) !important;
}

.dark .dark\:hover\:text-gray-900:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}

.dark .dark\:focus\:border-blue-400:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(96 165 250 / var(--tw-border-opacity)) !important;
}

.dark .dark\:focus\:border-blue-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(59 130 246 / var(--tw-border-opacity)) !important;
}

.dark .dark\:focus\:border-primary-500:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(99 102 241 / var(--tw-border-opacity)) !important;
}

.dark .dark\:focus\:bg-blue-600:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:focus\:bg-gray-700:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity)) !important;
}

.dark .dark\:focus\:text-white:focus {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.dark .dark\:focus\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.dark .dark\:focus\:ring-gray-600:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-blue-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-slate-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(30 41 59 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-blue-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-blue-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(29 78 216 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-gray-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-green-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(22 101 52 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-red-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(153 27 27 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-yellow-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(133 77 14 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-purple-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(107 33 168 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-blue-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-cyan-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-teal-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(17 94 89 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-lime-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-pink-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(157 23 77 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-teal-700:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(15 118 110 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-red-400:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-gray-800:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-red-900:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(127 29 29 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-yellow-900:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(113 63 18 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-purple-900:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(88 28 135 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-gray-500:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity)) !important;
}

.dark .dark\:focus\:ring-\[\#050708\]\/50:focus {
  --tw-ring-color: rgb(5 7 8 / 0.5) !important;
}

.dark .dark\:focus-visible\:outline-none:focus-visible {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.peer:focus ~ .dark .peer-focus\:dark\:text-blue-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(59 130 246 / var(--tw-text-opacity)) !important;
}

@media print {

  .print\:hidden {
    display: none !important;
  }

  .print\:w-1\/2 {
    width: 50% !important;
  }

  .print\:w-1\/3 {
    width: 33.333333% !important;
  }

  .print\:w-full {
    width: 100% !important;
  }

  .print\:text-right {
    text-align: right !important;
  }
}

@media (min-width: 540px) {

  .xs\:col-span-1 {
    grid-column: span 1 / span 1 !important;
  }

  .xs\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }

  .xs\:mt-0 {
    margin-top: 0px !important;
  }

  .xs\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .xs\:border-r {
    border-right-width: 1px !important;
  }
}

@media (min-width: 640px) {

  .sm\:left-0 {
    left: 0px !important;
  }

  .sm\:right-0 {
    right: 0px !important;
  }

  .sm\:order-last {
    -webkit-box-ordinal-group: 10000 !important;
        -ms-flex-order: 9999 !important;
            order: 9999 !important;
  }

  .sm\:order-1 {
    -webkit-box-ordinal-group: 2 !important;
        -ms-flex-order: 1 !important;
            order: 1 !important;
  }

  .sm\:order-3 {
    -webkit-box-ordinal-group: 4 !important;
        -ms-flex-order: 3 !important;
            order: 3 !important;
  }

  .sm\:order-2 {
    -webkit-box-ordinal-group: 3 !important;
        -ms-flex-order: 2 !important;
            order: 2 !important;
  }

  .sm\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }

  .sm\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }

  .sm\:col-span-1 {
    grid-column: span 1 / span 1 !important;
  }

  .sm\:col-span-9 {
    grid-column: span 9 / span 9 !important;
  }

  .sm\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }

  .sm\:-mx-6 {
    margin-left: -1.5rem !important;
    margin-right: -1.5rem !important;
  }

  .sm\:mb-0 {
    margin-bottom: 0px !important;
  }

  .sm\:mb-8 {
    margin-bottom: 2rem !important;
  }

  .sm\:block {
    display: block !important;
  }

  .sm\:inline-block {
    display: inline-block !important;
  }

  .sm\:flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .sm\:hidden {
    display: none !important;
  }

  .sm\:h-16 {
    height: 4rem !important;
  }

  .sm\:h-9 {
    height: 2.25rem !important;
  }

  .sm\:w-1\/2 {
    width: 50% !important;
  }

  .sm\:w-16 {
    width: 4rem !important;
  }

  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .sm\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }

  .sm\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }

  .sm\:items-center {
    -webkit-box-align: center !important;
        -ms-flex-align: center !important;
            align-items: center !important;
  }

  .sm\:rounded-lg {
    border-radius: 0.5rem !important;
  }

  .sm\:rounded {
    border-radius: 0.25rem !important;
  }

  .sm\:p-6 {
    padding: 1.5rem !important;
  }

  .sm\:px-4 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .sm\:px-6 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  .sm\:py-4 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .sm\:pb-4 {
    padding-bottom: 1rem !important;
  }

  .sm\:text-sm {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
}

@media (min-width: 768px) {

  .md\:left-0 {
    left: 0px !important;
  }

  .md\:right-0 {
    right: 0px !important;
  }

  .md\:left-\[50\%\] {
    left: 50% !important;
  }

  .md\:order-1 {
    -webkit-box-ordinal-group: 2 !important;
        -ms-flex-order: 1 !important;
            order: 1 !important;
  }

  .md\:order-2 {
    -webkit-box-ordinal-group: 3 !important;
        -ms-flex-order: 2 !important;
            order: 2 !important;
  }

  .md\:order-3 {
    -webkit-box-ordinal-group: 4 !important;
        -ms-flex-order: 3 !important;
            order: 3 !important;
  }

  .md\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }

  .md\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }

  .md\:col-span-6 {
    grid-column: span 6 / span 6 !important;
  }

  .md\:col-span-1 {
    grid-column: span 1 / span 1 !important;
  }

  .md\:col-span-2 {
    grid-column: span 2 / span 2 !important;
  }

  .md\:col-span-5 {
    grid-column: span 5 / span 5 !important;
  }

  .md\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }

  .md\:row-span-1 {
    grid-row: span 1 / span 1 !important;
  }

  .md\:float-right {
    float: right !important;
  }

  .md\:ml-5 {
    margin-left: 1.25rem !important;
  }

  .md\:mt-0 {
    margin-top: 0px !important;
  }

  .md\:mr-0 {
    margin-right: 0px !important;
  }

  .md\:ml-2 {
    margin-left: 0.5rem !important;
  }

  .md\:ml-auto {
    margin-left: auto !important;
  }

  .md\:mb-0 {
    margin-bottom: 0px !important;
  }

  .md\:mb-3 {
    margin-bottom: 0.75rem !important;
  }

  .md\:ml-0 {
    margin-left: 0px !important;
  }

  .md\:block {
    display: block !important;
  }

  .md\:inline-block {
    display: inline-block !important;
  }

  .md\:flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .md\:hidden {
    display: none !important;
  }

  .md\:h-auto {
    height: auto !important;
  }

  .md\:w-auto {
    width: auto !important;
  }

  .md\:w-44 {
    width: 11rem !important;
  }

  .md\:w-1\/3 {
    width: 33.333333% !important;
  }

  .md\:w-\[80\%\] {
    width: 80% !important;
  }

  .md\:w-1\/2 {
    width: 50% !important;
  }

  .md\:w-\[10\%\] {
    width: 10% !important;
  }

  .md\:w-\[18\%\] {
    width: 18% !important;
  }

  .md\:w-64 {
    width: 16rem !important;
  }

  .md\:w-5\/12 {
    width: 41.666667% !important;
  }

  .md\:w-48 {
    width: 12rem !important;
  }

  .md\:max-w-xl {
    max-width: 36rem !important;
  }

  .md\:max-w-4xl {
    max-width: 56rem !important;
  }

  .md\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }

  .md\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }

  .md\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr)) !important;
  }

  .md\:flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important;
  }

  .md\:flex-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
  }

  .md\:justify-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }

  .md\:gap-4 {
    gap: 1rem !important;
  }

  .md\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(1rem * var(--tw-space-x-reverse)) !important;
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))) !important;
  }

  .md\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(2rem * var(--tw-space-x-reverse)) !important;
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))) !important;
  }

  .md\:rounded-none {
    border-radius: 0px !important;
  }

  .md\:rounded-l-lg {
    border-top-left-radius: 0.5rem !important;
    border-bottom-left-radius: 0.5rem !important;
  }

  .md\:border-0 {
    border-width: 0px !important;
  }

  .md\:border-b-0 {
    border-bottom-width: 0px !important;
  }

  .md\:border-white {
    --tw-border-opacity: 1 !important;
    border-color: rgb(255 255 255 / var(--tw-border-opacity)) !important;
  }

  .md\:border-slate-300 {
    --tw-border-opacity: 1 !important;
    border-color: rgb(203 213 225 / var(--tw-border-opacity)) !important;
  }

  .md\:bg-white {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  }

  .md\:bg-transparent {
    background-color: transparent !important;
  }

  .md\:p-0 {
    padding: 0px !important;
  }

  .md\:py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .md\:text-left {
    text-align: left !important;
  }

  .md\:text-right {
    text-align: right !important;
  }

  .md\:text-sm {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }

  .md\:text-2xl {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }

  .md\:text-base {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
  }

  .md\:text-xl {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }

  .md\:font-medium {
    font-weight: 500 !important;
  }

  .md\:text-slate-700 {
    --tw-text-opacity: 1 !important;
    color: rgb(51 65 85 / var(--tw-text-opacity)) !important;
  }

  .md\:text-blue-700 {
    --tw-text-opacity: 1 !important;
    color: rgb(29 78 216 / var(--tw-text-opacity)) !important;
  }

  .md\:hover\:bg-transparent:hover {
    background-color: transparent !important;
  }

  .md\:hover\:text-blue-700:hover {
    --tw-text-opacity: 1 !important;
    color: rgb(29 78 216 / var(--tw-text-opacity)) !important;
  }

  .dark .md\:dark\:hover\:bg-transparent:hover {
    background-color: transparent !important;
  }

  .dark .md\:dark\:hover\:text-white:hover {
    --tw-text-opacity: 1 !important;
    color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
  }
}

@media (min-width: 1024px) {

  .lg\:left-0 {
    left: 0px !important;
  }

  .lg\:right-0 {
    right: 0px !important;
  }

  .lg\:order-1 {
    -webkit-box-ordinal-group: 2 !important;
        -ms-flex-order: 1 !important;
            order: 1 !important;
  }

  .lg\:order-3 {
    -webkit-box-ordinal-group: 4 !important;
        -ms-flex-order: 3 !important;
            order: 3 !important;
  }

  .lg\:order-2 {
    -webkit-box-ordinal-group: 3 !important;
        -ms-flex-order: 2 !important;
            order: 2 !important;
  }

  .lg\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }

  .lg\:col-span-6 {
    grid-column: span 6 / span 6 !important;
  }

  .lg\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }

  .lg\:col-span-8 {
    grid-column: span 8 / span 8 !important;
  }

  .lg\:col-span-9 {
    grid-column: span 9 / span 9 !important;
  }

  .lg\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }

  .lg\:col-span-1 {
    grid-column: span 1 / span 1 !important;
  }

  .lg\:col-span-2 {
    grid-column: span 2 / span 2 !important;
  }

  .lg\:col-span-5 {
    grid-column: span 5 / span 5 !important;
  }

  .lg\:col-span-7 {
    grid-column: span 7 / span 7 !important;
  }

  .lg\:row-span-1 {
    grid-row: span 1 / span 1 !important;
  }

  .lg\:mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .lg\:-mx-8 {
    margin-left: -2rem !important;
    margin-right: -2rem !important;
  }

  .lg\:ml-1 {
    margin-left: 0.25rem !important;
  }

  .lg\:mr-4 {
    margin-right: 1rem !important;
  }

  .lg\:mr-0 {
    margin-right: 0px !important;
  }

  .lg\:-mb-px {
    margin-bottom: -1px !important;
  }

  .lg\:mb-0 {
    margin-bottom: 0px !important;
  }

  .lg\:mb-10 {
    margin-bottom: 2.5rem !important;
  }

  .lg\:mt-6 {
    margin-top: 1.5rem !important;
  }

  .lg\:block {
    display: block !important;
  }

  .lg\:w-1\/4 {
    width: 25% !important;
  }

  .lg\:w-64 {
    width: 16rem !important;
  }

  .lg\:max-w-md {
    max-width: 28rem !important;
  }

  .lg\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }

  .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }

  .lg\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr)) !important;
  }

  .lg\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr)) !important;
  }

  .lg\:justify-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }

  .lg\:gap-2 {
    gap: 0.5rem !important;
  }

  .lg\:space-x-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(1.5rem * var(--tw-space-x-reverse)) !important;
    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))) !important;
  }

  .lg\:px-4 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .lg\:px-8 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }

  .lg\:py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .lg\:text-lg {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
  }

  .lg\:text-xs {
    font-size: 0.75rem !important;
    line-height: 1rem !important;
  }

  .lg\:text-sm {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
}

@media (min-width: 1280px) {

  .xl\:left-auto {
    left: auto !important;
  }

  .xl\:right-auto {
    right: auto !important;
  }

  .xl\:order-1 {
    -webkit-box-ordinal-group: 2 !important;
        -ms-flex-order: 1 !important;
            order: 1 !important;
  }

  .xl\:order-2 {
    -webkit-box-ordinal-group: 3 !important;
        -ms-flex-order: 2 !important;
            order: 2 !important;
  }

  .xl\:order-3 {
    -webkit-box-ordinal-group: 4 !important;
        -ms-flex-order: 3 !important;
            order: 3 !important;
  }

  .xl\:col-span-8 {
    grid-column: span 8 / span 8 !important;
  }

  .xl\:col-span-6 {
    grid-column: span 6 / span 6 !important;
  }

  .xl\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }

  .xl\:col-span-9 {
    grid-column: span 9 / span 9 !important;
  }

  .xl\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }

  .xl\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }

  .xl\:col-span-1 {
    grid-column: span 1 / span 1 !important;
  }

  .xl\:col-span-2 {
    grid-column: span 2 / span 2 !important;
  }

  .xl\:col-span-5 {
    grid-column: span 5 / span 5 !important;
  }

  .xl\:col-start-3 {
    grid-column-start: 3 !important;
  }

  .xl\:row-span-2 {
    grid-row: span 2 / span 2 !important;
  }

  .xl\:mb-3 {
    margin-bottom: 0.75rem !important;
  }

  .xl\:mb-12 {
    margin-bottom: 3rem !important;
  }

  .xl\:block {
    display: block !important;
  }

  .xl\:w-1\/4 {
    width: 25% !important;
  }

  .xl\:w-auto {
    width: auto !important;
  }

  .xl\:w-60 {
    width: 15rem !important;
  }

  .xl\:max-w-screen-lg {
    max-width: 1024px !important;
  }

  .xl\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }

  .xl\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .xl\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }

  .xl\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .xl\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr)) !important;
  }

  .xl\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }

  .xl\:gap-4 {
    gap: 1rem !important;
  }

  .xl\:gap-6 {
    gap: 1.5rem !important;
  }

  .xl\:gap-x-2 {
    -webkit-column-gap: 0.5rem !important;
       -moz-column-gap: 0.5rem !important;
            column-gap: 0.5rem !important;
  }

  .xl\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(2rem * var(--tw-space-x-reverse)) !important;
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))) !important;
  }

  .xl\:border-b-0 {
    border-bottom-width: 0px !important;
  }

  .xl\:border-r {
    border-right-width: 1px !important;
  }

  .xl\:p-4 {
    padding: 1rem !important;
  }

  .xl\:py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .xl\:text-2xl {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }

  .xl\:text-base {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
  }

  .xl\:text-xl {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }
}
</style>`;
  const [data,setData]=useState([]);
  const genCourse=(Data)=>{
    var x="";
    console.log(Data);
    if (Data.CourseDetails) {
      let i=1;
      Data.CourseDetails.forEach(element => {
    
        x+= `<tr style="border:2px solid black">
                             
        <th scope="row" class="px-6 my-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          ${i}
        </th>
        <td colspan=2 class="px-6 py-4">
        ${element.courseName.label}
        </td>
        <td class="px-6 py-4">
        ${element.courseName.value}
        </td>
        <td class="px-6 py-4">
        ${element.accredation.label}
        </td>
        <td class="px-6 py-4">
        ${element.intake}
        </td>
        <td class="px-6 py-4">
        ${element.Govt}
        </td>
        <td class="px-6 py-4">
        ${element.Surrender}
        </td>
        <td class="px-6 py-4">
        ${element.Management}
        </td>
        <td class="px-6 py-4">
        ${element.SWS}
        </td>
    
    </tr>
  `      
  i++;
      });
    }
   
    return x;  
        
  }
  const Value=(Data) => {

  return  `<!DOCTYPE html>
  <html lang="en" dir="ltr">
  `+css+`
  <head>
      <meta charset="utf-8" />
      <title>TNEA</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style>
      .watermark-container{
    opacity: 0.1;
    scale: 0.6;
    top: 50%;
    left: 50%;
    z-index:999 ;   
  }
      body {
        height: 100%;
      }
      body:before{
        content: ' ';
        position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
        // position: absolute;
        background:  url("${LogoDark2x}");
        background-position: center;  
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
        opacity: 0.1;
        scale: 0.6;
      }
    </style>
  </head>
  <body data-layout-mode="light">
    
  <div class="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
    <div class="card">
        <div class="card-body">
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="fluid-container flex justify-center items-center">
                  <a class="flex items-center justify-center text-center">
                    <img class="w-20 h-20 rounded inline-block mr-2" src="${LogoDark2x}" alt="Rounded avatar">
                    <div class="container">
                      <span class="self-center text-center text-xl font-semibold whitespace-nowrap">Directorate of Technical Education - Chennai</span><br>
                      <span class="self-center text-center text-xl font-semibold whitespace-nowrap">PG-MBA/MCA Admission</span>
                    </div>
                  </a>
                </div>
            </nav>
        </div><!--end card-body-->
    </div> <!--end card-->

    <div class="fluid-container my-5 w-full flex items-center text-center justify-center">
    <h2 class="bg-green-100 text-green-800 text-2xl font-bold mr-5 px-2.5 py-0.5 rounded px-5" style="border:3px solid rgb(22 101 52)">DECLARATION FORM</h2>
    </div>
    <div class="card-body">
        <div class="fluid-container flex justify-center sm:rounded">
            <table class="table-auto border-collapse bg-transparent">
                <thead >
                    <tr class="bg-green-100 text-green-800 bg-primary-500 border">
                        <th class="text-sm font-medium px-3 my-3"  style="border:1px solid rgb(22 101 52)">
                            College Code
                        </th>
                        <th class="text-sm font-medium px-3 my-3"  style="border:1px solid rgb(22 101 52)">
                        ${Data.ccode}
                        </th>                            
                    </tr>
                    <tr class="bg-green-100 text-green-800 border">
                        <th class="text-sm font-medium px-3 py-3"  style="border:1px solid rgb(22 101 52)">
                            College Name
                        </th>
                        <th class="text-sm font-medium  px-3 py-3"  style="border:1px solid rgb(22 101 52)">
                        ${Data.can}
                        </th>                            
                    </tr>
                </thead>
             </table>
        </div>                            
    </div>
    <div class="card h-full bg-transparent">
        <div class="card-header">
            <h4 class="card-title text-center">Course Details</h4>
        </div><!--end card-header-->
        <div class="card-body">
            <div class="relative sm:rounded">    
                <table class="w-full text-sm text-center ">
                    <thead class="text-xs text-gray-700 dark:text-gray-300"  style="border:2px solid black">
                        <tr>
                           
                            <th scope="col" class="p-5">
                                Sl.
                            </th>
                            <th scope="col" colspan=2 class="p-5" >
                                Course Name
                            </th>
                            <th scope="col" class="p-5">
                                Course Code
                            </th>
                            <th scope="col" class="p-5">
                                Accredation
                            </th>
                            <th scope="col" class="p-5">
                              Intake
                            </th>
                            <th scope="col" class="p-5">
                                Govt
                            </th>
                            <th scope="col" class="p-5">
                                Surrender
                            </th>
                            <th scope="col" class="p-5">
                                Management
                            </th>
                            <th scope="col" class="p-5">
                              SWS
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                    `+
                   genCourse(Data)
                    +
                      `
                    </tbody>
                </table>
            </div>                            
        </div><!--end card-body-->
        
    </div>
 </div>
    
 <div class="bottom-0 ">
 <div class="fluid-container">
   <!-- Footer Start -->
   <footer class="footer mt-4 rounded-tr-md rounded-tl-md bg-white dark:bg-slate-800 p-4 text-center font-ligth text-slate-600 dark:text-slate-400 shadow md:text-left">
   We, declare that we have thoroughly reviewed and verified all seat allocation matrix for PG-MBA/MCA Admission. We have ensured that all
   seats have been allocated appropriately and that no further changes will be made to the allocation matrix without proper
   authorization from the relevant authorities. We take full responsibility for any errors or omissions that may have occurred
   during the verification process and certify that all changes made to the matrix were necessary and within the scope of the
   project/task/assignment.

   </footer>
   <div class="fluid-container flex justify-between mt-12" style="margin-top:55px">
   <h3 class="p-5 m-5">
   Chairman's Sign
   </h3>
   <h3  class="p-5 m-5">
   Principal's Sign
   </h3>
   </div>
   
   <!-- end Footer -->
 </div>
</div>

</body>
<script>
function printCurrentPage() {
  // Add a CSS rule to remove margins when printing
  const styleone = document.createElement('style');
  styleone.innerHTML = '@media print { body { -webkit-print-color-adjust: exact; background: print; } }';
  document.head.appendChild(styleone);
  const styletwo = document.createElement('style');
  styletwo.innerHTML = '@page {size: landscape;margin: 2mm;}';
  document.head.appendChild(styletwo);
  const style = document.createElement('style');
  document.head.appendChild(style);

  // Trigger the print functionality
  window.print();
}

// Call the printCurrentPage function whenever you want to print the current page
window.onload=printCurrentPage;
</script>
</html>
  `;
  }
    

  const getCollegeInfo =() => {
    fetch(`${backendURL}/collegeData`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        Value(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCollegeInfo();
  }, []);
  useEffect(() => {
  if (data.ccode) {
    document.open();
    document.write(Value(data));
    document.close();
  }
 },[data])

  return null;
};

export default PdfDisplay;
