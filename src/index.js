const IPFS = require("ipfs")

async function main(){
  const node = await IPFS.create()
  console.log(await node.id())
}

main()
