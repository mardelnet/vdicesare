# 🌐 JS-Based Website Generator

Build fast, accessible, dynamic websites from a Google Sheet. No backend, no CMS, no hosting costs.

## 📖 About this project

This project makes it easy to create dynamic websites quickly, efficiently and cheaply, without sacrificing performance, speed or accessibility. It was designed with CV-style academic sites in mind, but it works just as well for any other kind of content.

## 🛠️ Tech Stack

- **Single Page Application (SPA):** page generation and application logic are handled almost entirely in vanilla JavaScript.
- **Database:** a Google Sheet, read through the Google Sheets API.

## 🚀 Installation

### 📋 Prerequisites

- A Google account
- [Node.js](https://nodejs.org/) (only needed to run the site locally)

### 🪜 Steps

1. **Fork or clone** this repository.
2. **Make a copy** of the [template Google Sheet](https://docs.google.com/spreadsheets/d/1mEUi9qemf5EoOcNaTFw0Q-iUqgJZqOfAYf4IoHE2ePw).
3. **Replace the sample content** in your copy with your own information (see [Using the spreadsheet](#-using-the-spreadsheet)).
4. **Make the sheet readable:** set its sharing option to "Anyone with the link can view" so the API can access it.
5. **Replace the homepage hero image** by overwriting these files:
   - `assets/images/victoria-320.webp`
   - `assets/images/victoria-480.webp`
   - `assets/images/victoria-650.webp`
6. **Create a Google Sheets API key.** Enable the Google Sheets API in your Google Cloud project, then follow [these instructions](https://support.google.com/googleapi/answer/6158862?hl=en) to create the key.
7. **(Recommended) Restrict the API key** to your website's domain(s). The key is visible in the client-side code, so restricting it prevents others from using it.
8. **Edit `src/js/fetchData.js`:**
   1. Set the `sheetId` constant to the ID of your sheet from step 2. It's the long string in the sheet's URL, between `/d/` and `/edit`.
   2. Set the `apiKey` constant to the API key from step 6.
9. **(Optional) Run the site locally:**
   1. Open a terminal in the project folder and run `npx serve -s .`
   2. Visit `http://localhost:3000/`.
10. **Publish the site.** Any hosting service will work. We recommend [Vercel](https://vercel.com/) because it's free and simple, and it integrates with GitHub to enable [automatic deployments on every Git push](https://vercel.com/docs/git/vercel-for-github).

## 📊 Using the spreadsheet

The Google Sheet acts as the project's database. Each new tab (sheet) you add becomes a page on the website, automatically linked in the navigation menus. The page's URL slug is generated from the tab name. For example, a tab named "A new test page" produces a page with the slug `a-new-test-page`.

**Data entered in the sheet like this:**

| Column A     | Column B     |
| ------------ | ------------ |
| column A foo | column B foo |
| column A bar | column B bar |
| column A baz | column B baz |

**is rendered on the website like this:**

```
column A foo
column B foo

---------------------------------------------

column A bar
column B bar

---------------------------------------------

column A baz
column B baz
```

## 🎨 Customizing the website

The project uses plain CSS for its design, and all stylesheets live in the `src/css` folder. The quickest ways to customize the look and feel are:

- **Colors:** change the color palette in the `:root` block of `src/css/base.css`.
- **Fonts:** replace the font files in `assets/fonts`.