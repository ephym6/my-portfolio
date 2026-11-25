# react-portfolio

The source of [ephy-macharia.vercel.app](https://ephy-macharia.vercel.app/).

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload      |
| `npm run build`   | Build the production site into `dist/`    |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | Check the code with ESLint                |

## Where things live

```
src/
  data/
    profile.js        name, email, social links, CV path
    projects.js       every project on the site
    caseStudies/      long-form project pages (/projects/<slug>)
    experience.js     experience and education
    skills.js         skill groups
    techColors.js     brand colours for tech logos
  sections/           home page sections (Hero, Work, Experience, About, Contact)
  pages/              Home, CaseStudy, NotFound
  components/         Header, Footer, theme toggle and shared UI
  index.css           colour and type tokens (light and dark)
public/
  Ephy-Macharia-CV.pdf
  og-image.png        social preview image
  favicon.svg
vercel.json           sends every route to index.html so /projects/... links work
```

## Common changes

**Update the CV:** replace `public/Ephy-Macharia-CV.pdf` with the new file, keeping
the same name, then commit and push. Every "Download CV" button uses that path.

**Add a project:** add an entry to `src/data/projects.js`, with its screenshot in
`src/assets/images/projects/`. Use `group: "main"` for the Selected work list or
`group: "other"` for the shorter list.

**Add a case study:** set `caseStudy: true` on the project, write the page body in
`src/data/caseStudies/<slug>.jsx` using the `Section` and `Table` components, and
register it in `src/data/caseStudies/index.js`.

**Change colours:** edit the variables at the top of `src/index.css`. Light and dark
themes each have their own block.
