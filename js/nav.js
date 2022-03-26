"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show title, author, url to add a new story when submit is clicked */

function addNewStoryOnSubmit(e) {
  console.debug("addNewStoryOnSubmit", evt);
  hidePageComponents();
  $submitForm.show();
  $allStoriesList.show();
}
$navSubmitStory.on("click", addNewStoryOnSubmit);

/**Show fav stories list  */

function navFavoritesOnClick(evt){
  console.debug("navFavoritesOnClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}
$body.on("click", "#nav-favorites", navFavoritesOnClick);

