(function() {
  var modifyLink = function() {
    __modifyLink("iconEdit_node_modules-@docusaurus-theme-classic-lib-next-theme-IconEdit-");
    __modifyLink("iconEdit_2LL7");
  }
  var __modifyLink = function(cssClass) {
    var editIcon = document.getElementsByClassName(cssClass);

    if (editIcon[0]) {
      var editLink = editIcon[0].parentElement;
      var cleanLink = editLink
        .getAttribute("href")
        .replace("?file=/", "?file=");
      editLink.setAttribute(
        "href",
        cleanLink + "&initialpath=" + document.location.pathname
      );
    }

  };

  var pushState = window.history.pushState;
  window.history.pushState = function() {
    pushState.apply(window.history, arguments);
    setTimeout(modifyLink, 100);
  };

  window.addEventListener("popstate", () => {
    setTimeout(modifyLink, 100);
  });

  window.addEventListener("load", modifyLink);
})();
