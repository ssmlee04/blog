### If you have 5 different stylesheets, how would you best integrate them into the site?

Try to see if the css stylesheets are modulized or is applicable in a global context. If possible I only use css libraries that everyone knows like bootstrap or materialize. 

### How many resources will a browser download from a given domain at a time?

IE7 allowed only two concurrent connections per host. But most browsers today allow more than that. IE8 allows 6 concurrent connections, Chrome allows 6, and Firefox allows 8.

So if your web page only has 6 images, for example, then it'd really be pointless to spread your images across multiple subdomains.

### Name 3 ways to decrease page load

- prune
- minify
- bundle

### Explain some of the pros and cons for CSS animations versus JavaScript animations.

### What does a doctype do?

DOCTYPEs are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.

### How do you serve a page with content in multiple languages?

Use lang (or xml:lang for XHTML) in tags. Also metadata and Content-Language HTTP header can be used.

### What are data- attributes good for?

### What is HTML5

HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages. 

### Describe the difference between a cookie, sessionStorage and localStorage.

- cookie has an expiration, can be set from either the server or the client
- sessionStorage is clearer when the browser closed

### Describe the difference between `<script>`, `<script async>` and `<script defer>`

defer: 

- Make par­al­lel requests to fetch the indi­vid­ual files.
- Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
- Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
- Exe­cute each script in the order they were encoun­tered in the document.

async:

- Make par­al­lel requests to fetch the files.
- Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
- Exe­cute the indi­vid­ual scripts the moment the files are downloaded.

### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

Put Stylesheets at the Top Links to discussion

While researching performance at Yahoo!, we discovered that moving stylesheets to the document HEAD makes pages appear to be loading faster. This is because putting stylesheets in the HEAD allows the page to render progressively.

Front-end engineers that care about performance want a page to load progressively; that is, we want the browser to display whatever content it has as soon as possible. This is especially important for pages with a lot of content and for users on slower Internet connections. The importance of giving users visual feedback, such as progress indicators, has been well researched and documented. In our case the HTML page is the progress indicator! When the browser loads the page progressively the header, the navigation bar, the logo at the top, etc. all serve as visual feedback for the user who is waiting for the page. This improves the overall user experience.

The problem with putting stylesheets near the bottom of the document is that it prohibits progressive rendering in many browsers, including Internet Explorer. These browsers block rendering to avoid having to redraw elements of the page if their styles change. The user is stuck viewing a blank white page.

The HTML specification clearly states that stylesheets are to be included in the HEAD of the page: "Unlike A, [LINK] may only appear in the HEAD section of a document, although it may appear any number of times." Neither of the alternatives, the blank white screen or flash of unstyled content, are worth the risk. The optimal solution is to follow the HTML specification and load your stylesheets in the document HEAD.

Put Scripts at the Bottom

The problem caused by scripts is that they block parallel downloads. The HTTP/1.1 specification suggests that browsers download no more than two components in parallel per hostname. If you serve your images from multiple hostnames, you can get more than two downloads to occur in parallel. While a script is downloading, however, the browser won't start any other downloads, even on different hostnames.

In some situations it's not easy to move scripts to the bottom. If, for example, the script uses document.write to insert part of the page's content, it can't be moved lower in the page. There might also be scoping issues. In many cases, there are ways to workaround these situations.

An alternative suggestion that often comes up is to use deferred scripts. The DEFER attribute indicates that the script does not contain document.write, and is a clue to browsers that they can continue rendering. Unfortunately, Firefox doesn't support the DEFER attribute. In Internet Explorer, the script may be deferred, but not as much as desired. If a script can be deferred, it can also be moved to the bottom of the page. That will make your web pages load faster.

[http://stackoverflow.com/a/6625843/1355175](http://stackoverflow.com/a/6625843/1355175)

