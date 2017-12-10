# Redux Challenge

![starter code](redux-example-starter.gif)

## First Task

Your first task is to implement a note taking app using Redux. You should be able to add notes and delete notes by clicking on their text.  

The React components are already built out for you and they are even connected up to the Redux Store.  On the appropriate click events, action creator functions defined in `src/actions/index.js` are called. Currently they will error out since actions need a `type` property. (Action creators are just functions which return actions. Actions are plain JS objects with a `type` key).

**You should only need to change code in two files:**
* `src/actions/index.js`  
* `src/reducer.js`

#### Notes

_Make sure your reducer function does not destructively modify state._

_Note that we can  mimic notes having unique ids when they are created by using `Date.now()`_

## Second Task

So your note taking app works as is, but you would like to organize your notes by subject...
