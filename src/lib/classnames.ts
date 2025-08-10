// Utility to merge a list of conditionally applied class names into a single string
// Prefer this over repeating local helpers in components to keep class merging consistent

export function mergeClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}


