#CS 260 Notes
## Fall Semester 2024

### SSH Command to get into my server:
`ssh -i cs260.pem ubuntu@100.24.160.227`

### GitHub
This reading and practice was really helpful with learning the basics of GitHub and how to use it. Some of the most important things I learned were:
- Pull, **save,** commit, and push your work __often__! This is a good habit to get into. You should not work on code without doing this process several times.
- VS Code has embedded git functions! This makes things super easy
- Merges are found when you pull something that was already edited that you also made changes to locally. You will be alerted of the discrepency. Compare the differences, make changes, and re-commit/push the changes to fix a merge.

### The Internet
 - EC2 gets us the IP Address, Route 53 gets us the Domain name
 - Layers of the internet:
   - Link (Physical connections) fiber, hardware
   - Internet (Establishing connections) IP address
   - Transport (Moving Connetion information packets) TCP/UDP
   - Application (Functionallity like web browsing) HTTPS
 - Ports: restrict access of certain kinds of traffic (ex; part 443 is for HTTPS only)

### CSS
 - Display parameter inputs:
   - None (Hides the content)
   - Block (Takes up full space, all the way accross)
   - Grid (Um...its a grid)
   - Flex (Makes elements "stretchy" with the size of the window, determined by `flex-direction`)
  
#### Measurement Elements
 - em (size of an 'm' in current font/text size)
 - px (pixels)
 - vh (view height, maybe a percentage?)
 - fr (fractional units (of the display). Splits the display based on the size of each unit)
  
 - Elements can be changed based on the display state using `@media` queries:
   ```
   @media (orientation: portrait) {
     div {
       transform: rotate(270deg);
     }
   }  //This will transform all div elements when the orientation switches to portrait

   @media ((orientation: portrait) and (max-height: 500px)) {
      aside {
         display="none"
      }
   }
   ```
   - float property allows for content to stay at a specific part of the screen regardless of the size of the display window
   - You must define what flex means for all children of a flex-defined element
   - CSS Frameworks are similar to packages/libraries in other languages. Look up the bootstrap framework and use it
     - You will need to add a link to it in the head and a script element in the body
    

## JavaScript
- JavaScript is for manipulating the DOM (html)
- `console.log('string')` -> prints the string to the console
#### Linking JavaScript with HTML:
- Add a script file (example.js) same as CSS
- Using the `<script></script>` tag
- Adding script attributes to an element










