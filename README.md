React useRef Practice
This project demonstrates various use cases for the useRef hook in React to access and manipulate DOM elements.

Problems
1. Accessing and Manipulating DOM Elements
Objective: Create a form with an input field and a "Focus" button that:

Focuses the input field.

Clears the input value.

Changes the background color of the input field.

2. Sticky Header on Scroll
Objective: Build a page with a header that becomes "sticky" at the top when scrolling past it.

Use useRef to reference the header element.

Detect when the header reaches the top using either IntersectionObserver or scroll event listeners.

Apply a sticky class to the header when it should be fixed at the top.

3. Drag-and-Drop Box
Objective: Create a draggable box using useRef.

Use useRef to track the box element and its position.

Handle mouse events (onMouseDown, onMouseMove, onMouseUp) to move the box around the screen.

Ensure the box stays within the container's boundaries.

4. Character Counter
Objective: Build a text area with a live character counter.

Use useRef to reference the text area element.

Display the current character count below the text area.

Add a "Reset" button to clear the text area and reset the count.

5. Password Strength Indicator
Objective: Build a password input field with a real-time strength indicator.

Use useRef to reference the password input field.

Display the password strength (Weak, Medium, Strong) based on length, special characters, and numbers.

Dynamically change the color of the strength indicator.
