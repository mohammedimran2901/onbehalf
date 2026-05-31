# OnBehalf: Functional Specification

**WebX Solutions**

**July 10, 2006**

---

## Distribution List

| Name | Organisation | Requires Approval |
|------|-------------|-------------------|
| Mohammed Irfan | OnBehalf Ltd | Yes |
| Mohammed Imran | OnBehalf Ltd | Yes |
| Umran Rafi | WebX Solutions | Yes |

---

## Document History

| Version | Author | Changes | Date |
|---------|--------|---------|------|
| 0.1 | Umran Rafi | Draft started | 14 July 2006 |
| 0.2 | Umran Rafi | Changes made reflecting meeting on 6th August 2006 | 13 August 2006 |

---

## Definition of Terms

| Term | Definition |
|------|------------|
| **Matchmaker** | A matchmaker is the main user of the site. They are responsible for organising payment, listing single friends and contacting other matchmakers. |
| **Single Friend** | A single friend is a friend or relative of the matchmaker, for whom the matchmaker is trying to find a suitable marriage partner. |
| **Matchmaker Friend** | A matchmaker that has been specifically chosen as a friend of another matchmaker. This creates a trusted relationship between two matchmakers. |
| **Non-Member** | A non-member is a user on the site who may be looking for matrimonial related information or interested in becoming a member. |
| **Free-Member** | A free-member is a user who has registered themselves on the site. |
| **Paid Member** | A paid member is a user who has registered themselves on the site and also has taken some form of subscription. |
| **CMS** | Content Management System. An online application that gives you the ability to change the content of your site from any computer with internet access at any time. |
| **XSite** | WebX's in-house CMS solution. |
| **IIS** | Internet Information Services |
| **\*** | Where applicable denotes a compulsory field |
| **[]** | Text surrounded by square brackets [], denotes dynamic content that is derived from the database |

---

## Contents

1. [Overview](#10-overview)
2. [Site Plan](#20-site-plan)
3. [Website Functionality](#30-website-functionality)
4. [Administration Console](#40-administration-console)

---

## 1.0 Overview

This document is intended to act as a description of the agreed website functionality for the creation of a new website for OnBehalf. This follows meetings between OnBehalf and WebX on 9th June 2006, 1st July 2006 and 6th August 2006 where this functionality was discussed.

OnBehalf intend to provide matrimonial matchmaker services to the general public using developed internet technologies. The unique nature of OnBehalf's service provision is the inclusion of an intermediary between the matrimonially intended parties. Hence, all website functionality will be directed towards catering for the matchmaker, with the single friend contacted for approval or payment purposes only.

### 1.1 Scope

This document is intended to cover the functionality what will be included in the proposed system and not the fine detail of the technical implementation.

### 1.2 System Architecture (Original 2006)

The data on which the website relies will be held in a Microsoft SQL database located on a single web server. WebX will be responsible for the provision of all hosting services to OnBehalf. The database will be written in MS SQL2000; the web server therefore will need to have a licensed version of this software installed.

The site development will be based upon WebX's existing CMS hosted solution, XSite. All functionality discussed in this document will be an extension of the XSite solution. Site development will essentially be based around the following technologies: ASP.NET, ADO, JavaScript, MS IIS, and MS SQL server 2000.

The development of the new website will use Microsoft Visual Studio .NET as a platform. ASP.NET 2.0 will be employed to serve web pages via IIS with the 'Code-behind' language being C#.

---

## 2.0 Site Plan

### 2.1 Page Templates

The site will incorporate a mixture of dynamic e-Commerce features along with static content. Much of the static content will be managed by OnBehalf using XSite functionality provided in a back-end administration console. For these reasons, the site will be produced using standardised page templates throughout.

#### 2.1.1 Homepage

**ONBEHALF LOGO**
- Content: Image for the OnBehalf logo, doubles as a 'Home' link
- Source: Hard-coded by WebX

**GLOBAL NAVIGATION**
- Content: HTML navigation links to all the main pages
- Source: Hard-coded by WebX

**BASIC SEARCH BOX**
- Content: Single Friend search HTML controls with link to advanced search
- Source: Hard-coded by WebX

**LOGIN BOX**
- Content: Login HTML controls
- Source: Hard-coded by WebX

**MY ACCOUNT BOX**
- Content: My Account Links
- Source: Hard-coded by WebX

**ADVERTISEMENTS / PROMOTIONAL PLACEHOLDER**
- Content: Promotional image - "Join now! First 50 members get a free month's subscription!"
- Source: Hard-coded by WebX

**FEATURED ARTICLES BOX**
- Content: Dynamic featured articles links
- Source: Managed from the XSite Admin console

**SITE INTRODUCTION**
- Content: Design oriented image / flash with introductory text regarding the site
- Source: Hard-coded by WebX

**PAGE FOOTER**
- Content: HTML navigation links to other pages
- Source: Hard-coded by WebX

#### 2.1.2 Advanced Search Page

**CRUMB TRAIL**
- Content: Crumb trail displaying where the user is in the site
- Source: Dynamically updated, hardcoded where necessary

#### 2.1.3 Search Results / My Single / My Matchmaker Friends Pages

**SEARCH RESULT**
- Content: Matchmakers and the single friends that match the specified search criteria
- Source: Hardcoded by WebX, content queried from database

**PAGE NAVIGATION BAR**
- Content: HTML controls for paging the returned results
- Source: Hardcoded by WebX, content queried from database

#### 2.1.4 Matchmaker Page

Displays matchmaker profile and single friend details.

#### 2.1.5 Articles Page

**ARTICLE CONTENT**
- Content: Details of the article, including article, heading, published date, author etc.
- Source: Dynamically updated through CMS.

**ARTICLE RATING**
- Content: HTML controls for readers to rate the article
- Source: Hardcoded by WebX

### 2.2 Navigation

#### 2.2.1 Global Navigation

This type of navigation appears on every page of the site in a bar towards the top of the page:
- How it Works
- Articles
- My Account

#### 2.2.2 Local Navigation

This type of navigation appears in the sidebar of inner pages to provide the user with links that are relevant to the current page or section.

Example for "How it Works":
- How it Works
  - About OnBehalf
  - Membership Options
  - Etiquette
  - FAQs

---

## 3.0 Website Functionality

### 3.1 Global Functional Requirements

- The site will be WCAG Level A compliant.
- The site will meet XHTML 1.0 Transitional standards
- Fully usable in both Mozilla Firefox 1.5 and Internet Explorer 6
- Designed to fit within a minimum resolution of 800 x 600 pixels
- Error-handling will be employed to prevent unexpected conditions

### 3.2 Authentication

The majority of functionality within the OnBehalf website is available to registered users only.

**Login Form:**

| Name | Type | Notes |
|------|------|-------|
| Email Address* | Textbox | |
| Password* | Textbox | |
| Forgot Password | Link | Link to password recovery page |
| Keep me logged in | Checkbox | Remembers login credentials |
| Submit | Button | |

**Failed Login:**
- User notified of credential problem
- No specific field indication (security)
- Authentication failure recorded in Event Log

**Successful Login:**
- Session cookie set
- 20-minute session timeout
- Success recorded in Event Log
- Redirect to requested page or My Account

### 3.2.1 Forgot Your Password

| Name | Type | Notes |
|------|------|-------|
| Email Address* | Textbox | |
| Submit | Button | |

Password emailed to registered address.

### 3.3 Become a Member

**Membership Comparison:**

| Feature | Free | Paid |
|---------|------|------|
| Send and receive unlimited messages | | ✓ |
| Advanced searches | | ✓ |
| Full matchmaker profile details | | ✓ |
| View photos of single friends | | ✓ |
| Rate other matchmakers | | ✓ |

#### 3.3.1 Step 1: Choose Membership Type

Comparison table of membership options with link to detailed benefits page.

#### 3.3.2 Step 2: Your Details

| Name | Type | Notes |
|------|------|-------|
| Email Address* | Textbox | Valid email address |
| Password* | Textbox | |
| Confirm Password* | Textbox | |
| First Name* | Textbox | |
| Surname* | Textbox | |
| Nickname* | Textbox | Name displayed on site |
| Telephone* | Textbox | For contact purposes |
| Religion* | Dropdown | Major religions |
| Mother Language | Dropdown | All languages |
| Gender* | Dropdown | Male or female |
| Age* | Textbox | Numeric |
| Address Line 1* | Textbox | For billing |
| Address Line 2 | Textbox | |
| Town / City* | Textbox | |
| County* | Dropdown | UK counties |
| Country* | Dropdown | Defaults to UK |
| Postcode* | Textbox | |

- Email uniqueness check required
- Activation email sent upon completion

#### 3.3.3 Step 3: Your Single Friend's Details

**Personal Details:**

| Name | Type | Notes |
|------|------|-------|
| Your Relationship* | Dropdown | Relationship to single friend |
| Gender* | Dropdown | Male or female |
| Age* | Textbox | Numeric |
| First Name* | Textbox | |
| Surname* | Textbox | |
| Email Address* | Textbox | Valid email |
| Address Line 1* | Textbox | For billing |
| Address Line 2 | Textbox | |
| Town / City* | Textbox | |
| County* | Dropdown | UK counties |
| Country* | Dropdown | Defaults to UK |
| Postcode* | Textbox | |

**Personal Stats:**

| Name | Type | Notes |
|------|------|-------|
| Religion* | Dropdown | Major religions |
| Mother Language* | Dropdown | All languages |
| Sect | Dropdown | Based on religion |
| Caste | Dropdown | Based on religion |
| Marital Status* | Dropdown | |
| Occupation* | Dropdown | |
| Occupation Other | Textbox | If not listed |
| Education Level* | Dropdown | |
| Build | Dropdown | Frame build |
| Height | Dropdown | 3" increments |
| Star sign | Dropdown | Zodiac signs |
| Drinking | Dropdown | Drinking habits |
| Smoking | Dropdown | Smoking habits |
| Description of single friend | Text area | Free text |
| Description of ideal marriage partner | Text area | Free text |

**Avatar Image:**
Options for avatar selection/integration.

**Lifestyle / Attitudes (Slide Meters):**
- Looks (Unfortunate – Knockout)
- Attitude to Faith (Atheistic – Fully Practising)
- Intelligence (Dimwit – Genius)
- Career Aspirations (Content – Ambitious)
- Outlook (Traditional – Modern)
- Humour Level (Serious – Joker)
- Energy (Lazy – Full of Beans)
- Outgoing (Homely – Traveller)

**Personality Traits (Checkboxes):**
successful, creative, loyal, dependable, a home lover, rather chic, well travelled, a little dippy, organised, the life & soul of the party, a quieter type, super fun loving, terribly witty, a bit independent, a deep thinker, a confident sort, a little scruffy, eco-conscious, a good listener, a dedicated follower of fashion, outgoing, eye turner, smartly turner out, a hard worker, a countryside lover, a bit of a chatterbox, a hopeless romantic, laid back, enthusiastic about life, an open minded person, vivacious, thoughtful, heroic, an outdoors type, sporty, a family type, musical, an early bird, Intelligent, a culture vulture, workshy, a bit of a drama queen, doesn't suffer fools, headstrong, slightly clumsy, loves a debate, not very domesticated, an addictive personality

**Single Friend Photos:**
- Upload/browse functionality
- Thumbnail generation
- Delete option
- Moderation notice

#### 3.3.4 Step 4: Check Details and Read T's & C's

Summary display with Terms & Conditions acceptance checkbox.

**Payment Selection:**

| Name | Type | Notes |
|------|------|-------|
| I will pay | Radio button | |
| My single friend will pay | Radio button | |

#### 3.3.5 Step 5: Make Payment

**3.3.5.1 Matchmaker Pays**

**Apply Promotion Code:**

| Name | Type | Notes |
|------|------|-------|
| Promotion Code | Textbox | |
| Apply | Button | Validates and applies code |

Promotion validation checks:
- Valid code
- Currently active
- Not exceeded limit

**Billing Frequency:**

| Billing Cycle | Type | Cost |
|--------------|------|------|
| Monthly | Radio button | £10 |
| Quarterly | Radio button | £25 (£8.33/month) |
| Annually | Radio button | £90 (£7.50/month) |

**Payment Options:**
- Credit/Debit Card
- Cheque / Postal Order
- Wire transfer

**Credit Card Form:**

| Name | Type | Notes |
|------|------|-------|
| Card Number* | Textbox | Max 18 numbers |
| Credit Card Type* | Dropdown | |
| Security Code* | Textbox | Max 3 numbers |
| Valid From mm/yy | 2 Dropdowns | If applicable |
| Expiry Date mm/yy* | 2 Dropdowns | |
| Issue Number | Textbox | If applicable |
| Make Payment | Button | |

Features:
- Double-click prevention
- Recurring payments setup
- Transaction logging

**3.3.5.2 Single Friend Pays**

Email confirmation with payment link sent to single friend.

#### 3.3.6 Step 6: Single Friend Makes Payment

Single friend completes payment with pre-populated details.

#### 3.3.7 Step 7: Finish

Account activation confirmation.

### 3.4 Search

#### 3.4.1 Basic Search

| Name | Type | Notes |
|------|------|-------|
| Gender* | Dropdown | Male or female |
| Age | Dropdown | Predetermined brackets |
| Location | Dropdown | Organised by area/county |
| Search | Button | |
| Advanced Search | Link | |

**Search Results Format:**
```
[One-liner]
[Religion] [Relation] in [Town/City]
OnBehalf of:
    [Age] year old [Occupation] in [Town/City]
```

Example:
```
Fun loving, homely and balanced hijaabi
Muslim Auntie in Leeds
OnBehalf of:
    23 year old Doctor in Bradford
```

#### 3.4.2 Advanced Search (Paid Members Only)

**General:**
- Age, Gender, County, City, Postcode

**Personal Stats:** (All from 3.3.3.2)

**Lifestyle / Attitudes:** Slide meters with ±2 tolerance

**Personality Traits:** Checkbox selection

### 3.5 Matchmaker Page

Displays:
- Matchmaker avatar
- Religion, relation, location
- Single friends list
- Browse single friends
- View photos (friends only)
- Request friendship
- Contact matchmaker
- Matchmaker rating

### 3.5.1 Browse Single Friends

Navigation through all matchmaker's single friends.

### 3.5.2 View Photos of Single Friends

Gallery view, restricted to matchmaker friends.

### 3.5.3 Request Friendship

Request form with explanatory text.

### 3.5.4 Contact Matchmaker

| Name | Type | Notes |
|------|------|-------|
| Subject | Textbox | Prepopulated |
| Message | HTML Textarea | |

### 3.5.5 Matchmaker Rating

eBay-style feedback system:
- Positive, Neutral, Negative ratings
- One rating per matchmaker
- Cannot retract feedback

### 3.6 My Account

#### 3.6.1 My Details

View and update matchmaker details.

#### 3.6.2 My Single Friends

**Features:**
- Add New Single Friend (half price for additional friends)
- Delete Single Friend
- Single Friend Matched (success reporting)
- Manage Photos
- Billing Status
  - Upgrade Subscription
  - Cancel Subscription

#### 3.6.3 My Matchmaker Friends

**Features:**
- Matchmaker Friend Requests (accept/reject)
- Add Friends (search by nickname)
- Rate Matchmakers

#### 3.6.4 Inbox

**Message List:**
- From (nickname link)
- Subject
- Date
- Unread indicator

**View Message:**
- From, Sent, Subject, Message
- Reply button
- Delete button

**Reply Form:**
- To (read-only)
- Subject
- Message (original appended)
- Send button

### 3.7 General

#### 3.7.1 Static Pages
Hard-coded content pages.

#### 3.7.2 Printable Pages
CSS print stylesheet.

#### 3.7.3 Search Engine Optimisation (SEO)
- Clean HTML
- Semantic markup
- Accessibility compliance
- Site map
- Robots.txt
- Search-friendly URLs

#### 3.7.4 Logging

| Location | Description |
|----------|-------------|
| Matchmaker Page | Who viewed who |
| Single Friend Page | Who viewed who |
| View Photo | Photo popularity |
| User Login | Login events |
| User Logout | Logout events |
| Incorrect Login | Security logging |
| Payment Request | Transaction requests |
| Successful payment | Successful transactions |
| Unsuccessful payment | Failed transactions |

#### 3.7.5 Activate Account

Email verification process:
- Account activation link
- Status change to 'active'
- Welcome email with registration details

---

## 4.0 Administration Console

### 4.1 CMS
- XSite content management
- Page editing capabilities

### 4.2 User Management
- Different access levels
- Configurable permissions

### 4.3 Workflow
- Content publishing workflow
- Review and approval process

### 4.4 Customer Management
- View all customers
- Filter by membership type/status
- Review and authorize single friend profiles
- View subscription details
- Photo moderation

### 4.5 Subscriptions
- View subscription numbers
- Revenue tracking (estimates)

### 4.6 Inbox
- View all site emails
- Filter by type
- Bulk email to customers

### 4.7 Manage Promotions

**Add Promotion Form:**

| Name | Type | Notes |
|------|------|-------|
| Promotion Code | Textbox | Code users enter |
| Promotion Limit | Textbox | Numeric limit |
| Promotion taken Message | Text area | User message |
| Discount Type | Dropdown | Fixed or percentage |
| Discount Amount | Textbox | Numeric |
| Start Date | Date control | |
| End Date | Date control | |

### 4.8 View Logs
Filterable log viewer for all transaction logs.

### 4.9 Website Statistics
- Page statistics
- Keywords and searches
- Traffic by country

---

## Issues / Questions

- List the full detail of differences between free and paid membership. Brainstorm a different name for the paid membership (Gold/Premium Membership).
- Hammer out billing status and cancel subscription workflow.
- Finalize avatar image implementation (Weemees vs. pre-designed collection).
- Confirm cost and subscription options.
- Recurring payments management and QuickBooks integration.

---

## Modernization Notes (2024)

This specification has been modernized from its original 2006 ASP.NET 2.0 / SQL Server 2000 architecture to a modern web stack:

**Original (2006):**
- ASP.NET 2.0 with C#
- SQL Server 2000
- IIS
- XSite CMS
- VelocityPay payment gateway

**Modern (2024):**
- Next.js 14 with React 18
- TypeScript
- PostgreSQL with Prisma ORM
- NextAuth.js authentication
- Stripe payments
- Tailwind CSS + shadcn/ui
- Vercel deployment