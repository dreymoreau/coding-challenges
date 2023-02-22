// Given an array of integers your solution should find the smallest integer.

// sort args
// return args[0] which will have the smallest element
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b) => a - b)
      return args[0]
    }
  }
  
  let sif = new SmallestIntegerFinder()
  console.log(sif.findSmallestInt([78,56,232,12,8])) // => output 8