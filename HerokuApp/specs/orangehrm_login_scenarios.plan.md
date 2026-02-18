# OrangeHRM Login - Five Major Test Scenarios

## Application Overview

OrangeHRM is an open-source Human Resource Management System with a secure login page. The application requires users to authenticate with valid credentials before accessing various HR modules including Admin, PIM, Leave, Time, Recruitment, and more. The login page includes features for credential validation, password recovery, and session management.

## Test Scenarios

### 1. Authentication & Login Flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `tests/orangehrm_login/valid_login.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page (https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
    - expect: Login page displays with Username and Password input fields
    - expect: Login button is visible
    - expect: Page title shows 'OrangeHRM'
    - expect: Forgot password link is available
  2. Click on the Username input field
    - expect: Username field becomes active
    - expect: Cursor is positioned in the Username field
    - expect: Field is ready for input
  3. Enter the valid username 'Admin' in the Username field
    - expect: Username 'Admin' is entered into the field
    - expect: Text is visible in the Username field
  4. Click on the Password input field
    - expect: Password field becomes active
    - expect: Cursor is positioned in the Password field
  5. Enter the valid password 'admin123' in the Password field
    - expect: Password 'admin123' is entered into the field
    - expect: Password text is masked with dots/asterisks for security
  6. Verify that both Username and Password fields are correctly filled
    - expect: Login button is clickable
    - expect: No validation errors are displayed
  7. Click the Login button
    - expect: Login button is clicked successfully
    - expect: Page begins to load the dashboard
  8. Wait for successful authentication and dashboard load
    - expect: User is redirected to the Dashboard page
    - expect: URL changes to dashboard path
    - expect: Sidebar menu with modules (Admin, PIM, Leave, Time, etc.) is displayed
    - expect: User profile information is visible in the top navigation bar
    - expect: Login page is no longer visible

#### 1.2. Login failure with invalid username or password

**File:** `tests/orangehrm_login/invalid_credentials.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page is displayed with empty input fields
  2. Click on the Username input field
    - expect: Username field is active and ready for input
  3. Type an invalid username 'InvalidUser' in the Username field
    - expect: Incorrect username 'InvalidUser' is entered
  4. Click on the Password input field
    - expect: Password field is active and ready for input
  5. Enter the correct password 'admin123' in the Password field
    - expect: Valid password 'admin123' is entered
  6. Verify both fields are filled
    - expect: Login button is visible and clickable
  7. Click the Login button
    - expect: Login button is clicked
    - expect: Page processes the login request
  8. Observe the response after login attempt
    - expect: User remains on the login page
    - expect: URL does not change to dashboard
    - expect: An error message is displayed
    - expect: Error message indicates invalid credentials (e.g., 'Invalid credentials' or similar)
    - expect: Username and Password fields retain focus capability for re-entry
    - expect: No sensitive information is leaked in the error message
  9. Clear the Password field and enter an incorrect password 'wrongpassword'
    - expect: Invalid password with valid username is being tested
  10. Click the Login button again
    - expect: Login button is clicked again
  11. Verify error handling for incorrect password
    - expect: Same behavior as previous invalid login
    - expect: User remains on login page
    - expect: Error message is displayed for invalid credentials

#### 1.3. Validate required field validation and empty field handling

**File:** `tests/orangehrm_login/required_field_validation.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page is displayed
    - expect: Username and Password fields are empty
  2. Verify login page is fully loaded
    - expect: Login button is clickable
  3. Attempt to click the Login button with empty fields
    - expect: Login button is clicked without entering any credentials
  4. Observe validation behavior for completely empty form
    - expect: User remains on the login page
    - expect: No navigation occurs
    - expect: Validation error is displayed or fields are highlighted as required
    - expect: Error message indicates missing username or password
  5. Click on the Username field
    - expect: Username field is active
  6. Type 'Admin' in the Username field
    - expect: Only the username 'Admin' is entered
  7. Verify state of form
    - expect: Both Username is filled and Password is still empty
  8. Click the Login button
    - expect: Login button is clicked with only username provided
  9. Verify validation for missing password
    - expect: User remains on login page
    - expect: Error is displayed or password field is highlighted as required
  10. Click on the Password field
    - expect: Password field is active
  11. Type the password in the field
    - expect: Password 'admin123' is entered
  12. Verify form is now valid
    - expect: Both Username and Password are now filled
    - expect: No validation errors appear
  13. Click Login button
    - expect: Login is successful
    - expect: User is redirected to dashboard
  14. Clear and enter only spaces or symbols in Username field
    - expect: Username field contains only whitespace or special characters
  15. Attempt login with invalid character input
    - expect: Login button is clicked
  16. Verify system rejects invalid input formats
    - expect: Login fails or validation error appears

### 2. Password Recovery & Account Security

**Seed:** `tests/seed.spec.ts`

#### 2.1. Password recovery flow via 'Forgot your password' link

**File:** `tests/orangehrm_login/forgot_password_flow.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page is fully loaded
    - expect: 'Forgot your password?' link is visible and clickable
  2. Click on the 'Forgot your password?' link
    - expect: 'Forgot your password?' link is in focus
  3. Observe the page after clicking forgot password link
    - expect: User is redirected to a password recovery page
    - expect: URL changes to a password reset or recovery path
    - expect: Page displays a form for password recovery (e.g., requesting username or email)
    - expect: Instructions for password recovery are displayed
  4. Verify the password recovery interface
    - expect: Password recovery page shows input field(s) for identification
    - expect: Page explains the password recovery process
    - expect: Submit button is available for the recovery request
  5. Locate the identifier input field on the recovery page
    - expect: User can enter their username, email, or other identifier
  6. Click on the identifier input field
    - expect: Identifier field is active and ready for input
  7. Type an identifier (e.g., 'Admin' username or associated email)
    - expect: Username or email is entered
  8. Click the submit button for password recovery
    - expect: Submit or 'Reset Password' button is clicked
  9. Observe the response after recovery request
    - expect: System processes the request
    - expect: Success message is displayed
    - expect: User is directed to next step (e.g., check email, security questions, or set new password page)
  10. Verify password reset options are available
    - expect: Reset link is provided or new password can be set
    - expect: User can navigate back to login if desired
  11. Look for navigation option back to login page
    - expect: User can click a 'Back to Login' link or navigate back to login page
  12. Click back to login or use browser navigation to return to login
    - expect: User is redirected back to the login page

#### 2.2. Session management, timeout, and logout functionality

**File:** `tests/orangehrm_login/session_management.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page is displayed
  2. Log in with valid credentials
    - expect: Username 'Admin' and Password 'admin123' are entered
    - expect: Login button is clicked
  3. Verify successful login and active session
    - expect: User successfully logs in and is on the Dashboard
    - expect: Session is established
  4. Navigate to a specific module (e.g., Admin, PIM, Leave)
    - expect: User is on the dashboard or any page within the OrangeHRM application
  5. Click on a module link in the sidebar
    - expect: User can access the selected module without re-authentication
  6. Verify module access works within the session
    - expect: Module page loads successfully
    - expect: User remains logged in
  7. Look for profile/account menu in top right corner
    - expect: User profile menu or logout option is visible in the top navigation
  8. Click on the profile/account menu
    - expect: Profile menu is clicked
    - expect: Dropdown menu appears with logout or account options
  9. Verify logout option exists
    - expect: 'Logout' or 'Sign Out' option is visible in the dropdown
  10. Click the logout/sign out option
    - expect: Logout option is clicked
  11. Observe logout behavior
    - expect: User is logged out
    - expect: URL redirects to login page
    - expect: Login page is displayed with empty fields
    - expect: All session data is cleared
    - expect: User cannot access dashboard without re-logging in
  12. Simulate or wait for session timeout (if testing timeout, may need to configure app settings)
    - expect: User page has been idle for an extended period (simulating timeout)
  13. Attempt to navigate or interact with the application
    - expect: Systems automatically logs user out after timeout period
  14. Verify automatic logout on session timeout
    - expect: User is redirected to login page automatically
    - expect: Session timeout message may be displayed

### 3. UI/UX & Security Best Practices

**Seed:** `tests/seed.spec.ts`

#### 3.1. UI validation, error messages, and accessibility compliance

**File:** `tests/orangehrm_login/ui_validation_and_accessibility.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page loads without errors
    - expect: All UI elements are visible and properly aligned
    - expect: Company branding/logo is displayed
    - expect: OrangeHRM header is visible
  2. Verify all UI elements are properly labeled
    - expect: Username and Password labels are visible and clearly associated with their input fields
    - expect: Login button is prominently displayed and has clear visual indication it is clickable
    - expect: Forgot password link is visible
  3. Check field labels and associations
    - expect: Username field is correctly labeled 'Username'
    - expect: Password field is correctly labeled 'Password'
    - expect: Labels are positioned logically relative to input fields
  4. Test keyboard navigation (Tab through elements)
    - expect: Username field is accessible via keyboard (Tab key)
    - expect: Password field is accessible via keyboard
    - expect: Login button is accessible via keyboard
    - expect: Forgot password link is accessible via keyboard
  5. Verify tab order makes sense
    - expect: Tab order is logical: Username → Password → Login button → Forgot password link
  6. Type in the Password field and verify masking
    - expect: Password field masks the input with dots or asterisks
    - expect: Typed characters are not visible as plain text
  7. Verify demo credentials are displayed on the page
    - expect: Hint text shows 'Username: Admin' and 'Password: admin123'
    - expect: Demo credentials are provided to users
  8. Test responsiveness (if possible, use browser dev tools to check mobile view)
    - expect: Page layout is responsive
    - expect: On mobile devices, fields and buttons are appropriately sized
    - expect: On desktop, layout is properly centered and organized
  9. Attempt login with invalid credentials and check error message quality
    - expect: Error message text is clear and descriptive
    - expect: Error message indicates what went wrong (e.g., invalid username or password)
    - expect: Error is displayed near the relevant field or at the top of the form
  10. Check for any caching of sensitive information
    - expect: Form fields are not pre-filled with previous users' data
    - expect: No sensitive information is cached in browser history
  11. Verify social media icons and links
    - expect: Social media links (LinkedIn, Facebook, Twitter, YouTube) are visible
    - expect: Links are properly formatted and functional
  12. Check footer content and links
    - expect: Footer displays copyright information: '© 2005 - 2026 OrangeHRM, Inc'
    - expect: Links to OrangeHRM website are functional

#### 3.2. Security validation and malicious input handling

**File:** `tests/orangehrm_login/security_and_input_handling.spec.ts`

**Steps:**
  1. Navigate to the OrangeHRM login page
    - expect: Login page is displayed and ready for input
  2. Click on the Username field
    - expect: Username field is active
  3. Type a SQL injection payload in the Username field
    - expect: SQL injection attempt string is entered (e.g., "' OR '1'='1")
  4. Attempt login with SQL injection payload
    - expect: System does not execute the SQL injection
    - expect: Normal authentication flow is maintained
    - expect: Appropriate error message is shown
  5. Clear the Username field
    - expect: Password field is cleared
  6. Type an XSS payload in the Username field
    - expect: XSS attempt script is entered (e.g., "<script>alert('xss')</script>")
  7. Attempt login and verify XSS is not executed
    - expect: Script tag is not executed
    - expect: Text is displayed as literal characters or sanitized
    - expect: No alert box appears
  8. Paste an extremely long string into the Username field
    - expect: Very long string (e.g., 1000+ characters) is entered
  9. Verify input length limits
    - expect: Field truncates input appropriately
    - expect: No system errors occur
    - expect: Form still functions normally
  10. Type special characters in the Username field
    - expect: Special characters (!@#$%^&*) are entered in Username field
  11. Verify special character handling
    - expect: Special characters are either accepted or rejected gracefully
    - expect: No system errors or unexpected behavior occurs
  12. Click Username field and press space multiple times
    - expect: Blank spaces are entered in the Username field
  13. Attempt login with space-filled fields
    - expect: System either accepts spaces or shows validation error
    - expect: Login attempt with only spaces fails appropriately
  14. Perform multiple failed login attempts in succession
    - expect: User enters correct credentials multiple times with intentional delays
  15. Check for brute force protection measures
    - expect: System does not implement account lockout after 3-5 failed attempts (OR implements it if configured)
    - expect: Rate limiting may be in place to prevent brute force
    - expect: No account is permanently locked or degraded
  16. Verify no hardcoded sensitive information in page source
    - expect: Page is inspected for sensitive data in HTML source
    - expect: Credentials are not hardcoded or exposed in comments
