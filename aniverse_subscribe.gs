// =====================================================================
// AniVerse — Subscriber Management
// Google Apps Script Web App
//
// SETUP (do this once):
// 1. Go to script.google.com → New project → paste this entire file
// 2. Create a Google Sheet and copy its ID into SHEET_ID below
//    (the long string in the Sheet URL between /d/ and /edit)
// 3. Click Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the Web App URL and paste it into SubscribeSection.jsx
//    replacing 'YOUR_APPS_SCRIPT_URL_HERE'
// 5. Re-deploy (New deployment) any time you change this script
// =====================================================================

const SHEET_ID   = '1aotTKfKpEgo4uEcSWTH5J8SnPMK77bvLmCXf2s2ohxo';   // ← paste your Sheet ID
const SHEET_NAME = 'AniVerse Subscriber';                  // tab name in the Sheet
const FROM_NAME  = 'The AniVerse';                 // sender display name

// --------------------------------------------------------------------
// doPost — receives subscribe form submissions from the website
// --------------------------------------------------------------------
function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents);
    const name  = (data.name  || '').trim();
    const email = (data.email || '').trim();

    if (!name || !email) {
      return jsonResponse({ status: 'error', message: 'Name and email are required.' });
    }

    const sheet = getOrCreateSheet();

    // Prevent duplicate subscriptions
    const existing = sheet.getDataRange().getValues();
    const alreadySubscribed = existing.some(row => row[1] === email);
    if (alreadySubscribed) {
      return jsonResponse({ status: 'duplicate', message: 'Already subscribed.' });
    }

    // Append subscriber row: [timestamp, email, name, status]
    sheet.appendRow([new Date(), email, name, 'active']);

    // Send confirmation email to subscriber
    sendConfirmationEmail(name, email);

    return jsonResponse({ status: 'success' });

  } catch (err) {
    return jsonResponse({ status: 'error', message: err.message });
  }
}

// --------------------------------------------------------------------
// doGet — simple health check (visit the Web App URL in browser to test)
// --------------------------------------------------------------------
function doGet() {
  return ContentService.createTextOutput('AniVerse subscriber service is running.');
}

// --------------------------------------------------------------------
// sendConfirmationEmail — sent to subscriber on sign-up
// --------------------------------------------------------------------
function sendConfirmationEmail(name, email) {
  const subject = `You're subscribed to The AniVerse`;
  const body    = `Hi ${name},\n\nThank you for subscribing to The AniVerse.\n\nWhenever a new essay is published, you'll receive an email with a direct link to read it.\n\nLooking forward to sharing more stories with you.\n\n— Animesh\nhttps://projectdwister.github.io/AniVerse/`;

  GmailApp.sendEmail(email, subject, body, { name: FROM_NAME });
}

// --------------------------------------------------------------------
// notifySubscribers — run this manually when you publish a new story
//
// HOW TO USE:
// 1. Open this script in script.google.com
// 2. Edit the three variables below (title, slug, blurb)
// 3. Select notifySubscribers from the function dropdown
// 4. Click Run
// --------------------------------------------------------------------
function notifySubscribers() {
  // ← Edit these three lines before running
  const storyTitle = 'The Hotel';
  const storySlug  = 'the-hotel';   // must match the slug in posts.js
  const storyBlurb = 'A luxury hotel is where common sense checks in, looks around, and quietly leaves.';

  const storyUrl = `https://projectdwister.github.io/AniVerse/#/story/${storySlug}`;

  const sheet      = getOrCreateSheet();
  const rows       = sheet.getDataRange().getValues();
  const subscribers = rows.slice(1).filter(row => row[3] === 'active'); // skip header row

  if (subscribers.length === 0) {
    Logger.log('No active subscribers found.');
    return;
  }

  let sent = 0;
  subscribers.forEach(row => {
    const email = row[1];
    const name  = row[2];

    const subject = `New essay: ${storyTitle}`;
    const body    =
`Hi ${name},

A new essay is up on The AniVerse:

"${storyTitle}"
${storyBlurb}

Read it here:
${storyUrl}

— Animesh
https://projectdwister.github.io/AniVerse/`;

    try {
      GmailApp.sendEmail(email, subject, body, { name: FROM_NAME });
      sent++;
    } catch (err) {
      Logger.log(`Failed to send to ${email}: ${err.message}`);
    }
  });

  Logger.log(`Notified ${sent} of ${subscribers.length} subscribers.`);
}

// --------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------
function getOrCreateSheet() {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let sheet   = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Email', 'Name', 'Status']);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
