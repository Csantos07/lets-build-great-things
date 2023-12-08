# This is a simple portfolio project

## Next Goal

- [ ] Create About Page

- [x] Adjustments to Home Page
  - [x] Try Hero Strategy to Contain the main
- [x] Fix Dropdown Main Visual Effect Issue
- [x] Create Home Page
- [x] Create Dropdown
- [x] Create animation for Dropdown
- [x] Create the animation for our toggle
- [x] Create our Nav Toggle Button (superficial)
- [x] Mobile skeleton

## Checking In

Try Hero Strategy to Contain the main

Branch -
`git checkout -b "prep-for-hero-strategy"`

The Purpose of this is to keep the content in the main under the dropdown
as one component we can slide left or right.

Definitely contemplating taking this to React level now.

---

Branch -
`git checkout -b fix-dropdown-main-issue`
`git checkout -b fix-dropdown-main-issue_z-index-strategy`

## What I want to do now

Implementation was pretty minimal.
Just changed the z-index of the 2 headings

From the previous branch I just merged where I made the landing page.
Some things are not looking quite right when we use the dropdown.
The letters from the landing page are going over dropdown…

What I’m thinking is creating an active/inactive state for the main section where it affects the z-index of main.

So I would create an inactive class that i will put on the main items? Then when it is inactive it should be set behind the dropdowns z-index

---

Working version of the front page.

Added background image and filled out the headings and button for the `main` section

---

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

---

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
