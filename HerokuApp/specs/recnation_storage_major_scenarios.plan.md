# RecNation Storage - Top 2 Major Test Scenarios

## Application Overview

RecNation Storage is a comprehensive platform for finding and managing vehicle and equipment storage facilities across multiple locations. The website allows users to search for storage spaces by location, storage type, and size. Users can explore facilities through search functionality, navigate by storage type categories, or browse by geographic location. The platform includes detailed facility listings with amenities, facility images, and booking options.

## Test Scenarios

### 1. Search Storage Facilities by Criteria

**Seed:** `tests/seed.spec.ts`

#### 1.1. Search for storage facilities using location, type, and size filters

**File:** `tests/search_storage_scenarios/search_by_criteria.spec.ts`

**Steps:**
  1. Navigate to the RecNation Storage homepage (http://www.laitmatus.online/)
    - expect: Home page loads successfully
    - expect: Main heading 'Find storage for your next adventure' is visible
    - expect: Search form with three input fields is displayed
    - expect: Search fields include: 'Where' for location, 'Storage type' dropdown, and 'Storage size' dropdown
  2. Click on the location search field (Where)
    - expect: Search field becomes active
    - expect: Popular cities dropdown appears showing cities like Dallas, Houston, Austin, San Antonio, Phoenix
    - expect: 'Explore what's nearby' option is visible
  3. Type 'Dallas' in the location search field
    - expect: Text 'Dallas' is entered in the search field
    - expect: City suggestions matching 'Dallas' are displayed
    - expect: City with ZIP code (Dallas, Texas, 75201) is visible in the suggestions
  4. Click on 'Dallas, Texas, 75201' from the suggestions
    - expect: Location field shows 'Dallas, Texas, 75201'
    - expect: Storage type dropdown becomes available for selection
  5. Click on the 'Storage type' dropdown
    - expect: Dropdown expands showing storage type options
    - expect: Available storage types include: Vehicle Storage, Self Storages, Truck Parkings, Fleet Parkings, Business Space & Storage, Outdoor Storage
  6. Select 'Vehicle Storage' from the storage type dropdown
    - expect: Vehicle Storage is selected and displayed in the dropdown
    - expect: Storage size dropdown becomes enabled
  7. Click on the 'Storage size' dropdown
    - expect: Storage size dropdown expands showing available size options
    - expect: Size options are displayed based on the selected storage type
  8. Select a storage size from the dropdown (e.g., 'Standard' or 'Large')
    - expect: Selected size is displayed in the dropdown field
    - expect: Search form is now complete with all required criteria filled
  9. Click the search button (magnifying glass icon) to execute the search
    - expect: Search is submitted successfully
    - expect: Page navigates to search results page
    - expect: Results showing storage facilities matching the criteria (Dallas location, Vehicle Storage type, selected size) are displayed
    - expect: Each result shows facility name, location, and available amenities
    - expect: Facility cards include images and quick view links
  10. Click on a facility result to view detailed information
    - expect: Facility detail page loads showing complete information
    - expect: Facility name, address, and images are displayed
    - expect: Amenities offered are shown with icons (e.g., 24/7 Security Cameras, Air Compressor, Internet & Wifi)
    - expect: Option to contact or book the facility is available

#### 1.2. Validate search error handling and field validation

**File:** `tests/search_storage_scenarios/search_validation.spec.ts`

**Steps:**
  1. Navigate to the RecNation Storage homepage
    - expect: Home page loads with empty search form
  2. Attempt to click the search button without entering any criteria
    - expect: Search is either not executed or displays an appropriate error message
    - expect: Location field shows an error or validation message
    - expect: User remains on the homepage
  3. Click on the storage size dropdown without selecting a storage type first
    - expect: Dropdown does not expand
    - expect: Validation message appears stating 'Please select a storage type first'
    - expect: Size dropdown remains disabled
  4. Enter a location and select a storage type, then clear the location field
    - expect: Location field is cleared
    - expect: Previously stored data does not persist if the field is cleared
    - expect: Validation error appears indicating location is required
  5. Enter an invalid or non-existent location (e.g., random text without matching suggestions)
    - expect: No matching suggestions are displayed
    - expect: User is prevented from proceeding with search
    - expect: Error message or notification indicates the location is not found

### 2. Browse Storage Facilities by Category and Location

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse storage facilities using Storage Types navigation menu

**File:** `tests/browse_storage_scenarios/browse_by_storage_type.spec.ts`

**Steps:**
  1. Navigate to the RecNation Storage homepage
    - expect: Home page loads successfully
    - expect: Top navigation bar is visible with menu buttons
  2. Click on the 'Storage Types' button in the top navigation
    - expect: Storage Types dropdown menu expands
    - expect: Menu shows main categories: Vehicle Storages, Self Storages, Truck Parkings, Fleet Parkings, Business Space & Storages, Outdoor Storages
    - expect: Specific storage types are listed below categories (ATV Storage, Boat Storage, RV Storage, etc.)
    - expect: A blog article preview appears on the right side of the menu
  3. Click on 'RV Storage' from the Storage Types menu
    - expect: User navigates to the RV Storage page
    - expect: Page title updates to reflect RV Storage category
    - expect: Filtered list of RV storage facilities is displayed
    - expect: Each facility shows: name, location, images, and amenities
  4. Browse through the facility listings on the RV Storage page
    - expect: Multiple RV storage facilities are displayed in a grid or list format
    - expect: Each facility card shows thumbnail images (clickable for gallery)
    - expect: Facility information includes address and available amenities
    - expect: Navigation arrows appear to browse through multiple facilities
  5. Click on the 'Locations' button in the top navigation
    - expect: Locations dropdown menu expands
    - expect: Menu shows US states: Arizona, California, Florida, Kansas, Missouri, South Carolina, Tennessee, Texas
    - expect: Cities within the selected state are displayed below (e.g., Mesa, Phoenix, Tucson for Arizona)
    - expect: Blog article previews are shown
  6. Click on 'Texas' from the Locations menu
    - expect: User navigates to the Texas storage locations page
    - expect: Cities in Texas are displayed
    - expect: Storage facilities across Texas locations are shown
  7. Click on a specific city (e.g., 'Dallas') from the Texas submenu
    - expect: User navigates to storage facilities in Dallas, Texas
    - expect: Page shows relevant storage facilities in the Dallas area
    - expect: Facility listings include location details specific to Dallas

#### 2.2. Explore storage facilities through popular categories and facility showcase

**File:** `tests/browse_storage_scenarios/browse_popular_facilities.spec.ts`

**Steps:**
  1. Navigate to the RecNation Storage homepage and scroll to the 'Popular storages' section
    - expect: Popular storages section is displayed with quick-access buttons
    - expect: Quick links are visible for: ATV Storage, RV Storage, Boat Storage, Self Storages
    - expect: Each quick link shows an icon and label
  2. Click on 'ATV Storage' quick link
    - expect: User navigates to the ATV Storage category page
    - expect: Page displays all available ATV storage facilities
    - expect: Storage count is shown (e.g., '75 storages')
  3. Scroll to the 'Explore By Storage Type' section on the homepage
    - expect: Section displays 21 different storage type categories
    - expect: Storage types are grouped into Business Storage Types and Individual Storage Types
    - expect: Each storage type shows a card with: image, title, and number of available storages
    - expect: Navigation buttons (arrows) are present to scroll through categories
  4. Click on 'Commercial Storage' card in the Business Storage Types section
    - expect: User navigates to the Commercial Storage page
    - expect: Page shows '74 storages' available for commercial storage
    - expect: List of commercial storage facilities is displayed with details
  5. Scroll to the 'Explore By City' section on the homepage
    - expect: Section displays tabs for different states: Arizona, California, Florida, Kansas, Missouri, South Carolina, Tennessee, Texas
    - expect: Arizona tab is selected by default showing cities: Mesa, Tucson
    - expect: Each city shows thumbnail, name, and number of storages (e.g., 'Mesa - 1 Storage')
  6. Click on the 'California' tab in the Explore By City section
    - expect: Tab content switches to show California cities
    - expect: Cities in California are displayed with their storage counts
    - expect: City links are clickable for viewing storage facilities in that location
  7. Click on 'Mesa' city card in the Explore By City section
    - expect: User navigates to the Mesa storage facilities page
    - expect: Page shows storage options available in Mesa, Arizona
    - expect: Facility listings are displayed with full details
  8. Scroll to the 'Explore Our Facilities' section and view the map
    - expect: Interactive map is displayed showing facility locations
    - expect: Map markers indicate storage facility locations
    - expect: Map includes zoom in/zoom out buttons
    - expect: Mapbox attribution is visible
  9. Browse through the 'A selection of our most popular facilities' carousel below the map
    - expect: Carousel displays featured facilities with image galleries
    - expect: Each facility card shows: multiple images (with navigation arrows), facility name, address, and amenities
    - expect: Examples of displayed amenities: 24/7 Security Cameras, Air Compressor, Internet & Wifi, Loading Dock, Water Hose, Personal Car Allowed
    - expect: Facility names are clickable to view full details
  10. Use the carousel navigation arrows to browse through multiple featured facilities
    - expect: Previous/Next buttons navigate through the facility carousel
    - expect: Facility information updates as different facilities are selected
    - expect: Images load correctly for each facility
