var tradeIcons = {
    "Mason":       '<path d="M3 20h18"/><path d="M4 16h7v4H4z"/><path d="M13 16h7v4h-7z"/><path d="M7 12h10v4H7z"/><path d="M9 8h6v4H9z"/>',
    "Helper":      '<path d="M12 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/><path d="M8 21v-5l-2-1 2-5h8l2 5-2 1v5"/>',
    "Electrician": '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.3.3.5.7.5 1.1h6c0-.4.2-.8.5-1.1A6 6 0 0 0 12 3z"/>',
    "Plumber":     '<path d="M4 7h6v4H4z"/><path d="M10 9h5a3 3 0 0 1 3 3v8"/><path d="M15 20h6"/><path d="M6 4v3"/>',
    "Carpenter":   '<path d="M3 19l9-9"/><path d="M10 8l3-3 4 4-3 3z"/><path d="M15 5l2-2 4 4-2 2"/><path d="M3 19v2h2"/>',
    "Painter":     '<path d="M4 5h11v5H4z"/><path d="M15 7h3a2 2 0 0 1 2 2v2h-5"/><path d="M9 10v4"/><path d="M7 14h4v7H7z"/>',
    "Cleaner":     '<path d="M14 3l-4 8"/><path d="M8 11h9l2 10H6z"/><path d="M11 14v4"/><path d="M15 14v4"/>',
    "Cook":        '<path d="M4 14h16"/><path d="M5 14a7 7 0 0 1 14 0"/><path d="M3 18h18"/><path d="M12 4v3"/>',
    "Loader":      '<path d="M4 8h9v8H4z"/><path d="M13 11h4l3 3v2h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/>',
    "Driver":      '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v5"/><path d="M6.5 17l3-2.5"/><path d="M17.5 17l-3-2.5"/>'
};

var signIcons = {
    "worker": '<circle cx="12" cy="6" r="3"/><path d="M6 21v-6l-2-1 2.5-5h11L20 14l-2 1v6"/><path d="M10 21v-4h4v4"/>',
    "boss":   '<path d="M3 20h18"/><path d="M5 20V9l5-4 5 4v11"/><path d="M15 20v-7h4v7"/><path d="M9 20v-5h2v5"/>',
    "mic":    '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
    "speak":  '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19 5a9 9 0 0 1 0 14"/><path d="M15.5 8.5a4 4 0 0 1 0 7"/>',
    "tick":   '<path d="M4 12.5l5.5 5.5L20 7"/>',
    "cross":  '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
    "money":  '<path d="M4 6h16v12H4z"/><circle cx="12" cy="12" r="3"/><path d="M8 12h.01"/><path d="M16 12h.01"/>',
    "place":  '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'
};

function icon(name, size, color) {
    var inside = tradeIcons[name];
    if (inside == null) { inside = signIcons[name]; }
    if (inside == null) { inside = tradeIcons["Helper"]; }

    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '"' +
           ' fill="none" stroke="' + color + '" stroke-width="1.7"' +
           ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
           inside + '</svg>';
}
