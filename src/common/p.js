export default (owner, proxy) => {
  if (owner) owner.P = proxy
  return owner
}
