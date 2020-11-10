(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{400:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Azure Cloud Shell"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=JRvKnMqdBcY&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=11?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How the Azure Cloud Shell uses storage"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"demystifying-storage-in-cloud-shell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#demystifying-storage-in-cloud-shell"}},[e._v("#")]),e._v(" Demystifying storage in Cloud Shell")]),e._v(" "),o("h4",{attrs:{id:"what-s-under-the-hood-of-azure-cloud-shell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-s-under-the-hood-of-azure-cloud-shell"}},[e._v("#")]),e._v(" What's under the hood of Azure Cloud Shell?")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://azure.microsoft.com/features/cloud-shell?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),o("OutboundLink")],1),e._v(" is something that I've took for granted since it launched at Build 2017. I always knew that I could use it to run "),o("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI 2.0"),o("OutboundLink")],1),e._v(' commands and didn\'t really stop to think what is "Under the hood"... until now.')]),e._v(" "),o("p",[e._v("When you first open the Cloud Shell, you will find that it requires you to create a Storage account. The reason for that Storage Account is to persist the scripts, keys, etc that you'll use over and over as you interact with your resources.")]),e._v(" "),o("p",[e._v("You can find it once you go to your Resource Group and look for "),o("code",[e._v("cloud-shell*")]),e._v(" as shown below.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/cloudshell1.png")}}),e._v(" "),o("p",[e._v("If you drill down into the Storage account, you'll land on two directories - "),o("code",[e._v(".cloudconsole")]),e._v(" and "),o("code",[e._v(".pscloudshell")]),e._v(". More on that later.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/cloudshell2.png")}}),e._v(" "),o("p",[e._v("Open the Azure Cloud Shell inside of the portal by clicking on the icon at the top (looks like "),o("code",[e._v(">_")]),e._v(")")]),e._v(" "),o("p",[e._v("Keep in mind that the Cloud Shell is based off an open-source implementation of "),o("a",{attrs:{href:"https://github.com/sourcelair/xterm.js?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xterm.js"),o("OutboundLink")],1),e._v(" that emulates the terminal in your browser. It is talking over a web socket to a full Linux BASH shell. Begin by typing:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("michael@Azure:~$ ls -l\ntotal 0\nlrwxrwxrwx 1 root root 23 Sep 10 16:27 clouddrive -> /usr/michael/clouddrive\n")])])]),o("p",[e._v("Great, we see a clouddrive that is mapped to /usr/michael/clouddrive")]),e._v(" "),o("p",[e._v("Change into that directory and list it out.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("michael@Azure:~$ cd clouddrive\nmichael@Azure:~/clouddrive$ ls -l\ntotal 0\nmichael@Azure:~/clouddrive$\n")])])]),o("p",[e._v("Nothing there? Or is there?")]),e._v(" "),o("p",[e._v("Remember the "),o("code",[e._v(".cloudconsole")]),e._v(" and "),o("code",[e._v(".pscloudshell")]),e._v(" directories from above?")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("michael@Azure:~/clouddrive$ cd .cloudconsole\nmichael@Azure:~/clouddrive/.cloudconsole$ ls\nacc_michael.img\n")])])]),o("p",[e._v("Nice! We just found a "),o("code",[e._v("acc_michael.img")]),e._v(" file. This is a 5 gig image that persist your home directory. You could have also navigated through the portal to see what was inside this directory but now you under the CLI better! For those that want an extra challenge, go to the Azure Portal and download the Image file and explore it. Feel free to post comments on what you found below.")]),e._v(" "),o("p",[e._v("So what about the other file called "),o("code",[e._v(".pscloudshell")]),e._v("?")]),e._v(" "),o("p",[e._v("We'll this is for the PowerShell scripting language in the Cloud Shell!")])])}),[],!1,null,null,null);t.default=a.exports}}]);