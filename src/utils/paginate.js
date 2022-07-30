export function Paginate(items, numberPage, pageSize) {
    const startIndex = (numberPage -1 ) * pageSize;
    const endIndex = numberPage * pageSize;

   return items.slice(startIndex, endIndex);
}