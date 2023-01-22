projectButtons = document.querySelectorAll(".project-buttons");
trendingAccounts = document.querySelectorAll(".trending-accounts");

projectButtons.forEach((button) => {
  function createButton(link, altName) {
    let button = document.createElement("img");
    button.setAttribute("src", link);
    button.setAttribute("alt", altName);
    return button;
  }
  button.appendChild(createButton("icons/heart-outline.svg", "favourite-icon"));
  button.appendChild(createButton("icons/comment-plus-outline.svg", "comment-icon"));
  button.appendChild(createButton("icons/source-fork.svg", "fork-icon"));
});

trendingAccounts.forEach((account) => {
  function createButton(link, altName) {
    let button = document.createElement("img");
    button.setAttribute("src", link);
    button.setAttribute("alt", altName);
    return button;
  }
  account.appendChild(
    createButton("icons/account-circle-outline.svg", "account-icon")
  );
});
