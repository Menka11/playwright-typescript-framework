# Orange HRM Login Test Plan

## Application Overview

Orange HRM is a comprehensive Human Resource Management system with a secure login mechanism. The application features a login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login that serves as the entry point to access various HR modules including Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, and Buzz. This test plan covers major scenarios for the login functionality to ensure secure authentication, proper validation, and correct navigation to the dashboard.

## Test Scenarios

### 1. Orange HRM Login Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Credentials

**File:** `tests/orangehrm_login/successful_login.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: Login page is displayed with Username and Password input fields
    - expect: Company branding logo is visible
    - expect: Login button is present and visible
  2. Enter 'Admin' in the Username field
    - expect: Username field contains 'Admin'
  3. Enter 'admin123' in the Password field
    - expect: Password field is populated (content masked for security)
  4. Click the Login button
    - expect: User is redirected to the Dashboard page
    - expect: Page URL changes to https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
    - expect: Dashboard title is displayed
    - expect: Left sidebar navigation menu with modules (Admin, PIM, Leave, Time, Recruitment, etc.) is visible
  5. Verify the dashboard displays main content sections
    - expect: Time at Work section is visible
    - expect: My Actions section is visible
    - expect: Quick Launch section is visible
    - expect: Welcome message or user profile information is displayed

#### 1.2. Login Failure with Invalid Username

**File:** `tests/orangehrm_login/invalid_username.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: Login page is displayed with all form elements visible
  2. Enter 'InvalidUser' in the Username field
    - expect: Username field contains 'InvalidUser'
  3. Enter 'admin123' in the Password field
    - expect: Password field is populated
  4. Click the Login button
    - expect: User remains on the login page
    - expect: Error message is displayed indicating invalid credentials
    - expect: Username and Password fields are cleared or retain entered values
  5. Verify that the form is ready for retry
    - expect: Username field is focused or ready for input
    - expect: No sensitive information is exposed in error messages

#### 1.3. Login Failure with Invalid Password

**File:** `tests/orangehrm_login/invalid_password.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: Login page is displayed with all necessary form elements
  2. Enter 'Admin' in the Username field
    - expect: Username field contains 'Admin'
  3. Enter 'wrongpassword' in the Password field
    - expect: Password field is populated with masked characters
  4. Click the Login button
    - expect: User remains on the login page
    - expect: Error message is displayed indicating invalid credentials
    - expect: User is not granted access to the dashboard
  5. Verify login attempt counter or rate limiting behavior
    - expect: Application handles the failed attempt gracefully
    - expect: No timeout or blocking message is shown (unless policies are in place)

#### 1.4. Login Validation with Empty Fields

**File:** `tests/orangehrm_login/empty_fields_validation.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: Login page is displayed
  2. Leave both Username and Password fields empty and click the Login button
    - expect: User remains on the login page
    - expect: Validation error messages are displayed for empty fields
    - expect: Error message for Username field indicates it is required
    - expect: Error message for Password field indicates it is required
  3. Enter 'Admin' in the Username field and leave Password empty, then click Login
    - expect: User remains on the login page
    - expect: Error message is displayed indicating Password is required
    - expect: Username field retains the entered value
  4. Leave Username empty and enter 'admin123' in the Password field, then click Login
    - expect: User remains on the login page
    - expect: Error message is displayed indicating Username is required
    - expect: Password field retains the entered value
  5. Verify validation messages are clear and user-friendly
    - expect: All validation messages are visible and readable
    - expect: Messages guide the user on what information is needed

#### 1.5. Navigation and Session Persistence After Login

**File:** `tests/orangehrm_login/session_persistence.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: Login page is displayed
  2. Enter 'Admin' in the Username field
    - expect: Username field is populated
  3. Enter 'admin123' in the Password field
    - expect: Password field is populated
  4. Click the Login button
    - expect: Dashboard page is loaded successfully
    - expect: User is logged in and navigated to https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
  5. Click on the 'Admin' module in the left sidebar
    - expect: Admin page loads successfully
    - expect: Left sidebar remains visible with all modules accessible
    - expect: User session is maintained
  6. Click on the 'PIM' module in the left sidebar
    - expect: PIM page loads successfully
    - expect: User remains logged in (no redirect to login)
  7. Navigate back to Dashboard by clicking the Dashboard link
    - expect: Dashboard page loads without requiring re-authentication
    - expect: Session is still active and maintained
  8. Refresh the page
    - expect: Dashboard page reloads with active session
    - expect: User does not get logged out or redirected to login page
