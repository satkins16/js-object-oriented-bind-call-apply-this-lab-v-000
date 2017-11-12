function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function seThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}
