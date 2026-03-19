# Onsdagsopgav - Image Hook

Dette projekt demonstrerer et useImages hook, som automatisk finder billedstier i public-mappen uden hardcoding.

## Krav opfyldt

- Hooket returnerer alle billeder i public som et array
- Ingen hardcodede billedstier
- Hooket kaldes i UI
- Arrayet mappes for at vise billederne

## Mappestruktur

- app/api/images/route.js: Scanner public rekursivt og returnerer billedstier
- hooks/useImages.js: Henter billedlisten fra API og returnerer state
- app/page.js: Kalder hooket og mapper billeder i et grid
- public/: Laeg dine egne billeder her

## Koer projektet

```bash
npm install
npm run dev
```

åben derefter http://localhost:3000.

## Brug

1. Laeg billeder i public mappen (du kan ogsaa bruge undermapper)
2. Opdater siden
3. Billederne vises automatisk
