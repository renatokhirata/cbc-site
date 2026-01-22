export function formatNewsDate(raw: string | undefined | null): string {
  if (!raw) return '';

  // Preserve whether original string was wrapped with parentheses, and whether it contains 'Em' and 'às'
  const originalTrim = raw.trim();
  const hasParens = /^\(.*\)$/.test(originalTrim);
  const containsEm = /\bEm\b/i.test(originalTrim);
  const containsAs = /às|\bas\b/i.test(originalTrim);

  // The sample data uses a wrapped format like: "(Em 03/08/2025 às 09:39:54)"
  // We'll try to extract a date-time substring (dd/mm/yyyy hh:mm:ss) and parse it.
  try {
    // Remove outer parentheses for parsing but keep markers detection; do not strip 'às' here
    const withoutParens = originalTrim.replace(/^\(|\)$/g, '');
    // For parsing, remove the leading 'Em' word if present to find date/time parts
    const cleaned = withoutParens.replace(/^\s*Em\s*/i, '').trim();

    // Typical patterns we expect: "03/08/2025 às 09:39:54" or "03/08/2025"
    // Split by 'às' or 'as' (with/without accent) or by space groups
    const parts = cleaned
      .split(/às|as|\s+/i)
      .map((p) => p.trim())
      .filter(Boolean);

    // Try to find a dd/mm/yyyy substring
    const datePart = parts.find((p) => /\d{1,2}\/\d{1,2}\/\d{4}/.test(p));
    const timePart = parts.find((p) => /\d{1,2}:\d{2}(:\d{2})?/.test(p));

    if (!datePart) return raw; // fallback to original string if we can't parse

    // Build ISO-like string for Date parsing: yyyy-mm-ddThh:mm:ss
    const [day, month, year] = datePart.split('/');
    const hhmmss = timePart ? timePart : '00:00:00';

    const iso = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hhmmss}`;

    const d = new Date(iso);
    if (isNaN(d.getTime())) {
      // If parsing failed, return a cleaned shorter version (remove duplicated words)
      return hasParens ? `(${cleaned})` : cleaned;
    }

    // Build a normalized date/time string preserving original markers:
    // - keep leading 'Em' if it was present
    // - keep 'às' between date and time if it was present in the original
    const dayP = String(day).padStart(2, '0');
    const monthP = String(month).padStart(2, '0');
    const yearP = String(year).padStart(4, '0');

    const dateStr = `${dayP}/${monthP}/${yearP}`;
    const timeStr = timePart ? timePart : '';

    let rebuilt = '';
    if (containsEm) rebuilt += 'Em ';
    rebuilt += dateStr;
    if (timeStr) rebuilt += ` ${containsAs ? 'às ' : ''}${timeStr}`;

    return hasParens ? `(${rebuilt})` : rebuilt;
  } catch {
    return raw;
  }
}

export default formatNewsDate;
