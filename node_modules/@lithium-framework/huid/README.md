# Lithium-HUID

Lithium-HUID / [Documentation](docs/modules.md) / [Tests](tests/reports/test-report.md)

Lithium-HUID est une bibliothèque TypeScript pour la gestion d'UUID hiérarchiques (UUID).

## Introduction

Les UUID hiérarchiques sont des identifiants uniques qui combinent plusieurs composants pour former une structure hiérarchique. Lithium-HUID permet la création et la gestion d'UUID hiérarchiques en TypeScript.

## Fonctionnalités

- Génération d'UUID hiérarchiques personnalisés.
- Extraction des composants individuels d'un UUID hiérarchique.
- Conversion d'UUID hiérarchiques en chaînes.
- Génération d'UUID de version 4.
- Encodage de chaînes de longueur fixe avec des caractères hexadécimaux aléatoires.

## Installation

Vous pouvez installer Lithium-HUID à l'aide de npm ou yarn :

```bash
npm install Lithium-huid
# ou
yarn add Lithium-huid
```

## Exemple d'utilisation

Voici un exemple simple d'utilisation de Lithium-HUID pour générer un UUID hiérarchique :

```typescript
import { uuid, _HUID } from 'Lithium-huid';

// Génération d'un UUID hiérarchique
const hierarchicalUUID = uuid.hv1();

console.log('UUID Hiérarchique :', hierarchicalUUID);
console.log('Composant ID :', hierarchicalUUID.componentId);
console.log('Collection ID :', hierarchicalUUID.collectionId);
```

## Documentation

Pour plus de détails sur l'utilisation de Lithium-HUID, consultez la documentation complète.