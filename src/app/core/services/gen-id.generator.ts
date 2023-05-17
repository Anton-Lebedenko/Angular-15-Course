export function* genID() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}
