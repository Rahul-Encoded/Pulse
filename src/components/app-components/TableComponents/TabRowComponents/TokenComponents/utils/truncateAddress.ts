export default function truncateAddress(
  address: string,
  iniLength: number,
  endLength: number
) {
  return address.slice(0, iniLength) + "..." + address.slice(-endLength);
}
