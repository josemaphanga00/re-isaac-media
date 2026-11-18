# Website Optimization Principles

This guide explains the optimization choices used on ISAAC MEDIA in simple
English. It also gives general rules that can be adapted for other websites.
The best choices depend on each site's content, visitors, and hosting.

## The main idea

Do the important work first. Show the useful content quickly, avoid sending
large files a visitor does not need yet, and keep the page steady while it
loads. Do not remove useful content or interactions just to chase a score.

## What this website does

### 1. Load the first screen first

The hero photo and main page styles are prepared in the HTML, before the
JavaScript starts. The hero image has high loading priority, and responsive
preloads help the browser find the right desktop or mobile version early.
The full stylesheet is loaded in the page head so the layout is ready before
the first view is drawn.

**Why it helps:** The browser can show the main image and properly styled
content sooner, without waiting for JavaScript to build the first screen.

**Tech terms:**
- **Preload** tells the browser to start fetching an important file early.
- **Loading priority** is the browser's hint about which files matter most.
- **JavaScript** is code that adds actions and changing content to a page.
- **First paint** is when the browser first draws something on screen.

**For another website:** Give early priority only to the actual main image and
other files needed for the first screen. Loading too many files early makes
them compete with each other. Loading the full stylesheet early can help
avoid layout shifts, but it can also delay the first draw on a slow connection.

### 2. Send images sized for the visitor's screen

The site uses WebP photos and provides smaller and larger image files. HTML
`srcset` and `sizes` let the browser choose a suitable file for the screen
width and displayed image size. The hero has separate mobile and desktop
choices. The photo markup also includes width and height so space can be
reserved before each image arrives.

**Why it helps:** A phone does not have to download a large desktop photo when
a smaller one can look clear enough. Reserving image space helps stop text and
other content from jumping around as photos load.

**Tech terms:**
- **WebP** is an image file format that can keep photos smaller while
  maintaining good quality.
- **`srcset`** is a list of image file options at different sizes.
- **`sizes`** tells the browser how wide the image will appear in the layout.
- **Responsive images** are image choices that adapt to the device or layout.
- **Layout shift** is when page content moves unexpectedly during loading.

**For another website:** Make image sizes that match the actual layout, and
check that each file named in `srcset` exists. Use accurate width and height
values. Compare image quality on real screens, especially high-resolution
phones.

### 3. Delay images people cannot see yet

Images further down the page use browser lazy loading, low loading priority,
and asynchronous image decoding. The full gallery goes further: JavaScript
uses an `IntersectionObserver` to start each photo as it approaches the
gallery's viewing area. Hero and event slides are loaded gradually, and
slideshows stop when they are off-screen or the browser tab is hidden. If a
smaller responsive image is missing, the script falls back to the main image.

**Why it helps:** Visitors do not have to wait for every portfolio image
before they can use the page. Less work is done for content they may never
scroll to.

**Tech terms:**
- **Lazy loading** means waiting to load an image until it is closer to being
  seen.
- **Asynchronous decoding** lets the browser prepare an image without holding
  up other page work.
- **`IntersectionObserver`** is a browser feature that reports when an item is
  close to or inside a visible area.
- **Fallback** is a backup choice used when the preferred file is unavailable.

**For another website:** Lazy-load below-the-fold images, not the main image at
the top. Make sure lazy content still appears when visitors scroll, and keep a
reliable fallback if the site depends on generated image variants.

### 4. Keep startup JavaScript small and well-timed

The main script is loaded with `defer`, so it does not stop the browser from
reading the page HTML. The site avoids loading Bootstrap JavaScript. Essential
controls are prepared promptly, while less urgent setup is split into idle
tasks. Scroll updates are grouped to the screen's next animation frame, and
shared click handlers are used instead of adding a separate handler to every
matching item.

**Why it helps:** The browser has less work to do before the page responds,
especially on phones.

**Tech terms:**
- **`defer`** means to download a script while reading the page and run it
  after the HTML has been read.
- **Idle time** is a short period when the browser has no more urgent work.
- **`requestIdleCallback`** asks the browser to run optional work during idle
  time. The site has a timer fallback for browsers without it.
- **`requestAnimationFrame`** schedules visual updates to line up with the
  next screen refresh.
- **Event delegation** means one parent handles clicks from many child items.

**For another website:** Keep navigation, forms, and other key controls
available promptly. Move only non-essential work later; do not make important
content or actions wait indefinitely for idle time.

### 5. Choose animations and effects that cost less

Many hover and reveal effects use `transform` and `opacity` instead of
repeatedly changing layout or large shadows. The page avoids a full-screen
photo filter, limits a decorative pulse to a few repetitions, and removes
some blur effects on small screens. Visitors who ask for reduced motion get
fewer animations; the mobile hero also skips its staged entrance animation.

**Why it helps:** Some visual effects require the browser to redraw large
areas. Reducing that work can make scrolling and interaction smoother,
particularly on phones.

**Tech terms:**
- **`transform`** moves or scales an item without changing the layout around
  it.
- **`opacity`** controls how transparent an item is.
- **Repaint** is when the browser redraws part of the page.
- **Reduced motion** is a device setting that asks websites to limit movement
  and animation.

**For another website:** Prefer simple effects and test them on lower-powered
phones. These techniques can help, but performance depends on the device and
browser. Keep animations optional and respect reduced-motion settings.

### 6. Avoid waiting for optional fonts

The site connects early to the font host, gives its font stylesheet low
priority, and uses `font-display: optional`. This lets text appear with a
fallback font instead of waiting for the custom font or forcing a late font
change.

**Why it helps:** Text can remain readable while a third-party font is slow or
unavailable, and is less likely to shift when the font arrives.

**Tech terms:**
- **`preconnect`** asks the browser to prepare a connection to another server.
- **Fallback font** is a local font used when the preferred font is not ready.
- **Third-party** means hosted by a service outside this website.

**For another website:** Use only the font weights and families you need.
Choose whether an optional custom font is worth the extra request and possible
visual difference between visits.

### 7. Make mobile behavior intentional

The site has layouts and image choices for narrow screens. It also uses the
browser's data-saving preference when choosing slideshow images, removes some
costly blur effects on phones, and reduces decorative motion in the mobile
hero.

**Why it helps:** Mobile devices often have smaller screens, slower
connections, and less processing power than desktop computers.

**For another website:** Test on a real phone and a slow connection. Mobile
should be a considered experience, not just a desktop layout squeezed smaller.

## Helpful foundations beyond speed

Some choices make the site easier to use or find, but do not by themselves
prove that it loads faster:

- Image descriptions (`alt` text), keyboard controls, visible focus, and
  reduced-motion support help more people use the site.
- Page titles, descriptions, canonical links, and structured business
  information help search engines understand the pages.
- Google Analytics measures visits, but adds a request to a third-party
  service. Make sure analytics use matches the site's privacy notice and any
  consent rules that apply.
- Static route pages and host-specific redirects keep older, readable URLs
  working across different hosting services.
- Query-string links let a visitor open a particular modal directly.

Treat these as usability, search, and reliability practices—not as measured
speed improvements.

## Reusable checklist

Before using these ideas on another website:

- Decide which content must appear in the first screen.
- Prioritize only that content; avoid preloading every image or script.
- Resize and compress images, then provide candidates for common display
  sizes.
- Add image dimensions to prevent blank space from collapsing or shifting.
- Lazy-load images below the first screen, but not the main hero image.
- Delay optional scripts and work that is not needed for the first interaction.
- Pause timers and animations when their content is not visible.
- Keep effects simple, and respect reduced-motion preferences.
- Test fallbacks, direct links, and the actual production hosting setup.
- Measure before and after on mobile and desktop. Do not assume a technique
  improved the site just because it sounds faster.

## How to measure results

Use the browser's network tools or a performance test such as Lighthouse to
compare the same page, device size, and network conditions before and after a
change. Repeat the test because results vary. Check both loading and whether
the page moves or becomes interactive late.

**Lighthouse** is a browser testing tool that reports performance and other
quality checks. A score is a useful clue, not a promise of how fast every
visitor's device will feel. This guide describes techniques found in the
current code; it does not claim that each technique has a measured speed
improvement.

## Where these choices appear

- `index.html` — early hero image and stylesheet, responsive image markup,
  image dimensions, font hints, search metadata, and deferred script.
- `css/styles.css` — responsive layouts, reserved image shapes, mobile
  effects, animation choices, and reduced-motion rules.
- `js/scripts.js` — idle setup, scroll scheduling, image loading, slideshow
  pausing, and image fallbacks.
- `about/`, `booking/`, `gallery/`, `inquiry/`, and `packages/` — lightweight
  route entry pages for direct links.
- `js/pretty-route.js` and `vercel.json` — route redirects for different
  hosting setups.
