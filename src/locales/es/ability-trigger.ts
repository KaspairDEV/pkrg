import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
    'blockRecoilDamage' : `{{pokemonName}}'s {{abilityName}}\nprotected it from recoil!`,
    'stockpile' : `{{pokemonName}}\nreservo {{stockpileNumber}}!`,
    'badDreams': `{{pokemonName}} Está atormentado!`
} as const;
