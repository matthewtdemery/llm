# Publish to GitHub

Recommended repository name:

```text
moviesmadeeasy-findamovie
```

Recommended initial visibility, per Matthew's current direction:

```text
Public / general access, after one final human review.
```

## Browser steps

1. Create a new GitHub repository named `moviesmadeeasy-findamovie`.
2. Choose Public only if Tom/Ben are comfortable with the contents being visible generally.
3. Do not initialize with README, .gitignore, or license; this local repo already has those.
4. From this folder, run:

```powershell
git remote add origin https://github.com/<owner>/moviesmadeeasy-findamovie.git
git push -u origin main
```

## Safer alternative

Create it Private first, add Tom/Ben as collaborators, then switch to Public after review.

## Local repo author

The first commit uses a non-personal local author:

```text
MoviesMadeEasy Project <noreply@moviesmadeeasy.local>
```

That can be amended before push if Matthew wants the commit attached to a GitHub account.
