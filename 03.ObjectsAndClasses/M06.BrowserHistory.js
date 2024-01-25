function browserHistory(obj, arr) {
  let tabs = obj["Open Tabs"];
  let logs = obj["Browser Logs"];
  let recent = obj["Recently Closed"];

  arr.forEach((commandToken) => {
    let [command, ...token] = commandToken.split(" ");
    token = token.join(" ");
    if (command === "Open") {
      tabs.push(token);
      logs.push(commandToken);
    } else if (command === "Close") {
      const openTab = tabs.find((tab) => tab === token);
      const openTabIndex = tabs.findIndex((tab) => tab === token);
      if (openTab) {
        tabs.splice(openTabIndex, 1);
        recent.push(openTab);
        logs.push(commandToken);
      }
    } else if (command === "Clear") {
      tabs = [];
      recent = [];
      logs = [];
    }
  });

  console.log(obj["Browser Name"]);
  console.log(`Open Tabs: ${tabs.join(", ")}`);
  console.log(`Recently Closed: ${recent.join(", ")}`);
  console.log(`Browser Logs: ${logs.join(", ")}`);
}

// browserHistory(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google", "Clear History and Cache"]
// );

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
