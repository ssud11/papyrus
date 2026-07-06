/* Papyrus — single source of truth for all four themes.
 * Design language: "Patina on warm metal."
 *   Warm oxidized metals carry DATA      — iron/sienna (keyword), brass/gold (number), olive (string)
 *   Verdigris (bronze patina) carries STRUCTURE — bright verdigris (function), deep patina (class/type)
 *   Oxblood red is reserved for DAMAGE only     — errors, invalid, deletions
 * One role map. Four papers. Light = cream/vellum; Dark = cold-iron midnight / warm lamplight.
 * EXCEPTION — Inkwell (v3 "Blueprint Ink") deliberately diverges COOL: teal/blue syntax + a violet
 * #4A38A0 self-stamp on warm cream. The warm-metal system above governs Vellum/Noir/Lamplight only.
 *
 * This object is consumed by:
 *   - papyrus-studio.jsx        (the interactive prototype / review surface)
 *   - the four VS Code theme JSONs (generated to match)
 *   - the four Claude Code TUI theme files
 *
 * Synced to the shipped theme JSONs as of 2026-06-30 (themes are authoritative; the [A]
 * palette<->theme drift check keeps this in agreement — re-derive here if they ever diverge).
 */
(function () {
  const PAPYRUS = {
    inkwell: {
      name: 'Papyrus Inkwell',
      slug: 'inkwell',
      mode: 'light',
      tagline: 'Blueprint ink on planner cream',
      paper: 'Planner cream · the cool blueprint',
      // Inkwell v3 diverged cool; it carries its own legend (warm themes use PAPYRUS._legend)
      legend: [
        { key: 'keyword',  family: 'Teal-slate',     story: 'Structural drafting ink — keywords, storage, control flow' },
        { key: 'string',   family: 'Emerald',        story: 'Literal data — strings' },
        { key: 'number',   family: 'Brass',          story: 'Warm metal anchor — numbers, constants' },
        { key: 'fn',       family: 'Teal',           story: 'The active/verb color — functions, decorators' },
        { key: 'klass',    family: 'Blueprint Blue', story: 'Linework — classes, types, tags' },
        { key: 'typeAnno', family: 'Ochre',          story: 'Secondary warm anchor — annotations, attributes' },
        { key: 'variable', family: 'Cool Ink',       story: 'Cool near-black base — variables, identifiers' },
        { key: 'selfThis', family: 'Violet',         story: 'The proof-stamp — self / this / important (rare)' },
        { key: 'error',    family: 'Oxblood',        story: 'Reserved for damage — errors, invalid, deletions' },
      ],
      chrome: {
        bg: '#FCF6E6', bgDeep: '#F4EED8', bgChrome: '#F0EAD0', bgActivity: '#E8E2C6',
        bgStatus: '#2E3640', statusFg: '#F4EED8', bgLine: '#F4EFDA', bgSel: '#C8C0A075',
        border: '#DDD4B2', borderSoft: '#EBE4C8', badge: '#5C3A1F', tabAccent: '#5C3A1F',
      },
      ink: { ink: '#1F2428', inkSoft: '#3A4148', inkMuted: '#6E6F62', inkFaint: '#A8A593' },
      role: {
        comment: '#6E695A', keyword: '#2C5E64', storage: '#2C5E64', string: '#1E7A52',
        escape: '#1E7A52', number: '#7A5418', langConst: '#7A5418', fn: '#157E6A',
        decorator: '#157E6A', klass: '#2C6E8C', iface: '#2C6E8C', typeAnno: '#6A4A16',
        attr: '#6A4A16', variable: '#13161A', param: '#4A4030', prop: '#1E222A',
        selfThis: '#4A38A0', operator: '#5E5C50', punct: '#6D6A5D', tag: '#2C6E8C',
        mdLink: '#2C6E8C', error: '#7A2E1F', warning: '#8A5818', cursor: '#1F2428',
      },
      ansi: {
        black: '#1F2428', red: '#7A2E1F', green: '#3A5A28', yellow: '#7A5418',
        blue: '#2A4A66', magenta: '#8A4030', cyan: '#1F4A52', white: '#8A8B7E',
        brightBlack: '#5C5D50', brightRed: '#9A3E28', brightGreen: '#4A6B34', brightYellow: '#9A6E22',
        brightBlue: '#3A5A78', brightMagenta: '#A05040', brightCyan: '#2A5E68', brightWhite: '#BFB89C',
      },
      tui: {
        base: 'light', claude: '#4A38A0', claudeShimmer: '#6E5AC8', text: '#1F2428',
        inverseText: '#FCF6E6', inactive: '#6E6F62', inactiveShimmer: '#A8A593', subtle: '#DDD4B2',
        suggestion: '#847F6C', permission: '#4A38A0', permissionShimmer: '#8A78D8', remember: '#4A38A0',
        success: '#1E7A52', error: '#7A2E1F', warning: '#8A5818', warningShimmer: '#7A5418', merged: '#2C6E8C',
        promptBorder: '#2C5E64', promptBorderShimmer: '#157E6A', planMode: '#2C6E8C', autoAccept: '#1E7A52',
        bashBorder: '#2C5E64', ide: '#157E6A', fastMode: '#157E6A', fastModeShimmer: '#3FA890',
        diffAdded: '#1E7A5220', diffRemoved: '#7A2E1F20', rate_limit_fill: '#2C5E64', rate_limit_empty: '#DDD4B2',
        briefLabelYou: '#6E6F62', briefLabelClaude: '#4A38A0',
        // Fullscreen-mode message backgrounds (barely-there washes of cream)
        userMessageBackground: '#F1ECD8', userMessageBackgroundHover: '#EAE3C9', messageActionsBackground: '#E6DFC2',
        bashMessageBackgroundColor: '#E8EEEA', memoryBackgroundColor: '#ECE8F4', selectionBg: '#C8C0A075',
        // Subagent identity slots (8) — spectral distinctness, muted + cream-legible. purple = the violet self.
        subagents: { red: '#B5432B', blue: '#2C6E8C', green: '#1E7A52', yellow: '#8A6A18', purple: '#4A38A0', orange: '#B5601F', pink: '#A6386A', cyan: '#157E6A' },
        // Rainbow gradient for ultrathink/ultraplan — [base, shimmer]. Violet end ties back to the accent.
        rainbow: { red: ['#B5432B', '#C85A3E'], orange: ['#B5601F', '#C8762E'], yellow: ['#8A6A18', '#A6841E'], green: ['#1E7A52', '#2E9568'], blue: ['#2C6E8C', '#3E89A8'], indigo: ['#3A4A9A', '#5260B8'], violet: ['#4A38A0', '#6E5AC8'] },
      },
    },

    vellum: {
      name: 'Papyrus Foxed Vellum',
      slug: 'vellum',
      mode: 'light',
      tagline: 'Iron-gall on aged, foxed paper',
      paper: 'Aged vellum · warmer, lived-in sister',
      chrome: {
        bg: '#F6EDD4', bgDeep: '#EFE5C6', bgChrome: '#EAE0BC', bgActivity: '#E2D7AC',
        bgStatus: '#3A2E20', statusFg: '#F6EDD4', bgLine: '#EFE6C8', bgSel: '#D2C49070',
        border: '#D8CCA8', borderSoft: '#E5DCBC', badge: '#6A3A14', tabAccent: '#6A3A14',
      },
      ink: { ink: '#2A2218', inkSoft: '#463A28', inkMuted: '#7A6E54', inkFaint: '#A89A78' },
      role: {
        comment: '#71623F', keyword: '#A2381A', storage: '#A2381A', string: '#3A5828',
        escape: '#486840', number: '#735919', langConst: '#735919', fn: '#2F5648',
        decorator: '#2F5648', klass: '#7A4420', iface: '#7A4420', typeAnno: '#6A4A16',
        attr: '#6A4A16', variable: '#2A2218', param: '#5E4A2A', prop: '#33301F',
        selfThis: '#A2381A', operator: '#6B604A', punct: '#6F6445', tag: '#7A4420',
        mdLink: '#2F5648', error: '#7A2A18', warning: '#8A5818', cursor: '#2A2218',
      },
      ansi: {
        black: '#2A2218', red: '#7A2A18', green: '#3A5828', yellow: '#8A5818',
        blue: '#3A5A66', magenta: '#A05A50', cyan: '#2F5648', white: '#A89A78',
        brightBlack: '#7A6E54', brightRed: '#A2381A', brightGreen: '#4A6B2E', brightYellow: '#A07418',
        brightBlue: '#4A6E7C', brightMagenta: '#B0685A', brightCyan: '#3A6B5A', brightWhite: '#C2B48E',
      },
      tui: {
        base: 'light', claude: '#2F5648', claudeShimmer: '#244C46', text: '#2A2218',
        inverseText: '#F6EDD4', inactive: '#7A6E54', inactiveShimmer: '#A89A78', subtle: '#D8CCA8',
        suggestion: '#8E7C50', permission: '#6A3A14', permissionShimmer: '#9A7822', remember: '#A2381A',
        success: '#4A6B2E', error: '#7A2A18', warning: '#8A5818', warningShimmer: '#9A7822', merged: '#6A3A14',
        promptBorder: '#6A3A14', promptBorderShimmer: '#9A7822', planMode: '#244C46', autoAccept: '#4A6B2E',
        bashBorder: '#6A3A14', ide: '#2F5648', fastMode: '#9A7822', fastModeShimmer: '#8A5818',
        diffAdded: '#3A582820', diffRemoved: '#7A2A1820', rate_limit_fill: '#6A3A14', rate_limit_empty: '#D8CCA8',
        briefLabelYou: '#7A6E54', briefLabelClaude: '#2F5648',
        // Fullscreen-mode message backgrounds (washes of foxed paper)
        userMessageBackground: '#EEE4C8', userMessageBackgroundHover: '#E7DCBC', messageActionsBackground: '#E2D7AC',
        bashMessageBackgroundColor: '#E6E8DC', memoryBackgroundColor: '#ECE2D0', selectionBg: '#D2C49070',
        // Subagent identity slots (8) — spectral distinctness, parchment-legible
        subagents: { red: '#A2381A', blue: '#2C5A72', green: '#4E7242', yellow: '#8A6A14', purple: '#5A4A8C', orange: '#9A5A1A', pink: '#97386A', cyan: '#2F6358' },
        // Rainbow gradient for ultrathink/ultraplan — [base, shimmer]
        rainbow: { red: ['#A2381A', '#B8492A'], orange: ['#9A5A1A', '#B0702A'], yellow: ['#8A6A14', '#A4841E'], green: ['#4E7242', '#5E8A52'], blue: ['#2C5A72', '#3C7290'], indigo: ['#3E4684', '#525CA0'], violet: ['#5A4A8C', '#7460A8'] },
      },
    },

    noir: {
      name: 'Papyrus Noir',
      slug: 'noir',
      mode: 'dark',
      tagline: 'Jewel Noir · ember, gold & verdigris on true black',
      paper: 'Midnight iron · true-black editor, lifted warm chrome',
      chrome: {
        // editor stays true black; chrome is LIFTED and borders made VISIBLE for depth (the fix)
        // v2 accent pass: identity accents (badge, active tab) moved to ember; amber = warnings only
        bg: '#000000', bgDeep: '#0A0805', bgChrome: '#1A150E', bgActivity: '#14100A',
        bgStatus: '#1F1A12', statusFg: '#CFC4A8', bgLine: '#0D0A06', bgSel: '#3A2E1880',
        border: '#2E261A', borderSoft: '#221C12', badge: '#C86038', tabAccent: '#C86038',
      },
      ink: { ink: '#CFC4A8', inkSoft: '#AAA088', inkMuted: '#8A7E66', inkFaint: '#574E3C' },
      role: {
        comment: '#6E6858', keyword: '#C86038', storage: '#C86038', string: '#A8B478',
        escape: '#B8C488', number: '#EDE2C6', langConst: '#EDE2C6', fn: '#3FC8AE',
        decorator: '#3FC8AE', klass: '#E8A230', iface: '#E8A230', typeAnno: '#C9A86A',
        attr: '#C9A86A', variable: '#CFC4A8', param: '#C2A878', prop: '#C5BCA0',
        selfThis: '#FF8814', operator: '#B0A484', punct: '#7E7460', tag: '#E8A230',
        mdLink: '#3FC8AE', error: '#D26A55', warning: '#DDA065', cursor: '#A8B580',
      },
      ansi: {
        black: '#4F4838', red: '#D26A55', green: '#80B89A', yellow: '#D4B068',
        blue: '#6FA0B8', magenta: '#D88A78', cyan: '#80C0C0', white: '#AAA088',
        brightBlack: '#7E7460', brightRed: '#E07A60', brightGreen: '#9ACBA8', brightYellow: '#E0BC78',
        brightBlue: '#8FB8CC', brightMagenta: '#E4A092', brightCyan: '#9AD2D2', brightWhite: '#EDE2C6',
      },
      tui: {
        base: 'dark', claude: '#3FC8AE', claudeShimmer: '#62D8BE', text: '#CFC4A8',
        inverseText: '#000000', inactive: '#8A7E66', inactiveShimmer: '#574E3C', subtle: '#2E261A',
        suggestion: '#6E6858', permission: '#D89060', permissionShimmer: '#E8B070', remember: '#FF8814',
        success: '#A8B478', error: '#D26A55', warning: '#D89060', warningShimmer: '#DDA065', merged: '#E8A230',
        promptBorder: '#C86038', promptBorderShimmer: '#FF8814', planMode: '#2FA890', autoAccept: '#A8B478',
        bashBorder: '#C86038', ide: '#3FC8AE', fastMode: '#E8A230', fastModeShimmer: '#F0B040',
        diffAdded: '#3FC8AE20', diffRemoved: '#D26A5520', rate_limit_fill: '#C86038', rate_limit_empty: '#2E261A',
        briefLabelYou: '#8A7E66', briefLabelClaude: '#3FC8AE',
        // Fullscreen-mode message backgrounds (warm ash over true black)
        userMessageBackground: '#12100A', userMessageBackgroundHover: '#1A150E', messageActionsBackground: '#221C12',
        bashMessageBackgroundColor: '#0E1210', memoryBackgroundColor: '#1A120A', selectionBg: '#3A2E1880',
        // Subagent identity slots (8) — spectral distinctness, black-legible
        subagents: { red: '#D26A55', blue: '#7FA8C8', green: '#A8B478', yellow: '#E8C878', purple: '#A98AD8', orange: '#E8963C', pink: '#D890A8', cyan: '#4FC8B2' },
        // Rainbow gradient for ultrathink/ultraplan — [base, shimmer]
        rainbow: { red: ['#D26A55', '#E08A72'], orange: ['#E8963C', '#F0AC58'], yellow: ['#E8C878', '#F0D88E'], green: ['#B5C078', '#C8CE8E'], blue: ['#7FA8C8', '#98BCD6'], indigo: ['#8E92D0', '#A6A8DE'], violet: ['#A98AD8', '#BFA6E4'] },
      },
    },

    lamplight: {
      name: 'Papyrus Lamplight',
      slug: 'lamplight',
      mode: 'dark',
      tagline: 'Warm lamplit study · parchment ink at 11pm',
      paper: 'Lamplit cocoa · the warm dark, glowing',
      chrome: {
        bg: '#181210', bgDeep: '#1F1814', bgChrome: '#241C16', bgActivity: '#1C1612',
        bgStatus: '#2E241C', statusFg: '#E8D8B5', bgLine: '#1F1814', bgSel: '#4A382080',
        border: '#352A20', borderSoft: '#2A2118', badge: '#E8A878', tabAccent: '#E8A878',
      },
      ink: { ink: '#E8D8B5', inkSoft: '#C0AE88', inkMuted: '#9A8868', inkFaint: '#5A4E3A' },
      role: {
        comment: '#897860', keyword: '#E8A878', storage: '#E8A878', string: '#D4B878',
        escape: '#C8C078', number: '#E8B080', langConst: '#C8C078', fn: '#9ACBA8',
        decorator: '#9ACBA8', klass: '#E08068', iface: '#E08068', typeAnno: '#D4B878',
        attr: '#D4B878', variable: '#E8D8B5', param: '#C8B488', prop: '#DCCBA4',
        selfThis: '#E8A878', operator: '#C0AE88', punct: '#897860', tag: '#E08068',
        mdLink: '#9ACBA8', error: '#D9584A', warning: '#E8A878', cursor: '#C8C078',
      },
      ansi: {
        black: '#4A3E30', red: '#E08068', green: '#A8B870', yellow: '#D4B878',
        blue: '#88AAA8', magenta: '#E89888', cyan: '#A0C8B8', white: '#C8BCA0',
        brightBlack: '#7A6E58', brightRed: '#ED9078', brightGreen: '#C0D090', brightYellow: '#ECC890',
        brightBlue: '#A0C0BE', brightMagenta: '#F0A898', brightCyan: '#B8DCCC', brightWhite: '#E8D8B5',
      },
      tui: {
        base: 'dark', claude: '#9ACBA8', claudeShimmer: '#7FC4B0', text: '#E8D8B5',
        inverseText: '#181210', inactive: '#9A8868', inactiveShimmer: '#5A4E3A', subtle: '#352A20',
        suggestion: '#897860', permission: '#E8A878', permissionShimmer: '#E8B080', remember: '#E8A878',
        success: '#D4B878', error: '#D9584A', warning: '#E8A878', warningShimmer: '#E8B080', merged: '#E8A878',
        promptBorder: '#E8A878', promptBorderShimmer: '#E8B080', planMode: '#7FC4B0', autoAccept: '#D4B878',
        bashBorder: '#E8A878', ide: '#9ACBA8', fastMode: '#E8B080', fastModeShimmer: '#E8A878',
        diffAdded: '#9ACBA820', diffRemoved: '#D9584A20', rate_limit_fill: '#E8A878', rate_limit_empty: '#352A20',
        briefLabelYou: '#9A8868', briefLabelClaude: '#9ACBA8',
        // Fullscreen-mode message backgrounds (lifted cocoa)
        userMessageBackground: '#1F1814', userMessageBackgroundHover: '#241C16', messageActionsBackground: '#2A2118',
        bashMessageBackgroundColor: '#1C1F1A', memoryBackgroundColor: '#281E14', selectionBg: '#4A382080',
        // Subagent identity slots (8) — spectral distinctness, lifted for the cocoa ground
        subagents: { red: '#E08068', blue: '#92BCD0', green: '#C8C078', yellow: '#E8C890', purple: '#B89AD8', orange: '#E8A878', pink: '#E0A0B8', cyan: '#7FC4B0' },
        // Rainbow gradient for ultrathink/ultraplan — [base, shimmer]
        rainbow: { red: ['#E08068', '#E89070'], orange: ['#E8A878', '#F0BC84'], yellow: ['#E8C890', '#F0D89E'], green: ['#C8C078', '#D4CE8E'], blue: ['#92BCD0', '#A8CCDC'], indigo: ['#A6A4DE', '#BCBAE8'], violet: ['#B89AD8', '#CCB0E6'] },
      },
    },
  };

  // Role legend used by the prototype + spec (keeps the design-language story in one place)
  PAPYRUS._legend = [
    { key: 'keyword',  family: 'Iron / Sienna',     story: 'Pressed metal type — keywords, storage, control flow' },
    { key: 'string',   family: 'Olive',             story: 'Oxidized green ink — strings' },
    { key: 'number',   family: 'Brass / Gold',      story: 'Warm coin metal — numbers, constants' },
    { key: 'fn',       family: 'Verdigris',         story: 'Bright bronze patina — functions, decorators' },
    { key: 'klass',    family: 'Deep Patina',       story: 'Aged structural patina — classes, types, tags' },
    { key: 'typeAnno', family: 'Ochre',             story: 'Soft secondary metal — annotations, attributes' },
    { key: 'variable', family: 'Ink',               story: 'The base ink — variables, identifiers' },
    { key: 'error',    family: 'Oxblood',           story: 'Reserved for damage — errors, invalid, deletions' },
  ];

  window.PAPYRUS = PAPYRUS;
})();
