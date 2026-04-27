# test-portal

This directory exists **only** to give the
[worthy-ai-wayfinding-pipeline](https://github.com/bestpass/worthy-ai-wayfinding-pipeline)
generator a parseable React Router app to extract routes from. It is not a
real product, doesn't compile or build as part of this repo, and is not
served by GitHub Pages. The site you actually see at
`rafat69ahmed.github.io` is unaffected — that's the static HTML/CSS at the
repository root.

This fixture lives on the `dev` branch only. The pipeline pulls it down,
walks `src/components/MainComponents.tsx` with ts-morph, and produces a
navigation registry (`{portal}.json`) that worthy-ai-style agents can
consume.

## When the pipeline runs

It runs whenever this branch is pushed to (once the trigger workflow is
wired up — see Task 11 in the pipeline repo).

## Routes the fixture exercises

| URI | Pattern under test |
| --- | --- |
| `/` | Plain route |
| `/dashboard` | Plain route, second component |
| `/vehicles` | Plain route, demonstrates keyword extraction |
| `/billing/*` | Wildcard parent + sub-tabs via tabOptions |
| `/billing/statements`, `/billing/payments` | Sub-routes (TabbedRouting pattern) |
| `/users/add` | Step-up-protected route (re-auth required) |
| `/changeEmail` | Flag-gated route (`{canChangeOwnEmail && <Route .../>}`) |

Edit `src/components/MainComponents.tsx` to add or change routes. Push to
this branch and the pipeline will pick up the changes.
