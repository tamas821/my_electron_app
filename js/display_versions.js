
var displayversions = function () {
  document.write("<p> <b>Including js file (which accesses nodejs process variable) to display versions:</b><br> ");
  document.write("We are using node " + process.versions.node);
  document.write(", Chromium " + process.versions.chrome);
  document.write(" and Electron " + process.versions.electron + ".</p>");
};
