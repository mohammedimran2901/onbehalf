# OnBehalf - Modern Matrimonial Matchmaking Platform

A modernized web application for matrimonial matchmaking where friends and family help find suitable marriage partners for their single friends.

## Project Overview

This project is a complete modernization of the original 2006 OnBehalf platform, upgrading from:
- **Original (2006):** ASP.NET 2.0, SQL Server 2000, IIS, VelocityPay
- **Modern (2024):** Next.js 14, React 18, TypeScript, PostgreSQL, Prisma, Stripe

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Payments:** Stripe
- **Email:** Resend
- **Deployment:** Vercel

## Project Structure

```
onbehalf/
├── docs/
│   └── functional-specification.md    # Complete functional spec from 2006
├── prisma/
│   └── schema.prisma                  # Database schema
├── src/
│   ├── app/                           # Next.js app router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                   # Homepage
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── providers.tsx
│   │   ├── mode-toggle.tsx
│   │   └── ui/
│   │       └── button.tsx
│   └── lib/
│       ├── utils.ts
│       └── prisma.ts
├── .env.example                       # Environment variables template
├── package.json                       # Dependencies
├── tailwind.config.ts                 # Tailwind configuration
└── tsconfig.json                      # TypeScript configuration
```

## Key Features (from Functional Specification)

### User Management
- Matchmaker registration with multi-step wizard
- Email verification
- Password recovery
- User roles: User, Admin, Moderator

### Single Friend Profiles
- Personal details and stats
- Lifestyle/Attitudes (slide meters)
- Personality traits (checkboxes)
- Photo upload with moderation
- Approval workflow

### Membership & Payments
- Free vs Premium membership tiers
- Subscription management (Monthly/Quarterly/Annual)
- Multiple payment methods (Card, Cheque, Wire)
- Promotion codes
- Recurring billing via Stripe

### Search & Discovery
- Basic search (Gender, Age, Location)
- Advanced search (Paid members only)
  - Personal stats filtering
  - Lifestyle sliders with tolerance
  - Personality trait matching

### Social Features
- Matchmaker friendship system
- Friend requests (accept/reject)
- Private messaging (Inbox)
- Matchmaker ratings (eBay-style feedback)

### Admin Console
- User management
- Profile approval workflow
- Photo moderation
- Promotions management
- Activity logs
- Subscription monitoring

## Getting Started

1. **Install dependencies:**
   ```bash
   cd onbehalf
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Set up the database:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Database Schema

The Prisma schema includes models for:
- **Users** (Matchmakers) with authentication
- **SingleFriends** with detailed profiles
- **PersonalityTrait** for matching
- **Photo** management
- **FriendRequest** & **Friendship** systems
- **Message** for inbox functionality
- **MatchmakerRating** for feedback
- **Subscription** & **Payment** for billing
- **Promotion** for discounts
- **ActivityLog** for auditing
- **Article** for content management

## Next Steps

To complete the implementation:

1. Install dependencies: `npm install`
2. Set up PostgreSQL database
3. Configure environment variables
4. Run database migrations
5. Implement API routes for:
   - Authentication (NextAuth)
   - Search functionality
   - Messaging system
   - Payment processing (Stripe)
   - Admin endpoints
6. Create additional UI components
7. Build out page routes
8. Set up Stripe webhooks
9. Configure email templates
10. Deploy to Vercel

## License

Private - OnBehalf Ltd