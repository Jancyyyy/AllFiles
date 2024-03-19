export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
// export function format(name:string): string{
//     return (name? `${name}`:'');
// }