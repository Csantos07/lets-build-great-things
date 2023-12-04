# This is a simple portfolio project

## Next Goal

- [ ] Create Dropdown
- [ ] Create animation for Dropdown

- [x] Create the animation for our toggle
- [x] Create our Nav Toggle Button (superficial)
- [x] Mobile skeleton

## Checking In

Finished animation for dropdown

Added dropdown Id to target the dropdown with JS. On button click dropdown also gets class active.

Added z-indexing:

- .header: 2;
- .dropdown: -1;
- main: 1;

Add a top of 100% to push the `.dropdown` up above the webpage until selected.

Opacity of 0 to hide the `dropdown`.
Transition to animate `top` and `opacity` change.

`.dropdown.active` becomes visible and moves down to the main section of the screen.

Added JS
`document.getElementById('dropdown').classList.toggle('active');`

Up Next:
Home Page

Get background image

- ***
  I just finished up the Dropdown.

Imported Google Fonts.
Naturalized the anchor tags.

## Currently

- Played around with animation
- We have a mobile skeleton
- We have the visuals for the toggle button
  - button still doesn't animate or do a dropdown when clicked on

## Previous Commits

- commit c888e12d7dcc0907a743be65c86b86aec1465998

  - toggle animation: next dropdown

- commit cfd069d75a2231302c6665fbc2d6622cd1b467b1

  - added front facing portion of toggle button: next lets create the animation

- commit 25d9566942c9b005a3693a540fe66d6f912467ab
  - created the sections of my mobile design: next working on menu icon
