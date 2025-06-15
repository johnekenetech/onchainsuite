# OnChain Suite Waitlist

A modern landing page with waitlist functionality built using Next.js, Tailwind CSS, and Firebase.

## Features

- Responsive landing page with video background
- Email waitlist signup
- Firebase Firestore integration
- Toast notifications for user feedback
- Mobile-first design

## Prerequisites

- Node.js 18+ and npm
- Firebase account

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Create a web app and get your configuration

4. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app directory
- `/src/app/api` - API routes
- `/src/lib` - Utility functions and Firebase configuration
- `/public` - Static assets

## Adding Analytics

To add Google Analytics:

1. Create a Google Analytics 4 property
2. Add the measurement ID to your `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Add the Google Analytics script to your layout file

## Deployment

The project is ready to be deployed to platforms like Vercel or Netlify. Make sure to:

1. Set up environment variables in your deployment platform
2. Configure Firebase security rules for production
3. Update CORS settings if needed

## License

MIT
