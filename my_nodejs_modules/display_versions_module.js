module.exports = function () {
  document.write("<p> <b>Using nodejs module to display versions:</b><br> ");
  document.write("We are using node " + process.versions.node);
  document.write(", Chromium " + process.versions.chrome);
  document.write(" and Electron " + process.versions.electron + ".</p>");
 }
