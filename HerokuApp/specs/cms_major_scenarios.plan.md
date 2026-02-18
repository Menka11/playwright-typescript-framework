# CMS Major Scenarios Test Plan

## Application Overview

Top 10 major functional, UX, and security scenarios for the WordPress-based CMS at https://www.laitmatus.online/ (front-end) and http://www.laitmatus.online/wp-admin/ (admin/back-end). Each scenario is written to be independent, executable from a fresh state, and contains steps, expected outcomes, assumptions, success criteria, and failure conditions.

## Test Scenarios

### 1. CMS Major Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. User Registration, Login and Role-Based Access

**File:** `tests/cms/user_auth.spec.ts`

**Steps:**
  1. Assumptions: Registration is enabled; test accounts can be created; admin credentials available.
    - expect: Assumptions listed are valid for test environment.
  2. Visit front-end: https://www.laitmatus.online/ and navigate to registration or sign-up page.
    - expect: Registration page loads within 5s; fields visible (username, email, password).
  3. Register a new user with role Subscriber (use unique test email).
    - expect: Registration completes with success message or email confirmation step indicated.
  4. Attempt to log in on front-end with the new user credentials.
    - expect: Login successful and user is recognized (username shown, profile link).
  5. Attempt to access admin URL http://www.laitmatus.online/wp-admin/ with the subscriber account.
    - expect: Subscriber is denied admin-level access (redirect to front-end or “insufficient permissions” message).
  6. Log in as Admin at admin URL and verify the new user exists and has the Subscriber role.
    - expect: Admin can see the user in Users list with correct role; can change role to Editor/Author.
  7. Success criteria & failure conditions.
    - expect: Success: Registration + login succeed; roles enforce access boundaries. Failure: Registration fails, login broken, or subscriber can access admin.

#### 1.2. Create, Edit, Publish and Delete Post (Content Lifecycle)

**File:** `tests/cms/content_lifecycle.spec.ts`

**Steps:**
  1. Assumptions: Admin or Editor account ready; blank test site content is acceptable.
    - expect: Assumptions valid.
  2. Log in as Editor/Admin at admin URL.
    - expect: Login successful; Dashboard loads.
  3. Create a new post: add title, body, set category and tags, add featured image.
    - expect: Post drafts and autosave work; featured image uploads successfully.
  4. Save as Draft, then Preview on front-end to verify formatting and media rendering.
    - expect: Preview shows correct content, images render, and styles applied.
  5. Publish the post and verify it appears on front-end index or permalink URL.
    - expect: Post visible publicly; permalink returns 200 and shows content.
  6. Edit the published post (change content and SEO meta) and verify updates show on front-end.
    - expect: Changes reflected immediately or after cache clear.
  7. Delete the post and confirm it is removed from front-end and appears in Trash in admin.
    - expect: Post no longer accessible publicly (404 or removed); present in Trash.
  8. Success criteria & failure conditions.
    - expect: Success: Full create-edit-publish-delete flow works with media and permalinks. Failure: Posts not saved, images broken, permalinks 404, or delete does not remove content.

#### 1.3. Media Upload, Management and Performance

**File:** `tests/cms/media.spec.ts`

**Steps:**
  1. Assumptions: Media library writable; size limits known.
    - expect: Assumptions valid.
  2. Upload multiple media files (jpg, png, gif, mp4, large image near size limit) via Media > Add New.
    - expect: Files upload without corruption; progress shown; appropriate validation for too-large files.
  3. Insert uploaded media into a post/page; verify responsive rendering on front-end.
    - expect: Media displays properly in post; thumbnails and sizes correct on different viewports.
  4. Attempt to directly request uploaded media URL for download; validate HTTP status and cache headers.
    - expect: Media served with 200, appropriate cache headers, and correct MIME types.
  5. Delete a media item from library and verify it is removed from posts where used or shows fallback behavior.
    - expect: Deleted media either removed or gracefully degraded (broken image placeholder) and admin warns when media used.
  6. Success criteria & failure conditions.
    - expect: Success: Uploads, insertion, delivery, and deletion behave correctly; large files handled per limits. Failure: Uploads fail, corrupted files, wrong MIME, or broken front-end rendering.

#### 1.4. Page Creation, Permalinks and SEO Metadata

**File:** `tests/cms/pages_and_seo.spec.ts`

**Steps:**
  1. Assumptions: Admin access; permalinks enabled; SEO plugin optionally active.
    - expect: Assumptions valid.
  2. Create several pages (Home, About, Contact) with different templates and publish them.
    - expect: Pages publish successfully and render with selected templates.
  3. Verify permalink structure for pages and nested pages (create parent/child page).
    - expect: Permalinks follow site structure and return 200 for each page.
  4. Add SEO metadata (title, meta description) via plugin or page fields; view page source on front-end.
    - expect: SEO tags present in page head and match entered values.
  5. Confirm canonical tags and sitemap (if plugin enabled) include the new pages.
    - expect: Sitemap lists pages; canonical tags present and correct.
  6. Success criteria & failure conditions.
    - expect: Success: Pages and permalinks stable; SEO metadata present. Failure: Broken links, incorrect permalinks, or missing meta tags.

#### 1.5. Comments, Moderation and Spam Protection

**File:** `tests/cms/comments.spec.ts`

**Steps:**
  1. Assumptions: Comments enabled on posts; moderation settings set to require approval for first-time commenters.
    - expect: Assumptions valid.
  2. As a non-logged-in user, submit a comment on a published post using valid and also invalid inputs (script tags).
    - expect: Valid comment shows as awaiting moderation; invalid inputs are sanitized or rejected.
  3. Log in as Admin and approve, edit, or delete the comment.
    - expect: Admin can moderate comments; approved comments show on front-end.
  4. Test spam protection: submit multiple rapid comments or include blacklisted words and verify moderation or blocking.
    - expect: Spam filters or moderation rules trigger; repeated submissions throttled or flagged.
  5. Verify email notifications sent to post author or admin for new comments (if enabled).
    - expect: Notification emails queued/sent or a notification entry present in admin UI.
  6. Success criteria & failure conditions.
    - expect: Success: Comment flows and moderation work; sanitization prevents XSS via comments. Failure: Unsanitized scripts execute, spam not blocked, or moderation broken.

#### 1.6. User Management, Password Reset and Profiles

**File:** `tests/cms/user_management.spec.ts`

**Steps:**
  1. Assumptions: Admin account present; email system configured or password reset link visible.
    - expect: Assumptions valid.
  2. As Admin, create users with different roles (Author, Editor, Contributor) and verify capability differences.
    - expect: Each role sees and can/do only what is allowed (e.g., Contributor can’t publish).
  3. Using a test user, initiate password reset via 'Lost your password' flow and complete reset via email or token.
    - expect: Reset link/token works; user can set a new password and log in.
  4. Update user profile fields (display name, bio, avatar) and view changes on front-end author pages.
    - expect: Profile updates persist and display correctly.
  5. Attempt privilege escalation (e.g., user tries to access role-change endpoints) and verify authorization prevents it.
    - expect: Unauthorized actions blocked; logs or error messages indicate denied access.
  6. Success criteria & failure conditions.
    - expect: Success: Role separation, password reset, and profile updates function; no privilege escalation. Failure: Reset broken, profiles not saved, or role checks missing.

#### 1.7. Theme Rendering, Responsiveness and Accessibility

**File:** `tests/cms/theme_rendering.spec.ts`

**Steps:**
  1. Assumptions: Active theme installed; sample content present.
    - expect: Assumptions valid.
  2. Load front-end homepage and core content pages on multiple viewports (mobile, tablet, desktop).
    - expect: Layout adapts; no overlap/overflow; navigation usable on all sizes.
  3. Verify critical theme elements: header, footer, menus, widgets, and sidebars render correctly.
    - expect: Elements present, links functional, and widgets show expected content.
  4. Run basic accessibility checks: headings order, alt text on images, color contrast spot checks.
    - expect: Images have alt text, headings structure logical, no glaring contrast failures.
  5. Switch to a default theme (e.g., Twenty Twenty) and verify content remains accessible and pages render.
    - expect: Switching theme does not break content; menus and widgets migrate or warnings appear.
  6. Success criteria & failure conditions.
    - expect: Success: Theme renders correctly and is responsive; basic accessibility passes. Failure: Broken layouts, missing content after theme change, or accessibility regressions.

#### 1.8. Backup, Export/Import and Data Integrity

**File:** `tests/cms/backup_restore.spec.ts`

**Steps:**
  1. Assumptions: Site has export/import tools or backup plugin available; admin access present.
    - expect: Assumptions valid.
  2. Export site content (XML) and verify the exported file contains recent posts/pages/users.
    - expect: Exported file valid, downloadable, and contains expected content.
  3. Perform a backup (database + uploads) via plugin or manual method and verify backup file created.
    - expect: Backup file present, non-zero size, and timestamped.
  4. Simulate restore or import into a fresh test site and verify posts, pages, media, and users are restored.
    - expect: Imported content appears correctly; permalinks and media links resolve.
  5. Validate data integrity: check that post content, meta, and user roles match pre-export state.
    - expect: Content and metadata match within acceptable margin; no orphaned references.
  6. Success criteria & failure conditions.
    - expect: Success: Backups created and restore/import functional. Failure: Exports missing data, restore fails, or media links broken.

#### 1.9. Plugin Installation, Activation, and Compatibility Impact

**File:** `tests/cms/plugins.spec.ts`

**Steps:**
  1. Assumptions: Admin access; plugin repository or installable zip available.
    - expect: Assumptions valid.
  2. Install and activate a commonly-used plugin (e.g., SEO plugin, cache plugin) from the admin Plugins screen.
    - expect: Install/activate completes without fatal errors; plugin appears in admin.
  3. Verify plugin’s settings page is reachable and saving settings persists.
    - expect: Plugin settings load and save; expected site changes apply (e.g., meta tags).
  4. Check front-end for regressions (layout shifts, JS errors) after activation and on contrast, accessibility, and performance metrics.
    - expect: No critical front-end regressions; console errors absent or acceptable.
  5. Deactivate and uninstall the plugin; verify site returns to prior state or shows graceful degradation.
    - expect: Uninstall removes plugin assets; content created by plugin either removed or clearly indicated.
  6. Success criteria & failure conditions.
    - expect: Success: Plugin lifecycle works without breaking site. Failure: Activation causes fatal errors, DB corruption, or persistent broken state after uninstall.

#### 1.10. Security: Input Validation, XSS, SQLi and Session Management

**File:** `tests/cms/security.spec.ts`

**Steps:**
  1. Assumptions: Test environment permitted for security testing and backups exist.
    - expect: Assumptions valid and safe to run security checks.
  2. Attempt common XSS payloads in post/comment inputs and user profile fields; observe sanitization and output encoding.
    - expect: Inputs are sanitized or encoded; no script execution on rendering.
  3. Test parameterized inputs for SQLi by submitting suspicious input in form fields and search endpoints.
    - expect: No SQL errors; input treated as string; application does not expose DB errors.
  4. Verify session management: login, logout, session timeout behavior, and cookie flags (HttpOnly, Secure) for auth cookies.
    - expect: Sessions terminate on logout; cookies have appropriate flags; idle timeout enforced per config.
  5. Attempt privilege escalation by direct URL access (e.g., edit-post&id of other user) and API calls.
    - expect: Unauthorized requests are blocked and return appropriate HTTP status codes.
  6. Success criteria & failure conditions.
    - expect: Success: No XSS/SQLi possible via standard inputs; sessions secure; authorization enforced. Failure: Stored/Reflected XSS, SQL errors, weak session cookies, or authorization bypass.
